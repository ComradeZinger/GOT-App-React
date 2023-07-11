import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

// import './characterDetails.css';

export default function CharactersListItem({name, onSelect}) {

    return (
        {/* <Pagination className='pagination'>
        <PaginationItem>
          <PaginationLink
            first
            className='pagLink'
            onClick={() => { setCurPage(1) }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            previous
            className='pagLink'
            onClick={() => { nextOrPrevPage() }}
          />
        </PaginationItem>
        {changePagination()}
        <PaginationItem>
          <PaginationLink
            next
            className='pagLink'
            onClick={() => { nextOrPrevPage("next") }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            last
            className='pagLink'
            onClick={() => { setCurPage(maxPage) }}
          />
        </PaginationItem>
      </Pagination> */}
    );
}
