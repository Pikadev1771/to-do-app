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
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          {...titleBind}
          placeholder="무엇을 할까요?"
        />
        <button>등록</button>
      </form>
    </CreateItemContainer>
  );
};

const CreateItemContainer = styled.div`
  width: 100%;
  border: 1px solid red;
`;
