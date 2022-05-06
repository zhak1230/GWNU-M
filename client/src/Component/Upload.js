import React, { useState, useEffect } from 'react';

function Upload(props) {
  const [Content, setContent] = useState();

  const onSubmit = () => {
    let tempArr = [...props.ContentList];
    tempArr.push(Content);
    props.setContentList([...tempArr]);
    setContent('');
  };

  useEffect(() => {
    console.log('Content가 바뀌었습니다!');
  }, [Content]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginTop: '1rem',
      }}
    >
      <input
        type='text'
        value={Content || ''}
        onChange={(e) => {
          setContent(e.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          onSubmit();
        }}
        style={{ marginTop: '1rem' }}
      >
        제출!
      </button>
    </div>
  );
}

export default Upload;
