import React from 'react';
// import '../assets/css/header.css'
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
        <i class="fa-solid fa-house" style={{marginLeft: '-5%'}}></i>
        <span className='yellow' style={{marginLeft: '4%'}}>ORITSEGIDENENE BEJI</span>
        </a>
      </li>
      </ul>
      <ul className='nav justify-content-end' style={{marginTop: '-4%'}} >
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
        <a href='#resume'
        onClick={() => handlePageChange('Resume')}
        className='nav-link btn'
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
