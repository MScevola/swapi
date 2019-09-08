import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import * as SW_SERVICES from '../actions/sw_querys';
import { CharacterCard } from '../components/characterCard';

const CharactersList = styled.ul`
    position: relative;
    display: block;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
    list-style: none;
`

const Home = () => {
    const [page, setPage] = useState(1)
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        let isMounted = true

        const fetchData = async () => {
            const getCharacters = await SW_SERVICES.getCharacters(page)
            setCharacters(getCharacters.results)
        }

        if(isMounted)
            fetchData()

        return () => {
            isMounted = false
        };
    }, [page])

    console.log(characters)

    return(
        <CharactersList>
            {
                characters.map((item, index) => {
                    const itemId = item.url.split('/')[5]
                    return(
                        <Link key={index} to={`/character/${itemId}`}>
                            <CharacterCard name={item.name} gender={item.gender} episodes={item.films.length} />
                        </Link>
                    )
                })
            }
        </CharactersList>
    )
}

export default Home;
