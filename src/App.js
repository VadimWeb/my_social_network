import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://dcassetcdn.com/design_img/1559024/551167/551167_7840631_1559024_911ff84c_image.png' />
            </header>
            <nav className='nav'>
                <div> <a href=""> Profile</a></div>
                <div><a href=""> Messages</a></div>
                <div><a href=""> News</a></div>
                <div><a href=""> Music</a></div>
                <div><a href=""> Settings</a></div>
            </nav>
            <div className='content'>
                <img src="https://klike.net/uploads/posts/2019-01/1547365376_1.jpg" alt=""/>
            </div>

        </div>
    );
}

export default App;
