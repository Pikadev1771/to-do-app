import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function Footer(props) {
  return (
    <FooterContainer>
      <FooterText>
        <h4>🔥 Copyright 2022. pikadev1771All rights served</h4>
      </FooterText>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #3bba8d;
  position: fixed;
  bottom: 0;
`;

const FooterText = styled.div`
  margin: 1rem 6rem;
  color: white;
`;
