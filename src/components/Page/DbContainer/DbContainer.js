import React from 'react';

import DbList from './DbList/DbList.js';

import './DbContainer.css';

export default function DbContainer() {
    return (
        <div className='dbContainer'>
          <DbList/>
        </div>
    )
}