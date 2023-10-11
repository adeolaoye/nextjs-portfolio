import { useState } from 'react';
import Link from 'next/link'


const Navigation = ({ isMenuOpen, setModalOpen }) => {
  return (
    <nav
      className={`modal-container ${isMenuOpen ? 'full-modal-container' : ''}`}
      style={{backgroundColor: '#2d3540'}}
    >
      <ul className={`modal-content ${isMenuOpen ? 'full-modal-content' : ''}`}>
        <li>
          <Link href='/' className='link' onClick={() => setModalOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href='/projects' className='link' onClick={() => setModalOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link href='/contact' className='link' onClick={() => setModalOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;