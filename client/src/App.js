import {
  Route,
  Routes,
  Link,
  HashRouter
} from 'react-router-dom';
import React from 'react';



import MainPage from './pages/mainpage';
import About from './pages/about';
import ResponsiveAppBar from './components/topbar';
import Contactpage from './pages/contact';
import PodCast from './pages/podcast';
import Login from './auth/login';
import Article from './pages/article';



import './styles/App.scss';
import './styles/mainpage.scss';
import './styles/about.scss';
import './styles/articleCard.scss';
import './styles/contact.scss';
import './styles/nav-bar.scss';
import './styles/footer.scss';
import './styles/admin.scss';
import './styles/article.scss';


import mainLogo from './images/logo1.png'
import AdminPage from './pages/adminpage';






function App() {
  return (
    <>
    <HashRouter basename="/"> 
    <ResponsiveAppBar />
    
    <div className="App">

    <img className='main-logo' alt='logo' src={mainLogo}/>
    
      <Routes>
        <Route path="/" exact element={<MainPage />}/>
        <Route path="/Home" exact element={<MainPage />}/>
        <Route path="/Blog" exact element={<MainPage />}/>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contactpage />} />
        <Route path="/Podcast" element={<PodCast />} />
        <Route path="/Admin" exact element={<Login />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/Articles/:id" element={<Article />} />


        <Route path="*" element={<h1 style={{margin: 20, color: 'white'}}>Page not found <p><Link style={{ color: 'black'}} to="/">Go to the home page</Link></p></h1>} />
      </Routes>
      </div>
      
    </HashRouter>

    </>
  );
}

export default App;
