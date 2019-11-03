import React, { Component } from 'react';

const Service = () => {
  return (
    <div>
      <form className='form'>
        <div className='form-group'>
          <select></select>
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='name'
            placeholder='Service Type'
            value={name}
          />
        </div>
      </form>
    </div>
  );
};

export default Service;
