import avatar from '../avatar1.png';

function About() {



return (
<div className="mainpage">
    <div className='bubble-container'>
        <img src={avatar} className="avatar-logo" alt="logo" />
        <div className="box bubble"> 
    <div className='contact'>
    <h5>This is the section where I talk about meeee!!!!</h5>
    </div>
        </div>
    </div>
    </div>
);
}

export default About;