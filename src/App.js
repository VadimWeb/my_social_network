import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://dcassetcdn.com/design_img/1559024/551167/551167_7840631_1559024_911ff84c_image.png' />
            </header>
            <nav className='nav'>
                <div>Profile</div>
                <div>Messages</div>
            </nav>
            <div className='content'>
                Main Content
            </div>

        </div>
    );
}

export default App;
