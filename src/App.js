import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <ul>
                <li>css</li>
                <li>HTML</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a href="">Home</a>
            <a href="">News Feed</a>
            <a href="">Messages</a>
        </div>
    )
}

export default App;
