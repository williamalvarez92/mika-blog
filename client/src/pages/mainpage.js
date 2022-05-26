import avatar from '../avatar1.png';
import '../styles/mainpage.scss';

function MainPage() {



return (
<div className="mainpage">
    <div className='bubble-container'>
        <img src={avatar} className="avatar-logo" alt="logo" />
        <div class="box bubble"> 
        <div class="type-writer-text">
        会計士 in ロンドンです。 私のブログへようこそ!
        </div>
    </div>
    </div>
</div>
);
}

export default MainPage;