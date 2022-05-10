import React, { useState } from 'react';

import { LoginDiv } from '../../Style/UserCSS';

import firebase from '../../firebase';

function Register() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [PW, setPW] = useState('');
  const [PWConfirm, setPWConfirm] = useState('');

  const RegisterFunc = async (e) => {
    e.preventDefault();
    if (!(Name && Email && PW && PWConfirm)) {
      return alert('모든 값을 채워주세요!');
    }
    if (PW !== PWConfirm) {
      return alert('비밀번호와 비밀번호 확인 값은 같아야 합니다.');
    }
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(Email, PW);

    await createdUser.user.updateProfile({
      displayName: Name,
    });

    console.log(createdUser.user);
  };

  return (
    <LoginDiv>
      <form>
        <label>이름</label>
        <input
          type='name'
          value={Name}
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        />
        <label>이메일</label>
        <input
          type='email'
          value={Email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <label>비밀번호</label>
        <input
          type='password'
          value={PW}
          onChange={(e) => {
            setPW(e.currentTarget.value);
          }}
        />
        <label>비밀번호 확인</label>
        <input
          type='password'
          value={PWConfirm}
          onChange={(e) => {
            setPWConfirm(e.currentTarget.value);
          }}
        />
        <button
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
