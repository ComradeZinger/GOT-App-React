import React from 'react';

import DbList from '../dbList/dbList.js';

import './dbContainer.css';

export default function DbContainer() {
    return (
        <div className='dbContainer'>
          <DbList/>
        </div>
    )
}