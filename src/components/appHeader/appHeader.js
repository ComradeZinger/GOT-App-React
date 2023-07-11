import React from 'react';
import { Button } from 'reactstrap';

import './appHeader.css';

export default function AppHeader() {

    return (
        <div className='appHeader'>
            <h2 className='title'>Game of Thrones DB</h2>
            <div>
                <Button className='tabBtn active'>Characters</Button>
                <Button className='tabBtn' outline>Houses</Button>
                <Button className='tabBtn' outline>Books</Button>
            </div>
        </div>
    )
}