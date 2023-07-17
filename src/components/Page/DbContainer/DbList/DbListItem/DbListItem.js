import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setItem } from '../../../../../store/slices/currentDbItem';
import { ListGroupItem } from 'reactstrap';

import './DbListItem.css';

export default function DbListItem({ id, name }) {

    const dispatch = useDispatch()

    let className = "";

    const onSelect = () => {
        console.log(name, id)
        if (className) {
            className = "";
            dispatch(setItem(null))
        } else {
            className = "active";
            dispatch(setItem(id))
        }
    }

    return (
        <ListGroupItem
            className={className}
            onClick={onSelect}>
            {name}
        </ListGroupItem>
    );
}
