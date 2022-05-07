import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ListDiv, ListItem } from '../../Style/ListCSS';

function List(props) {
  const [PostList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .post('/api/post/list')
      .then((response) => {
        // console.log(response.data);
        if (response.data.success) {
          setPostList([...response.data.postList]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ListDiv>
      {PostList.map((post, idx) => {
        return (
          <ListItem key={idx}>
            <p className='title'>{post.title}</p>
            <p>{post.content}</p>
          </ListItem>
        );
      })}
    </ListDiv>
  );
}

export default List;
