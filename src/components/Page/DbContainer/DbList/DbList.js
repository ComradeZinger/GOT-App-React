import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

import DbListItem from './DbListItem/DbListItem.js';
import PaginationComponent from '../../../PaginationComponent/PaginationComponent.js';

import { getAllCharacters } from '../../../../services/fetchAPI.js'

import './DbList.css';

export default function DbList() {
  const [charsList, setCharsList] = useState([]),
    curPage = useSelector(state => state.currentPage.value);

  useEffect(() => {
    getChars(curPage);
  }, [curPage]);

  const getChars = (page) => {
    getAllCharacters(page + 4)
      .then(chars => setCharsList(chars))
  }

  const dbItems = charsList.map((item, id) => {
    return (
      <DbListItem
        key={id}
        id={item.id}
        name={item.name}/>
    )
  })
  
  return (
    <div>
      <h5>Characters list</h5>
      <ListGroup>
        {dbItems}
      </ListGroup>
      <PaginationComponent />
    </div>
  );
}