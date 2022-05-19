import React from 'react';
import RepleUpload from './RepleUpload';
import RepleList from './RepleList';

function RepleArea(props) {
  return (
    <div>
      <RepleUpload postId={props.postId} />
      <RepleList postId={props.postId} />
    </div>
  );
}

export default RepleArea;
