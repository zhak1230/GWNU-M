import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser, clearUser } from './Reducer/userSlice';
import firebase from './firebase';

import Heading from './Component/Heading';
import List from './Component/Post/List';
import Upload from './Component/Post/Upload';
import PostArea from './Component/Post/PostArea';

import Edit from './Component/Post/Edit';

import Login from './Component/User/Login';
import Register from './Component/User/Register';

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
  }, []);

  return (
    <>
      <Heading />
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/post/:postNum' element={<PostArea />} />
        <Route path='/edit/:postNum' element={<Edit />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

// 1. 가정문 : if, else, swich => 삼항연산자
// 2. 반복문 : for => map
