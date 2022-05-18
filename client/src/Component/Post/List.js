import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
        console.log(post);
        return (
          <ListItem key={idx}>
            <Link to={`/post/${post.postNum}`}>
              <p className='title'>{post.title}</p>
              <p className='author'> {post.author.displayName}</p>
              <p>{post.content}</p>
            </Link>
          </ListItem>
        );
      })}
    </ListDiv>
  );
}

export default List;
