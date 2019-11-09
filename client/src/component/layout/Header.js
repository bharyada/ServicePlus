import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header_section'>
      <div className='container'>
        <div className='row'>
          <div className='logo dropdown'>
            <Link to='/' title='Service + - Packers and Movers'>
              {/* <img
                src={require('../../assets/pnm/images/logo.png')}
                alt='logo'
                style={{ width: '90px' }}
                alt='Service+ - Packers and Movers'
              /> */}
            </Link>
          </div>
          <div className='header_text hidden-xs hidden-sm hidden-md'>
            <h1 className='hed_title'>All Types of Service Providers</h1>
          </div>
          <div className='header_call'>
            <span className='phone_no'>+91-8689890905</span>
            <a id='' className='header_btn hidden-xs'>
              Request a Call Back
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
