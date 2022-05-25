import logo from '../avatar1.png';
import mainLogo from '../images/logo2.png'
import '../styles/mainpage.scss';

function About() {



return (
<div className="mainpage">
<img className='main-logo' alt='logo' src={mainLogo}/>
    <div className='bubble-container'>
        <img src={logo} className="avatar-logo" alt="logo" />
        <div class="box bubble"> 
        <div class="type-writer-text">
        This is the about page
        </div>
    </div>
    </div>
</div>
);
}

export default About;