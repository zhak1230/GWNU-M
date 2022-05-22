import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { RepleContentDiv, RepleUploadDiv } from '../../Style/RepleCSS.js';

function RepleContent(props) {
  const [ModalFlag, setModalFlag] = useState(false);
  const [Editflag, setEditflag] = useState(false);
  const [Reple, setReple] = useState('');

  const user = useSelector((state) => state.user);

  const ref = useRef();
  useOnClickOutside(ref, () => setModalFlag(false));

  const SubmitHandler = () => {};

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
