import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function RepleUpload() {
  const [Reple, setReple] = useState('');

  const user = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();

    let body = {
      reple: Reple,
      uid: user.uid,
    };

    axios.post('/api/reple/submit', body);
  };

  return (
    <div>
      <input
        type='text'
        value={Reple}
        onChange={(e) => {
          setReple(e.currentTarget.value);
        }}
      />
      <button
        onClick={(e) => {
          submitHandler(e);
        }}
      >
        등록
      </button>
    </div>
  );
}

export default RepleUpload;
