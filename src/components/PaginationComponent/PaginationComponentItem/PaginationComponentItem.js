import React from 'react';
import { useSelector } from 'react-redux';
import { PaginationItem, PaginationLink } from 'reactstrap';


export default function PaginationComponentItem({page, changeCurPage}) {

    const curPage = useSelector(state => state.currentPage.value);

    return (
        <PaginationItem
            active={page === curPage ? true : false}
            className='pagItem'
            key={page}>
            <PaginationLink
                href="#"
                onClick={changeCurPage}>
                {page}
            </PaginationLink>
        </PaginationItem>
    )
}