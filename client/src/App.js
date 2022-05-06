import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Test from './Test';
import Heading from './Component/Heading';
import List from './Component/List';
import Upload from './Component/Upload';

function App() {
  const [ContentList, setContentList] = useState([]);

  return (
    <>
      <Heading />
      <Routes>
        <Route
          path='/list'
          element={
            <List ContentList={ContentList} setContentList={setContentList} />
          }
        />
        <Route
          path='/upload'
          element={
            <Upload ContentList={ContentList} setContentList={setContentList} />
          }
        />
      </Routes>
    </>
  );
}

export default App;

// 1. 가정문 : if, else, swich => 삼항연산자
// 2. 반복문 : for => map
