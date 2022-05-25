import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import React from 'react';



import MainPage from './pages/mainpage'
import About from './pages/about';
import ResponsiveAppBar from './components/topbar';
import './styles/App.scss';
import './styles/mainpage.scss';



function App() {
  return (
    <Router> 
    <div className="App">
    <ResponsiveAppBar />
      <Routes>
        <Route path="/" exact element={<MainPage />}/>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1 style={{margin: 400, color: 'white'}}>Page not found</h1>} />
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
