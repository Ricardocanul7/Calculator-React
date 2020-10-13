import React from 'react'
import './Key.scss';

export const Key = ({text, onPressed}) => {

    return (
        <div>
            <button 
                className="btn-container"
                onClick={() => onPressed(text)}
            >
                <p>{text}</p>
            </button>
        </div>
    )
}
