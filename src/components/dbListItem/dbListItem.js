import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import './dbListItem.css';

export default function CharactersListItem({name, onSelect}) {

    return (
        <ListGroupItem
            className='listGrItem'
            onClick={onSelect}>
            {name}
        </ListGroupItem>
    );
}
