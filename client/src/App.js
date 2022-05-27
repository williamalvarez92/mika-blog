import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import React from 'react';



import MainPage from './pages/mainpage'
import About from './pages/about';
import ResponsiveAppBar from './components/topbar';
import Contactpage from './pages/contact';
import PodCast from './pages/podcast'

import './styles/App.scss';
import './styles/mainpage.scss';
import './styles/about.scss';

import mainLogo from './images/logo2.png'





function App() {
  return (
    <Router> 
    <ResponsiveAppBar />
    <div className="App">
    <img className='main-logo' alt='logo' src={mainLogo}/>
      <Routes>
        <Route index path="/" exact element={<MainPage />}/>
        <Route path="/Home" exact element={<MainPage />}/>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contactpage />} />
        <Route path="/Podcast" element={<PodCast />} />


        <Route path="*" element={<h1 style={{margin: 20, color: 'white'}}>Page not found <p><Link style={{ color: 'white'}} to="/">Go to the home page</Link></p></h1>} />
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
