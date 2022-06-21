import React from 'react';

import { Link } from 'react-router-dom';
import { NoticeDiv, NoticeContainer, NoticeItem } from '../Style/NoticeCSS';

import moment from 'moment';
import 'moment/locale/ko';

function Notice(props) {
  const SetTime = (a, b) => {
    if (a !== b) {
      return moment(b).format('YYYY MMMM Do');
    } else {
      return moment(a).format('YYYY MMMM Do');
    }
  };

  return (
    <NoticeDiv>
      <NoticeContainer>
        {props.PostList.map((post, idx) => {
          // console.log(post); 이거 키고끄기
          return (
            <NoticeItem key={idx}>
              <Link to={`/post/${post.postNum}`}>
                <div className='author'>
                  <p className='title'>{post.title}</p>
                  <p className='time'>
                    {SetTime(post.createdAt, post.updatedAt)}
                  </p>
                </div>
              </Link>
            </NoticeItem>
          );
        })}
      </NoticeContainer>
    </NoticeDiv>
  );
}

export default Notice;
