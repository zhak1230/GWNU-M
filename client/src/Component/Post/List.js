import React from 'react';

// import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { ListDiv, ListItem } from '../../Style/ListCSS';

import moment from 'moment';
import 'moment/locale/ko';

function List(props) {
  const SetTime = (a, b) => {
    if (a !== b) {
      return moment(b).format('YYYY MMMM Do, a hh:mm') + ' (수정됨)';
    } else {
      return moment(a).format('YYYY MMMM Do, a hh:mm');
    }
  };

  return (
    <ListDiv>
      {props.PostList.map((post, idx) => {
        // console.log(post); 이거 키고끄기
        return (
          <ListItem key={idx}>
            <Link to={`/post/${post.postNum}`}>
              <p className='title'>{post.title}</p>
              <div className='author'>
                <div>
                  {/* <Avatar
                    size='40'
                    round={true}
                    src={post.author.photoURL}
                    style={{ border: '1px solid #c6c6c6' }}
                  /> */}
                  <p>{post.author.displayName}</p>
                </div>
                <p className='time'>
                  {SetTime(post.createdAt, post.updatedAt)}
                </p>
              </div>

              <p>{post.content}</p>
            </Link>
          </ListItem>
        );
      })}
    </ListDiv>
  );
}

export default List;
