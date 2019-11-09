import React from 'react';

function Getlistsection() {
  return (
    <div className='getalist_section' id='3'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9'>
            <div className='text_box'>
              <p className='text-justify'>
                Be a verified packer and mover, connect with customers across
                India
              </p>
              <p>
                {' '}
                If you are a packer and mover company and would like to reach
                out to more customers across India, then write in with your
                details and our team will get in touch to initiate the
                verification and listing process.
              </p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='getbtn'>
              <a
                href='../index.html'
                className='btn-get'
                data-toggle='modal'
                data-target='#getlist_Modal'
              >
                post a free ad
              </a>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getlistsection;
