
import avatar from '../avatar1.png';
import ContactForm from '../components/contactForm';

function Contactpage() {

  return (

    <div className="mainpage">
    <div className='bubble-container'>
        <img src={avatar} className="avatar-logo" alt="logo" />
        <div className="box bubble"> 
    <div className='contact'>
    <h5>記事のリクエストやご質問あれば、お気軽にお問い合わせ下さい  ♪ <br/>お問い合わせお待ちしてます！</h5>
    <ContactForm />
    </div>
        </div>
    </div>
    </div>
  )
}

export default Contactpage