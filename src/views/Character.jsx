import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import loadingImg from '../assets/loading.png';

import * as SW_SERVICES from '../actions/sw_querys';

const Container = styled.div`
    position: relative;
    display: block;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, .2);
    margin: 0 20px;
    padding: 20px;
`

const Character = ({ match }) => {
    const [character, setCharacter] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let isMounted = true

        const fetchData = async () => {
            const getCharacter = await SW_SERVICES.getCharacter(match.params.id)
            setCharacter(getCharacter)
            setLoading(false)
        }

        if(isMounted)
            fetchData()

        return () => {
            isMounted = false
        };
    }, [])

    console.log(character)

    if(loading)
    return (
        <img src={loadingImg} />
    )
    else
    return(
        <Container>
            <h1>{character.name}</h1>
            <ul className="films">
                {
                    character.films.map((item, index) => {
                        return(
                            <li key={index} >{item}</li>
                        )
                    })
                }
            </ul>
            <ul className="physical">
                <li className="height">{character.height}</li>
                <li className="mass">{character.mass}</li>
                <li className="eye-color">{character.eye_color}</li>
                <li className="hair-color">{character.hair_color}</li>
                <li className="skin-color">{character.skin_color}</li>
            </ul>
            <ul className="species">
                {
                    character.species.map((item, index) => {
                        return(
                            <li key={index} >{item}</li>
                        )
                    })
                }
            </ul>
            <ul className="starships">
                {
                    character.starships.map((item, index) => {
                        return(
                            <li key={index} >{item}</li>
                        )
                    })
                }
            </ul>
            <ul className="vehicles">
                {
                    character.vehicles.map((item, index) => {
                        return(
                            <li key={index} >{item}</li>
                        )
                    })
                }
            </ul>
        </Container>
    )
}

export default Character;
