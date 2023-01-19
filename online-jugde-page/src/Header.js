import React from 'react'
import {Link} from 'react-router-dom'
import logo from './img/knulogo.jpg'
import userImg from './img/user.png'

const Header = () => {
    return (
        <div className='Header'>
            <div><img src={logo}/></div>
            <div>Online Judge</div>
            <div style={{float:"right"}}><img src={userImg}/></div>
        </div>
    )
}

export default Header