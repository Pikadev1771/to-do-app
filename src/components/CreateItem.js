import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from '../Hooks/useInput';
import styled from 'styled-components';

export const CreateItem = () => {
  const [title, titleBind] = useInput(); // newBlog 객체 생성할 때 필요하므로 이름을 맞춰줌

  const navigate = useNavigate();

  const newItem = {
    title, // useInput 사용해서 받아온 title, body 사용
    checked: false,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/todos/', {
      // 3) body에 newBlog  담아서 POST 요청 보냄
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        navigate('/'); // 4) 정상적으로 처리되면 Home 페이지로 이동
        window.location.reload(); // 새로고침 (json-server 라이브러리가 동기화 문제가 있기 때문에 사용. 실제 백엔드와 작업 시에는 필요 X)
      })
      .catch((err) => {
        console.error('Error', err);
      });

    console.log(e.type);
  };

  return (
    <CreateItemContainer>
      <NewItemForm onSubmit={handleSubmit}>
        <NewItemInput
          type="text"
          required
          {...titleBind}
          placeholder="무엇을 할까요?"
        />
        <SubmitBtn>등록</SubmitBtn>
      </NewItemForm>
    </CreateItemContainer>
  );
};

const CreateItemContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewItemForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewItemInput = styled.input`
  width: 25rem;
  height: 4rem;
  border: 2px solid #3bba8d;
  font-size: 1.5rem;
  margin: 3rem 0 2rem 0;
  padding: 1rem;
  border-radius: 1rem;
`;

const SubmitBtn = styled.button`
  cursor: grab; // 🌟
  width: 10rem;
  height: 2.5rem;
  font-size: 1rem;

  border: none;
  color: white;
  background-color: #3bba8d;
  border-radius: 0.55rem;
`;
