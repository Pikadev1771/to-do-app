import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { deleteItem } from '../actions/actions';
import useFetch from '../Hooks/useFetch';

export default function TodoList() {
  const navigate = useNavigate();

  const { data: todoData, isLoading } = useFetch('http://localhost:3001/todos');

  const handleDelete = (id) => {
    // // 🦄 redux
    // dispatch(deleteItem(id));
    fetch(`http://localhost:3001/todos/${id}`, {
      // DELETE 요청
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(() => {
        navigate('/'); // 정상적으로 처리되면 Home 페이지로 이동
        window.location.reload(); // 새로고침 (json-server 라이브러리가 동기화 문제가 있기 때문에 사용. 실제 백엔드와 작업 시에는 필요 X)
      })
      .catch((err) => {
        console.error('Error', err);
      });

    console.log('delete!');
  };

  return (
    <TodoListContainer>
      {isLoading
        ? '로딩 중...'
        : todoData.map((item) => (
            <li key={item.id}>
              <Title>{item.title}</Title>
              <DeleteBtn onClick={() => handleDelete(item.id)}>❌</DeleteBtn>
            </li>
          ))}
    </TodoListContainer>
  );
}

const TodoListContainer = styled.ul`
  font-size: 1.5rem;
  border: 1px solid red;
  padding-left: 0px;
  list-style: none;

  li {
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
