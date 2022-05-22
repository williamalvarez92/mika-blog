import logo from '../avatar1.png';
import mainLogo from '../images/logo2.png'
import '../App.scss';
import ContactForm from '../components/contact';

function MainPage() {
  return (

    <div className="mainpage">

    <img className='main-logo' src={mainLogo}/>
      <header className="main-header"> 
      <div class="speech-wrapper">
      <img src={logo} className="avatar-logo" alt="logo" />
      <div class="bubble">
    <div class="txt">
      <p class="name">会計士 in ロンドン</p>
      <p class="message">Hey, check out this super cool blog!...Hey, check out this super cool blog!...Hey, check out this super cool blog!...Hey, check out this super cool blog!...Hey, check out this super cool blog!...Hey, check out this super cool blog!...Hey, check out this super cool blog!...Hey, check out this super cool blog!...Hey, check out this super cool blog!...Hey, check out this super cool blog!...Hey, check out this super cool blog!...Hey, check out this super cool blog!...Hey, check out this super cool blog!...Hey, check out this super cool blog!...</p>
    </div>
    <div class="bubble-arrow"></div>
  </div>
</div>







      {/* <img className='main-logo' src={mainLogo}/>
      <div className='intro-bubble'>
          <p >This is my super cool blog made by super William. Please lok at it love it and share it.</p>
          <div class="bubble-arrow"></div>
          
      </div>
      <img src={logo} className="avatar-logo" alt="logo" /> */}
      </header>
      <ContactForm />
    </div>
  );
}

export default MainPage;
