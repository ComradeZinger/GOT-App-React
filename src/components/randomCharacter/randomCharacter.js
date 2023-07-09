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

    const checkCharData = () => {
        let toRender = [];
        for (let key in person) {
            const string = key.charAt(0).toUpperCase() + key.slice(1);
            toRender.push(
                <ListGroupItem key={key}>
                    {string}: {person[key]}
                </ListGroupItem>
            );
        }
        return toRender;
    }

    return (
        <div className='randomCharacter'>
            <h5>Random Character: {person.name}</h5>
            <ListGroup>
                {checkCharData()}
            </ListGroup>
            <Button className='secondary listGrBtn' outline onClick={updateCharacter}>Next</Button>
        </div>
    );
}