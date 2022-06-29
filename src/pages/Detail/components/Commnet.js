import React, { useState } from "react";
import styled from "styled-components";

const Commnet = () => {
  const [userName] = useState("전형준");
  const [comment, setComment] = useState("");
  const [feedComments, setFeedComments] = useState([]);

  const post = () => {
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
        <AddComment
          type="text"
          placeholder="댓글을 입력해 주세요!"
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={comment}
        ></AddComment>

        <PostBtn type="button" onClick={post}>
          게시
        </PostBtn>
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
  padding: 20px;
`;

const UserName = styled.p`
  font-size: 20px;
`;

const CommentText = styled(UserName)`
  margin-left: 50px;
`;

const AddComment = styled.input`
  margin-top: 10px;
  width: 400px;
  height: 40px;
  text-align: center;
`;

const PostBtn = styled.button`
  margin-left: 10px;
  width: 60px;
  height: 40px;
  color: white;
  background-color: #9450e7;
  border-radius: 5px;
`;
