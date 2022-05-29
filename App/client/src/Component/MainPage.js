import React, { useState, useEffect } from 'react';
import List from './Post/List.js';
import axios from 'axios';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { GNBDiv, FooterDiv } from '../Style/MainPageCSS.js';

function MainPage() {
  const [PostList, setPostList] = useState([]);
  const [Sort, setSort] = useState('최신순');
  const [SearchTerm, setSearchTerm] = useState('');
  const [Skip, setSkip] = useState(0);
  const [LoadMore, setLoadMore] = useState(true);

  const getLoadMore = () => {
    let body = {
      sort: Sort,
      searchTerm: SearchTerm,
      skip: Skip,
    };
    axios
      .post('/api/post/list', body)
      .then((response) => {
        // console.log(response.data);
        if (response.data.success) {
          setPostList([...PostList, ...response.data.postList]);
          setSkip(Skip + response.data.postList.length);
          if (response.data.postList.length < 5) {
            setLoadMore(false);
          }
          // 0 idx ~ 4 idx : 5 skip
          // 5 idx ~ 9 idx
          // 10 idx ~ 14 idx : 10 skip
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPostList = () => {
    setSkip(0);

    let body = {
      sort: Sort,
      searchTerm: SearchTerm,
      skip: 0,
    };

    axios
      .post('/api/post/list', body)
      .then((response) => {
        if (response.data.success) {
          setPostList([...response.data.postList]);
          setSkip(response.data.postList.length);
          if (response.data.postList.length < 5) {
            setLoadMore(false);
          }
          if (response.data.postList.length === 0) {
            setLoadMore(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPostList();
  });

  const SearchHandler = () => {
    getPostList();
  };

  return (
    <div>
      <GNBDiv>
        <div className='search'>
          <input
            type='text'
            value={SearchTerm}
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) SearchHandler();
            }}
          />
          <button onClick={() => SearchHandler()}>
            <p
              style={{
                marginTop: '8px',
                marginBottom: '8px',
                fontSize: '8px',
                color: 'black',
              }}
            >
              검색
            </p>
          </button>
        </div>

        <DropdownButton variant='outline-secondary' title={Sort}>
          <Dropdown.Item onClick={() => setSort('최신순')}>
            최신순
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSort('인기순')}>
            인기순
          </Dropdown.Item>
        </DropdownButton>
      </GNBDiv>
      <List PostList={PostList} />
      {LoadMore && (
        <FooterDiv>
          <button
            style={{ marginBottom: '10vh', color: 'black' }}
            onClick={() => getLoadMore()}
          >
            더 불러오기
          </button>
        </FooterDiv>
      )}
    </div>
  );
}

export default MainPage;
