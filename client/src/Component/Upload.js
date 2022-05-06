import React, { useState, useEffect } from 'react';
import { UploadDiv, UploadFrom, UploadButtonDiv } from '../Style/UploadCSS';

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
    <UploadDiv>
      <UploadFrom>
        <label htmlFor='label'>제목</label>
        {/* 안되면 여기 확인 */}
        <input
          id='title'
          type='text'
          value={Content || ''}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <label htmlFor='content'>내용</label>
        <textarea
          id='content'
          type='text'
          value={Content || ''}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <UploadButtonDiv>
          <button
            onClick={() => {
              onSubmit();
            }}
          >
            제출
          </button>
        </UploadButtonDiv>
      </UploadFrom>
    </UploadDiv>
  );
}

export default Upload;
