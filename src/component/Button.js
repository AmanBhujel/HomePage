import React from 'react'
import '../../styles/Button.css'
const Button = ({ text }) => {
    return (
        <button className='blackButtonComponent'>{text} </button>
    )
}

export default Button