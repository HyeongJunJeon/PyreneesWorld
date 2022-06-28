import React, { useState } from "react";
import styled from "styled-components";

const Commnet = () => {
  const [userName] = useState("전형준");
  const [comment, setComment] = useState("");
  const [feedComments, setFeedComments] = useState([]);

  const post = (e) => {
    const copyFeedComments = [...feedComments];
    copyFeedComments.push(comment);
    setFeedComments(copyFeedComments);
    setComment("");
  };

  return (
    <>
      <Wrapper>
        {feedComments.map((commentArr, i) => (
          <CommentWrapper key={i}>
            <UserName>{userName}</UserName>
            <CommentText>{commentArr}</CommentText>
          </CommentWrapper>
        ))}
      </Wrapper>
      <>
        <input
          type="text"
          placeholder="댓글을 입력해 주세요!"
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={comment}
        />

        <button type="button" onClick={post}>
          게시
        </button>
      </>
    </>
  );
};

export default Commnet;

const Wrapper = styled.div`
  width: 800px;
  min-height: 300px;
  margin: 0 auto;
  border: 5px ridge gainsboro;
`;

const CommentWrapper = styled.div`
  display: flex;
  padding-left: 20px;
`;

const UserName = styled.p`
  font-size: 15px;
`;

const CommentText = styled.p`
  font-size: 15px;
  margin-left: 50px;
`;
