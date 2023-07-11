import React from 'react';

import DetailsContainer from './DetailsContainer/DetailsContainer';
import DbContainer from './DbContainer/DbContainer';

import './Page.css';

export default function Page() {
    return (
        <div className='Page'>
            <DetailsContainer/>
            <DbContainer/>
        </div>
    )
}