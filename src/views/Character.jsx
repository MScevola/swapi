import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { FilmsList, SpeciesList, StarshipsList, VehiclesList } from '../sections';

import loadingImg from '../assets/loading.png';

import * as SW_SERVICES from '../actions/sw_queries';

const Container = styled.div`
    position: relative;
    display: block;
    max-width: 800px;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 0 auto;
    padding: 20px;
    color: #ffca1e;

    .physical{
        position: relative;
        display: block;
        margin: 10px 0;
        padding: 0;
        list-style: none;

        li{
            position: relative;
            display: inline-block;
            margin: 6px 12px;

            span{
                color: white;
            }
        }
    }
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
    }, [match])

    console.log(character)

    if(loading)
    return (
        <img src={loadingImg} alt="...loading" />
    )
    else
    return(
        <Container>
            <h1>{character.name}</h1>
            <ul className="physical">
                <li className="height"><span>Height: </span>{character.height}</li>
                <li className="mass"><span>Mass: </span>{character.mass}</li>
                <li className="eye-color"><span>Eyes color: </span>{character.eye_color}</li>
                <li className="hair-color"><span>Hair color: </span>{character.hair_color}</li>
                <li className="skin-color"><span>Skin color: </span>{character.skin_color}</li>
            </ul>
            <SpeciesList species={character.species} />
            <VehiclesList vehicles={character.vehicles} />
            <StarshipsList starships={character.starships} />
            <FilmsList films={character.films} />
        </Container>
    )
}

export default Character;
