import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Checked from './pages/Checked';
import Calendar from './pages/Calendar';
import Main from './pages/Main';
import Meow from './pages/Meow';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContainer>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/checked" element={<Checked />}></Route>
            <Route path="/calendar" element={<Calendar />}></Route>
            <Route path="/meow" element={<Meow />}></Route>
          </Routes>
          <Footer />
        </AppContainer>
      </BrowserRouter>
    </div>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #fff2ed;
  border: 1px solid green;
`;
