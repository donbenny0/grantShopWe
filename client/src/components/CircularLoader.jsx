import React from 'react'
import style from '../css/circularLoader.module.css'
export const CircularLoader = (props) => {
    return (
        <div className={style.circularLoader}>
            <svg stroke={props.stroke} viewBox="25 25 50 50">
                <circle r={props.radius} cy="50" cx="50"></circle>
            </svg>
        </div>
    )
}
