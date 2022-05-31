import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';

function ImageUpload(props) {
  /*
    1. 사용자가 이미지를 업로드.
    2. 업로드 한 이미지를 받아서 서버에서 저장.
    3. 저장한 이미지의 경로를 다시 클라이언트에게 전송.
    4. 경로를 받아서 post model에 저장.
    */
  const [ImageTime, setImageTime] = useState('');

  async function FileUpload(e) {
    var formData = new FormData();
    formData.append('file', e.target.files[0]);
    try {
      setImageTime('이미지 첨부중입니다.');
      const response = await axios.post('/api/post/image/upload', formData);
      props.setImage(response.data.filePath);
      setImageTime('이미지 첨부에 성공하였습니다.');
    } catch (error) {
      console.log(error.code);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setImageTime('');
    }, 3500);
  }, [ImageTime]);

  return (
    <div>
      <Form.Control
        type='file'
        className='shadow-none'
        accept='image/*'
        onChange={(e) => FileUpload(e)}
      />
      {ImageTime !== '' && <p>{ImageTime}</p>}
    </div>
  );
}

export default ImageUpload;
