import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'; // 1) `useDispatch` 훅 가져오기
import { deleteItem } from '../actions/actions'; // 2) 액션 생성자 또는 액션 불러오기

export default function Main() {
  const [todoData, setTodoData] = useState([]);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  // Redux로 데이터 받아오기
  const reduxData = useSelector((state) => state.todos);

  // 서버에서 데이터 받아오기
  useEffect(() => {
    async function request() {
      const response = await axios.get('http://localhost:3001/todos');
      const { data } = response;
      setTodoData(data);
    }

    request();
  }, []);
  return (
    <MainContainer>
      <h1>오늘 할 일</h1>
      <TodoList>
        {reduxData.map((item) => (
          <li key={item.id}>
            <Title>{item.title}</Title>
            <DeleteBtn onClick={() => handleDelete(item.id)}>❌</DeleteBtn>
          </li>
        ))}
      </TodoList>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoList = styled.ul`
  font-size: 1.5rem;

  li {
    list-style: none;
    margin: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.div`
  width: 10rem;
`;

const DeleteBtn = styled.button`
  width: 2rem;
`;
