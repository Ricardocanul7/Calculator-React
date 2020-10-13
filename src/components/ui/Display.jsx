import React from 'react'
import './Display.scss';

export const Display = ({values}) => {
    return (
        <div className="display-container">
            <input type="text" value={values} readOnly/>
        </div>
    )
}
