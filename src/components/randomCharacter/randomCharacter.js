import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

import { getCharacter } from '../../services/fetchAPI.js'

import './randomCharacter.css';

export default function RandomCharacter() {

    const [person, setPerson] = useState({});

    useEffect(() => {
        updateCharacter()
    }, []);

    const updateCharacter = () => {
        const id = Math.floor(Math.random() * (140 - 25) + 25);
        getCharacter(id)
            .then(char => setPerson(char))
    };

    const checkCharData = (checkField) => {
        if (person[checkField]) {
            const string = checkField.charAt(0).toUpperCase() + checkField.slice(1);
            return (
                <ListGroupItem>
                    {string}: {person[checkField]}
                </ListGroupItem>
            );
        }
    }

    return (
        <div className='randomCharacter'>
            <ListGroup>
                <h5>Random Character: {person.name}</h5>
                {checkCharData('gender')}
                {checkCharData('born')}
                {checkCharData('died')}
                {checkCharData('culture')}
            </ListGroup>
            <Button className='secondary listGrBtn' outline onClick={updateCharacter}>Next</Button>
        </div>
    );
}