import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { RepleContentDiv, RepleUploadDiv } from '../../Style/RepleCSS.js';

function RepleContent(props) {
  const [ModalFlag, setModalFlag] = useState(false);
  const [Editflag, setEditflag] = useState(false);
  const [Reple, setReple] = useState(props.reple.reple);

  const user = useSelector((state) => state.user);

  const ref = useRef();
  useOnClickOutside(ref, () => setModalFlag(false));

  const SubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      uid: user.uid,
      reple: Reple,
      postId: props.reple.postId,
      repleId: props.reple._id,
    };

    axios.post('/api/reple/edit', body).then((response) => {
      if (response.data.success) {
        alert('댓글 수정을 완료하였습니다.');
      } else {
        alert('댓글 수정에 실패하였습니다.');
      }
      return window.location.reload();
    });
  };

  return (
    <RepleContentDiv>
      <div className='author'>
        <p>{props.reple.author.displayName}</p>
        {props.reple.author.uid === user.uid && (
          <div className='modalControl'>
            <span
              onClick={() => {
                setModalFlag(true);
              }}
            >
              ...
            </span>
            {ModalFlag && (
              // ModalFlag가 true일 때
              <div className='modalDiv' ref={ref}>
                <p
                  onClick={() => {
                    setEditflag(true);
                    setModalFlag(false);
                  }}
                >
                  수정
                </p>
                <p className='delete'>삭제</p>
              </div>
            )}
          </div>
        )}
      </div>
      {Editflag ? (
        <RepleUploadDiv>
          <form>
            <input
              type='text'
              value={Reple}
              onChange={(e) => {
                setReple(e.currentTarget.value);
              }}
            />
            <button
              onClick={(e) => {
                SubmitHandler(e);
              }}
            >
              등록
            </button>
          </form>
          <div className='cancel'>
            <button
              onClick={(e) => {
                e.preventDefault();
                setEditflag(false);
              }}
            >
              취소
            </button>
          </div>
        </RepleUploadDiv>
      ) : (
        <p>{props.reple.reple}</p>
      )}
    </RepleContentDiv>
  );
}

// Hook
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default RepleContent;
