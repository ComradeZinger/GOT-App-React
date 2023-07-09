import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import { getAllCharacters } from '../../services/fetchAPI.js'

import './charctersList.css';

export default function CharctersList() {
  const [charsList, setCharsList] = useState({});
  const [curPage, setCurPage] = useState(1);

  const maxPage = 210;

  useEffect(() => {
    getChars(curPage);
  }, []);

  useEffect(() => {
    getChars(curPage);
    console.log(`Страница: `, curPage)
  }, [curPage]);

  const getChars = (page) => {
    getAllCharacters(page + 4)
      .then(chars => setCharsList(chars))
  }

  const charsForRender = () => {
    let toRender = [];

    for (let key in charsList) {
      toRender.push(
        <ListGroupItem key={key}>
          {charsList[key].name}
        </ListGroupItem>
      );
    }

    return toRender;
  }

  const nextOrPrevPage = (side = "prev") => {
    if (side === "next") {
      setCurPage(prevPage => prevPage === maxPage ? prevPage = maxPage : prevPage - 1)
    } else {
      setCurPage(prevPage => prevPage === 1 ? prevPage = 1 : prevPage - 1)
    }
  }

  const changePagination = () => {
    const pagination = [];
    let startPage = 0,
        endPage = 0;

    if (curPage <= 2) {
      startPage = 1;
      endPage = 5;
    } else if (curPage >= maxPage - 2) {
      startPage = maxPage - 4;
      endPage = maxPage;
    } else {
      startPage = curPage - 2;
      endPage = curPage + 2;
    }

    for (let page = startPage; page <= endPage; page++) {
      pagination.push(
        <PaginationItem
          active={page === curPage ? true : false}
          className='pagItem'
          key={page}>
          <PaginationLink
            href="#"
            onClick={() => setCurPage(page)}>
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pagination;
  }

  return (
    <div>
      <h5>Characters list</h5>
      <ListGroup>
        {charsForRender()}
      </ListGroup>

      <Pagination className='pagination'>
        <PaginationItem>
          <PaginationLink
            first
            onClick={() => { setCurPage(1) }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            previous
            onClick={() => { nextOrPrevPage() }}
          />
        </PaginationItem>
        {changePagination()}
        <PaginationItem>
          <PaginationLink
            next
            onClick={() => { nextOrPrevPage("next") }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            last
            onClick={() => { setCurPage(maxPage) }}
          />
        </PaginationItem>
      </Pagination>
    </div>
  );
}