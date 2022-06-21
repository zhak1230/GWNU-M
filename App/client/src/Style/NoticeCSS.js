import styled from '@emotion/styled';

const NoticeDiv = styled.div`
  padding-bottom: 1rem;
  max-width: 756px;
  margin: 0 auto !important;
  @media (max-width: 756px) {
    width: 90%;
  }
`;

const NoticeContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 120px;
  background: #ffffff;
  margin-top: 5vh;
  margin-bottom: 5vh;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
    0px 15px 12px rgba(0, 0, 0, 0.1);
`;

const NoticeItem = styled.div`
  width: 100%;
  min-height: 30px;
  background: #ffffff;
  .author {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px;
    .title {
      margin-bottom: 0px;
      display: block;
      color: black;
      width: 68%;
      font-weight: bolder !important;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
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
      color: black;
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
`;

export { NoticeDiv, NoticeContainer, NoticeItem };
