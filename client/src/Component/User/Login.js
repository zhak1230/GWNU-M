import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginDiv } from '../../Style/UserCSS';

function Login() {
  const [Email, setEmail] = useState('');
  const [PW, setPW] = useState('');

  let navigate = useNavigate();

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
        <button>로그인</button>
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
