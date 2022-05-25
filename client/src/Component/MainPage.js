import React, { useState, useEffect } from 'react';
import List from './Post/List';

import axios from 'axios';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function MainPage() {
  const [PostList, setPostList] = useState([]);
  const [Sort, setSort] = useState('최신순');
  const [SearchTerm, setSearchTerm] = useState('');

  const getPostList = () => {
    let body = {
      sort: Sort,
      searchTerm: SearchTerm,
    };
    axios
      .post('/api/post/list', body)
      .then((response) => {
        // console.log(response.data);
        if (response.data.success) {
          setPostList([...response.data.postList]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPostList();
  }, [Sort]);

  const SearchHandler = () => {
    getPostList();
  };

  return (
    <div>
      <DropdownButton variant='outline-secondary' title={Sort}>
        <Dropdown.Item onClick={() => setSort('최신순')}>최신순</Dropdown.Item>
        <Dropdown.Item onClick={() => setSort('인기순')}>인기순</Dropdown.Item>
      </DropdownButton>
      <input
        type='text'
        value={SearchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.keyCode === 13) SearchHandler();
        }}
      />
      <List PostList={PostList} />
    </div>
  );
}

export default MainPage;
