
import avatar from '../avatar1.png';
import ContactForm from '../components/contactForm';

function Contactpage() {

  return (

    <div className="mainpage">
    <div className='bubble-container'>
        <img src={avatar} className="avatar-logo" alt="logo" />
        <div className="box bubble"> 
    <div className='contact'>
    <h5>私に連絡したい場合は私にメッセージを送ってください。
      あなたのメッセージを楽しみにしています！</h5>
    <ContactForm />
    </div>
        </div>
    </div>
    </div>
  )
}

export default Contactpage