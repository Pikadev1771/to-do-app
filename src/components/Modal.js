import { useState } from 'react';
import styled from 'styled-components';
import { CreateItem } from '../components/CreateItem';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4); // 🌟 a는 투명도
  position: fixed; // 🌟 전체를 채우고 싶을 때! 보이는 화면 안에서 고정 (위치는 top~~으로 설정 ) cf) absolute는 절대적 위치 고정
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: top;
`;

export const ModalBtn = styled.button`
  background-color: var(--coz-purple-600);
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab; // 🌟
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog',
}))`
  background-color: white;
  width: 500px;
  height: 200px;
  border-radius: 10px;
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  > p.modalText {
    font-size: 25px;
    color: #5c5c5c;
    margin: 20px;
  }
`;

export const CloseBtn = styled.button`
  margin: 15px;
  padding: 5px 10px;
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>
          {isOpen ? 'Opened!' : <CreateBtn>+</CreateBtn>}
        </ModalBtn>
        {isOpen ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView onClick={(event) => event.stopPropagation()}>
              <CloseBtn onClick={openModalHandler}>&times;</CloseBtn>
              <CreateItem />
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};

const CreateBtn = styled.button`
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
`;
