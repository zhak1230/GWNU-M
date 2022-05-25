import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser, clearUser } from './Reducer/userSlice';
import firebase from './firebase';

import Heading from './Component/Heading';
import MainPage from './Component/MainPage';
import Upload from './Component/Post/Upload';
import PostArea from './Component/Post/PostArea';

import Edit from './Component/Post/Edit';

import Login from './Component/User/Login';
import Register from './Component/User/Register';
// import MyPage from './Component/User/MyPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      // console.log('userInfo: ', userInfo);
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(clearUser());
      }
    });
  }, [dispatch]);

  return (
    <>
      <Heading />
      <Routes>
        <Route path='/' element={<MainPage />} />
        {/* Post, Reple */}
        <Route path='/upload' element={<Upload />} />
        <Route path='/post/:postNum' element={<PostArea />} />
        <Route path='/edit/:postNum' element={<Edit />} />

        {/* User */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path='/MyPage' element={<MyPage />} /> */}
      </Routes>
    </>
  );
}

export default App;

// 1. 가정문 : if, else, swich => 삼항연산자
// 2. 반복문 : for => map
