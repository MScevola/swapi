import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Preloader } from '../components/preloader';

import goBack from '../assets/arrow-down.svg';

import { FilmsList, SpeciesList, StarshipsList, VehiclesList, PlanetsList } from '../sections';

import * as SW_SERVICES from '../actions/sw_queries';

const Container = styled.div`
    position: relative;
    display: block;
    max-width: 800px;
    max-height: 100%;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 0 auto;
    padding: 20px;
    overflow: auto;
    color: #ffca1e;

    @media screen and (min-width: 1024px) {
      &::-webkit-scrollbar-track{
        box-shadow: none;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, .5);
        width: 12px;
      }

      &::-webkit-scrollbar{
        width: 12px;
        background-color: transparent;
      }

      &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: rgba(255, 255, 255, .2);
        width: 12px;
      } 
    }

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

    .go-back{
        position: relative;
        margin-bottom10px;

        img{
            width: 30px;
            transform: rotate(90deg);
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
        <Preloader />
    )
    else
    return(
        <Container>
            <Link to='/' className='go-back'><img src={goBack} alt="go back"/></Link>
            <h1>{character.name}</h1>
            <ul className="physical">
                <li><span>Birth: </span>{character.birth_year}</li>
                <li><span>Height: </span>{character.height}</li>
                <li><span>Mass: </span>{character.mass}</li>
                <li><span>Eyes color: </span>{character.eye_color}</li>
                <li><span>Hair color: </span>{character.hair_color}</li>
                <li><span>Skin color: </span>{character.skin_color}</li>
            </ul>
            <PlanetsList planets={[character.homeworld]} />
            <SpeciesList species={character.species} />
            <VehiclesList vehicles={character.vehicles} />
            <StarshipsList starships={character.starships} />
            <FilmsList films={character.films} />
        </Container>
    )
}

export default Character;
