import React from 'react'
import {Key} from './Key';
import './Keyboard.scss';

export const Keyboard = ({handleKeyPressed}) => {
    return (
        <div className="keyboard-container">
            <div className="keyboard-grid">
                <div className="row">
                    <Key text="OFF" onPressed={handleKeyPressed}/>
                    <Key text="AC" onPressed={handleKeyPressed}/>
                    <Key text="DEL" onPressed={handleKeyPressed}/>
                    <Key text="/" onPressed={handleKeyPressed}/>
                </div>
                <div className="row">
                    <Key text="7" onPressed={handleKeyPressed}/>
                    <Key text="8" onPressed={handleKeyPressed}/>
                    <Key text="9" onPressed={handleKeyPressed}/>
                    <Key text="X" onPressed={handleKeyPressed}/>
                </div>
                <div className="row">
                    <Key text="4" onPressed={handleKeyPressed}/>
                    <Key text="5" onPressed={handleKeyPressed}/>
                    <Key text="6" onPressed={handleKeyPressed}/>
                    <Key text="-" onPressed={handleKeyPressed}/>
                </div>
                <div className="row">
                    <Key text="1" onPressed={handleKeyPressed}/>
                    <Key text="2" onPressed={handleKeyPressed}/>
                    <Key text="3" onPressed={handleKeyPressed}/>
                    <Key text="+" onPressed={handleKeyPressed}/>
                </div>
                <div className="row">
                    <Key text="ON" onPressed={handleKeyPressed}/>
                    <Key text="0" onPressed={handleKeyPressed}/>
                    <Key text="." onPressed={handleKeyPressed}/>
                    <Key text="=" onPressed={handleKeyPressed}/>
                </div>
            </div>
        </div>
    )
}
