import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <ul className="nav justify-content-start">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
        <span className='yellow'>H</span>OME
        </a>
      </li>
      </ul>
      <ul className='nav justify-content-end' style={{margin: '-4% 0% 0% 0%'}} >
      <li className="nav-item">
        <a
          href="#aboutme"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          <span className='yellow'>A</span>bout Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#work"
          onClick={() => handlePageChange('Work')}
          // Check to see if the currentPage is `Work`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
        >
          <span className='yellow'>W</span>ork
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          <span className='yellow'>C</span>ontact
        </a>
      </li>
      <li className='nav-item'>
        <a href='https://drive.google.com/file/d/1JRsjO46ChfC6Kqya4EV1nQFmjhoDj2GN/view?usp=sharing'
        target='_blank' rel='noreferrer noopener'
        id='resume'
        >
          Resume
        </a>
      </li>
      </ul>
    </header>
  );
}

export default Header;
