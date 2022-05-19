import React from 'react';
import { useSelector } from 'react-redux';
import RepleUpload from './RepleUpload';
import RepleList from './RepleList';

function RepleArea(props) {
  const user = useSelector((state) => state.user);

  return (
    <div>
      {user.accessToken && <RepleUpload postId={props.postId} />}
      <RepleList postId={props.postId} />
    </div>
  );
}

export default RepleArea;
