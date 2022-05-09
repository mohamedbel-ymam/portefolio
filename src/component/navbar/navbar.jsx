import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Mohamed</div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
          
          <Link className='lint' to="/">Home</Link>
          <Link className='lint' to="/intro">Intro</Link>
          <Link className='lint' to="/p-projet">P-projets</Link>
          <Link className='lint' to="/d-projet">D-projets</Link>
          
            
          </ul>
        </div>
        <button className="button n-btn"> <Link className='lind' to="/contact">Contact moi</Link></button>
      </div>
    </div>
  );
}

export default Navbar;
