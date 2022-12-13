import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
  return (
    <HeaderContainer>
      <Home>
        <h1>오늘 뭐하지?</h1>
      </Home>
      <MenuIconContainer>
        <h3>완료한 목록</h3>
        <h3>달력 보기</h3>
        <h3>야옹</h3>
        <h3>만든사람</h3>
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
      </MenuIconContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* border: 1px solid red; */
  background-color: #3bba8d;
  color: white;
`;

const Home = styled.div`
  margin: 1rem 6rem;
`;

const MenuIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 6rem;

  h3 {
    margin: 0 0 0 4rem;
  }
`;
