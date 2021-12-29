import React from 'react'
import Login from './Login'
import Register from './Register'
import './Header.css'

function HeaderTopRight() {
    return (
        <div className="header__right">
            <Login/>
            <Register/>
        </div>
    )
}

export default HeaderTopRight
