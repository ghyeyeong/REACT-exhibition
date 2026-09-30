import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1><Link to='/'>MUSE SEOUL</Link></h1>

            <nav>
                <Link to='/'>Home</Link>
                <Link to='/exhibition'>Exhibition</Link>
                <Link to='/mypage'>Mypage</Link>
            </nav>
        </header>
    )
}

export default Header