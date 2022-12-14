import { useState } from 'react';
import styled from 'styled-components';
import { CreateItem } from './CreateItem';

export const CreateItemModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtnContainer>
          <ModalBtn onClick={ModalHandler}>
            {isOpen ? <>&times;</> : <>+</>}
          </ModalBtn>
        </ModalBtnContainer>
        {isOpen ? (
          <ModalBackdrop onClick={ModalHandler}>
            <ModalView onClick={(event) => event.stopPropagation()}>
              <CloseBtnContainer>
                <CloseBtn onClick={ModalHandler}>&times;</CloseBtn>
              </CloseBtnContainer>
              <CreateItem />
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ModalBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30rem;
  margin-top: 3rem;
`;

export const ModalBtn = styled.button`
  cursor: grab; // 🌟
  width: 3rem;
  height: 3rem;
  font-size: 2rem;

  border: none;
  color: white;
  background-color: #3bba8d;
  border-radius: 0.55rem;
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

export const CloseBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const CloseBtn = styled.button`
  cursor: grab; // 🌟
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;

  border: none;
  color: white;
  background-color: #3bba8d;
  border-radius: 0.5rem;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog',
}))`
  background-color: white;
  width: 500px;
  height: 300px;
  border-radius: 10px;
  margin-top: 12rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  > p.modalText {
    font-size: 25px;
    color: #5c5c5c;
    margin: 20px;
  }
`;
