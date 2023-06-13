
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './App.css';
import Footer from './page/Footer';
import Header from './page/Header';
import Login from './page/Login';
import Main from './page/Main';
import NotFound from './page/NotFound';
import Otp from './page/Otp';
import Sub01 from './page/Sub01';
import Sub02 from './page/Sub02';
import Sub03 from './page/Sub03';
import Sub04 from './page/Sub04';
import Sub05 from './page/Sub05';
import Sub06 from './page/Sub06';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const hnadleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div>
        <BrowserRouter>
          <Header isLoggedIn={isLoggedIn}/>
            <Routes>
                  <Route path='/' element={<Login/>} />
                  <Route path='/otp' element={<Otp isLoggedIn={isLoggedIn} onLogin={handleLogin}/>}/>
                  <Route path='/main' element={<Main/>}/>
                  <Route path='/sub01' element={<Sub01/>}/>
                  <Route path='/sub02' element={<Sub02/>}/>
                  <Route path='/sub03' element={<Sub03/>}/>
                  <Route path='/sub04' element={<Sub04/>}/>
                  <Route path='/sub05' element={<Sub05/>}/>
                  <Route path='/sub06' element={<Sub06/>}/>
                  <Route path="*" element={<NotFound />}/>
                  <Route path="/logout" element={<Login onLogout={hnadleLogout}/>}/>
            </Routes>
            <Footer isLoggedIn={isLoggedIn}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
