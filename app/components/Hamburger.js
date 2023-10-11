import { RiMenu2Fill, RiCloseFill } from 'react-icons/ri';

const Hamburger = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className='icon-menu-wrapper'>
      {isMenuOpen ? (
        <RiCloseFill
          className='menu-icon'
          onClick={() => setIsMenuOpen(false)}
        />
      ) : (
        <RiMenu2Fill
          className='menu-icon'
          onClick={() => setIsMenuOpen(true)}
        />
      )}
    </div>
  );
};

export default Hamburger;