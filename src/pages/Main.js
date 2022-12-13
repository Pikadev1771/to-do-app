import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../actions/actions';
import { CreateItemModal } from '../components/CreateItemModal';
import TodoList from '../components/TodoList';

export default function Main() {
  // const [todoData, setTodoData] = useState([]); // 서버 데이터 사용할 경우 필요
  const dispatch = useDispatch();

  // Redux로 데이터 받아오기
  // const reduxData = useSelector((state) => state.todos);

  // 서버에서 데이터 받아오기
  // useEffect(() => {
  //   async function request() {
  //     const response = await axios.get('http://localhost:3001/todos');
  //     const { data } = response;
  //     setTodoData(data);
  //   }
  //   request();
  // }, []);

  return (
    <MainContainer>
      <CreateItemModal />
      <TodoList />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 2px solid red; */
`;
