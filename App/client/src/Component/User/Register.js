import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { LoginDiv } from '../../Style/UserCSS';

import firebase from '../../firebase';
import axios from 'axios';

function Register() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [PW, setPW] = useState('');
  const [PWConfirm, setPWConfirm] = useState('');
  const [Flag, setFlag] = useState(false);
  const [NameCheck, setNameCheck] = useState(false);
  const [NameInfo, setNameInfo] = useState('');

  const user = useSelector((state) => state.user);
  let navigate = useNavigate();

  useEffect(() => {
    if (user.accessToken) {
      navigate('/');
    }
  }, []);

  const RegisterFunc = async (e) => {
    setFlag(true);
    e.preventDefault();
    if (!(Name && Email && PW && PWConfirm)) {
      return alert('모든 값을 채워주세요!');
    }
    if (Email !== '@') {
      return alert('이메일 형식을 확인해 주세요.');
    }
    if (PW !== PWConfirm) {
      return alert('비밀번호와 비밀번호 확인 값은 같아야 합니다.');
    }
    if (!NameCheck) {
      return alert('닉네임 중복검사를 진행해 주세요.');
    }

    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(Email, PW);

    await createdUser.user.updateProfile({
      displayName: Name,
      // photoURL:
      //   'https://kr.object.ncloudstorage.com/gwnu-community/user/user.png',
    });

    // console.log(createdUser.user);
    let body = {
      email: createdUser.user.multiFactor.user.email,
      displayName: createdUser.user.multiFactor.user.displayName,
      uid: createdUser.user.multiFactor.user.uid,
      // photoURL:
      //   'https://kr.object.ncloudstorage.com/gwnu-community/user/user.png',
    };
    axios.post('/api/user/register', body).then((response) => {
      setFlag(false);
      if (response.data.success) {
        // 회원가입 성공시
        navigate('/login');
      } else {
        // 회원가입 실패시
        return alert('회원가입에 실패하였습니다.');
      }
    });
  };

  const NameCheckFunc = (e) => {
    e.preventDefault();
    if (!Name) {
      return alert('닉네임을 입력해 주세요.');
    }
    let body = {
      displayName: Name,
    };
    axios.post('/api/user/namecheck', body).then((response) => {
      if (response.data.success) {
        if (response.data.check) {
          setNameCheck(true);
          setNameInfo('사용 가능한 닉네임입니다.');
        } else {
          setNameInfo('사용 불가능한 닉네임입니다.');
        }
      }
    });
  };

  return (
    <LoginDiv>
      <form>
        <label>닉네임</label>
        <input
          type='name'
          value={Name}
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
          disabled={NameCheck}
        />
        {NameInfo}
        <button onClick={(e) => NameCheckFunc(e)}>닉네임 중복검사</button>
        <label>이메일</label>
        <input
          type='email'
          value={Email}
          placeholder='e-mail'
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <label>비밀번호</label>
        <input
          type='password'
          value={PW}
          placeholder='8자 이상이여야 합니다'
          minLength={8}
          onChange={(e) => {
            setPW(e.currentTarget.value);
          }}
        />
        <label>비밀번호 확인</label>
        <input
          type='password'
          placeholder='8자 이상이여야 합니다'
          value={PWConfirm}
          minLength={8}
          onChange={(e) => {
            setPWConfirm(e.currentTarget.value);
          }}
        />
        <button
          disabled={Flag}
          onClick={(e) => {
            RegisterFunc(e);
          }}
        >
          회원가입
        </button>
      </form>
    </LoginDiv>
  );
}

export default Register;
