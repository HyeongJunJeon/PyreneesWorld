import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const LIMIT = 2;

const List = () => {
  const [ListData, setListData] = useState([]);
  const navigate = useNavigate();
  //   const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:3000/data/ListData.json")
      .then((res) => res.json())
      .then((data) => {
        setListData(data);
      });
  }, []);

  // 목데이터로 진행하면서 바보같이 페이지네이션을 하려했다.
  // limit, offset은 url에서 조절해야하는데 그럴려면 실제 백엔드에서 제공하는 데이터가 필요하다.
  //location 사용하여 url변경하려다 뒤늦게 알아차렸다.
  //흐름은 알았고, 메타갤러리프로젝트에서 사용해봤으니, 넘어가도록 한다...

  const updateOffset = (buttonIndex) => {
    const offset = buttonIndex * LIMIT;
    const queryString = `?limit=${LIMIT}&offset=${offset}`;

    navigate(queryString);
  };

  return (
    <Wrapper>
      <h2>피레니즈 월드 목록</h2>
      {ListData.map((data) => {
        return (
          <BoxWrapper key={data.id}>
            <img src={data.image_url} className="listImg" alt="dog" />
            <p>이름: {data.name}</p>
            <p> {data.text}</p>
            <DetailBtn onClick={() => navigate(`/detail/${data.id}`)}>
              상세보기
            </DetailBtn>
          </BoxWrapper>
        );
      })}

      {[1, 2, 3].map((item, index) => {
        return <PageBtn onclick={() => updateOffset(index)}>{item}</PageBtn>;
      })}
    </Wrapper>
  );
};

export default List;

const Wrapper = styled.div`
  max-width: 1360px;
  margin: 20px auto;
  text-align: center;
`;

const BoxWrapper = styled.div`
  border: 1px solid gainsboro;
  display: flex;
  justify-content: space-between;
  text-align: left;
  .listImg {
    width: 130px;
    height: 130px;
    border-radius: 10px;
  }
`;

const DetailBtn = styled.button`
  color: #9450e7;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const PageBtn = styled.button``;
