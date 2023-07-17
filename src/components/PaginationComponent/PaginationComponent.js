import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, setPage } from '../../store/slices/currentPageSlice'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import PaginationComponentItem from './PaginationComponentItem/PaginationComponentItem';


export default function PaginationComponent() {

  const curPage = useSelector(state => state.currentPage.value),
        dispatch = useDispatch();

  const maxPage = 210;

  useEffect(() => {
    changePagination();
  }, [curPage]);

  const nextOrPrevPage = (side = "prev") => {
    if (side === "next") {
      curPage === maxPage ? dispatch(setPage(maxPage)) : dispatch(increment())
    } else {
      curPage === 1 ? dispatch(setPage(1)) : dispatch(decrement())
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
          <PaginationComponentItem
            key={page}
            page={page}
            changeCurPage={() => dispatch(setPage(page))}/>
      );
    }

    return pagination;
  }

  return (
    <Pagination className='pagination'>
      <PaginationItem>
        <PaginationLink
          first
          onClick={() => { dispatch(setPage(1)) }}
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
          onClick={() => { dispatch(setPage(maxPage)) }}
        />
      </PaginationItem>
    </Pagination>
  );
}
