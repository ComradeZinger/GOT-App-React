import React from 'react';

import DetailsContainer from '../certainDetails/certainDetails';
import DbContainer from '../dbContainer/dbContainer';

import './appTab.css';

export default function AppTab() {
    return (
        <div className='appTab'>
            <DetailsContainer/>
            <DbContainer/>
        </div>
    )
}