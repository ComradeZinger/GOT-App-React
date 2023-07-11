import React from 'react';
import { Button } from 'reactstrap';

import './Header.css';

export default function Header() {

    return (
        <div className='Header'>
            <h2 className='title'>Game of Thrones DB</h2>
            <div>
                <Button className='tabBtn active'>Characters</Button>
                <Button className='tabBtn' outline>Houses</Button>
                <Button className='tabBtn' outline>Books</Button>
            </div>
        </div>
    )
}