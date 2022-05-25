import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginDiv } from '../../Style/UserCSS';

import firebase from '../../firebase';

function Login() {
  const [Email, setEmail] = useState('');
  const [PW, setPW] = useState('');
  const [ErrorMsg, setErrorMsg] = useState('');

  let navigate = useNavigate();

  const SignInFunc = async (e) => {
    e.preventDefault();
    if (!(Email && PW)) {
      return alert('이메일 또는 비밀번호를 입력해주세요.');
    }
    try {
      await firebase.auth().signInWithEmailAndPassword(Email, PW);
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setErrorMsg('존재하지 않는 이메일입니다.');
      } else if (error.code === 'auth/wrong-password') {
        setErrorMsg('비밀번호가 일치하지 않습니다.');
      } else {
        setErrorMsg('로그인이 실패하였습니다.');
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorMsg('');
    }, 3500);
  }, [ErrorMsg]);

  return (
    <LoginDiv>
      <form>
        <input
          type='email'
          value={Email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <input
          type='password'
          value={PW}
          onChange={(e) => {
            setPW(e.currentTarget.value);
          }}
        />
        {ErrorMsg !== '' && <p>{ErrorMsg}</p>}
        <button
          onClick={(e) => {
            SignInFunc(e);
          }}
        >
          로그인
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate('/register');
          }}
        >
          회원가입
        </button>
      </form>
    </LoginDiv>
  );
}

export default Login;
