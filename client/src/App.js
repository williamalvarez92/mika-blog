import logo from './avatar1.png';
import mainLogo from './images/logo1.png'
import './App.scss';
import ContactForm from './components/contact';

function App() {
  return (
    <div className="App">
      <img className='main-logo' src={mainLogo}/>
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Mikita's Page!</h1>
      </header>
      {/* <ContactForm /> */}
    </div>
  );
}

export default App;
