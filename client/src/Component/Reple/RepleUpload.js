import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function RepleUpload(props) {
  const [Reple, setReple] = useState('');
  const user = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!Reple) {
      return alert('댓글을 작성해 주세요!');
    }

    let body = {
      reple: Reple,
      uid: user.uid,
      postId: props.postId,
    };

    axios.post('/api/reple/submit', body).then((response) => {
      if (response.data.success) {
        alert('댓글 작성이 완료되었습니다.');
        window.location.reload();
      } else {
        alert('댓글 작성에 실패하였습니다.');
      }
    });
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
