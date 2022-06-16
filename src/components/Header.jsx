import React from 'react'
import Name from '../assets/img/Name.png'
import Logo from '../assets/img/Logo.png'

const Header = () => {
    return (
        <header className='header-app' style={{backgroundImage: `url(${Logo})`}}>
            <div className='header-app-name'>
                <img src={Name} alt=""/>
            </div>
            
        </header>
    )
}

export default Header
