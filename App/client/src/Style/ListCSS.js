import styled from '@emotion/styled';

const ListDiv = styled.div`
  padding-bottom: 1rem;
  max-width: 756px;
  margin: 0 auto !important;
  @media (max-width: 756px) {
    width: 90%;
  }
`;

const ListItem = styled.div`
  width: 100%;
  height: 152px;
  min-height: 120px;
  background: #ffffff;
  margin-top: 5vh;
  margin-bottom: 5vh;
  padding: 20px;
  box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
    0px 15px 12px rgba(0, 0, 0, 0.1);
  .title {
    margin-bottom: 10px;
    display: block;
    color: black;
    width: 100%;
    font-size: 20px;
    font-weight: bolder !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .author {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 8px 0px;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        margin-left: 10px;
        margin-bottom: 0px;
        &.admin {
          display: flex;
          align-items: center;
        }
      }
    }
    p {
      font-size: 12px;
      color: darkgrey;
      margin-bottom: 0px;
      &.time {
        font-size: 10px;
      }
    }
  }
  a {
    color: black;
    text-decoration: none;
    .title {
      font-weight: bold;
    }
  }
  .main {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .contents {
    display: block;
    color: black;
    width: 65%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    line-height: 1.5;
    height: 3em;
    text-align: left;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export { ListDiv, ListItem };
