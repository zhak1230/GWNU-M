import React, { useState } from 'react';

function Test() {
  const [Content, setContent] = useState();
  const [ContentList, setContentList] = useState([]);

  const onSubmit = () => {
    let tempArr = [...ContentList];
    tempArr.push(Content);
    setContentList([...tempArr]);
    setContent('');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      {ContentList.map((content, idx) => {
        return (
          <div
            key={idx}
            style={{
              width: '100%',
              marginLeft: '1rem',
            }}
          >
            내용 : {content}
            <hr />
          </div>
        );
      })}

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

export default Test;

/*

JSX
 1. CamelCase 원칙 : className
 2. js : {}
 3. style, css : {{}} + object

State
 1. 첫번째 인자 : 변수의 이름
 2. 두번째 인자 : State를 바꿔주는 함수
 3. useState 함수 인자 : State의 초기 Type, 값

 state의 갑이 바ㅜ끼어도 화면을 재랜더링(새로고침) 시킬 필요 x

 1. state의 값을 바꿀때는 항상 setState 사용!
 2. setState를 html 태그의 on 속성 호출 = function(){}


*/
