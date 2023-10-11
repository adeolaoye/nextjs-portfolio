'use client'

import React, {useState} from 'react'
import Hamburger from './Hamburger';
import Navigation from './Navigation';
import Link from "next/link"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className='header-wrapper' style={{backgroundColor: '#2d3540'}}>
            <h1 className='logo'>
            <Link href='/' className='logo-link'>
          olaDEV
        </Link></h1>
            <div><Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Navigation isMenuOpen={isMenuOpen} setModalOpen={setIsMenuOpen} />
        </div>
        </div>
    )
}

export default Header;