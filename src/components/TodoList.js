import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { deleteItem } from '../actions/actions';
import useFetch from '../Hooks/useFetch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function TodoList() {
  const navigate = useNavigate();

  // 데이터 받아오기
  const { data: todoData, isLoading } = useFetch('http://localhost:3001/todos');

  console.log(todoData);

  // 각 아이템 데이터

  // 삭제
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

  const handleCheckChange = (checked, id) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        checked: checked,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(() => {
        // navigate('/');
        window.location.reload();
      })
      .catch((err) => {
        console.error('Error', err);
      });
    console.log(checked, id);
    console.log('check!');
  };

  return (
    <TodoListContainer>
      {isLoading
        ? '로딩 중...'
        : todoData.map((item) => (
            <Item key={item.id}>
              <CheckBoxAndTitleContainer>
                <CheckBox
                  type="checkbox"
                  checked={item.checked}
                  onChange={(e) => {
                    handleCheckChange(e.target.checked, item.id);
                  }}
                ></CheckBox>
                <Title isChecked={item.checked}>{item.title}</Title>
              </CheckBoxAndTitleContainer>
              <DeleteBtn onClick={() => handleDelete(item.id)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </DeleteBtn>
            </Item>
          ))}
    </TodoListContainer>
  );
}

const TodoListContainer = styled.ul`
  padding-left: 0px;
  list-style: none;
`;

const Item = styled.li`
  width: 30rem;
  height: 3rem;
  margin: 0.5rem 0;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid #3bba8d;
  border-radius: 1rem;
  color: #6c6d6d;
`;

const CheckBoxAndTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckBox = styled.input``;

const Title = styled.div`
  margin-left: 0.6rem;
  font-size: 1.4rem;
  text-decoration: ${(props) => (props.isChecked ? 'line-through' : 'none')};
  color: ${(props) => (props.isChecked ? '#b9bfbc' : '#6c6d6d')};
`;

const DeleteBtn = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  font-size: 1rem;
  color: #6c6d6d;
  background-color: transparent;
`;
