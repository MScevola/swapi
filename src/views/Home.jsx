import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CharacterCard } from '../components/cards';

import * as SW_SERVICES from '../actions/sw_queries';

const CharactersList = styled.ul`
    position: relative;
    display: block;
    max-width: 800px;
    max-height: 100%;
    margin: 0 auto;
    padding: 0 20px 60px;
    list-style: none;
    overflow: auto;
`

const Home = () => {
    const [page, setPage] = useState(1)
    const [characters, setCharacters] = useState([])

    const listRef = useRef()

    useEffect(() => {
        let isMounted = true

        const fetchData = async () => {
            const getCharacters = await SW_SERVICES.getCharacters(page)
            setCharacters(characters.concat(getCharacters.results))
        }

        if(isMounted)
            fetchData()

        return () => {
            isMounted = false
        };
    }, [page])

    const handleScroll = e => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            setPage(1 + page)
        }
    }

    return(
        <CharactersList onScroll={handleScroll}>
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
            {/* <div onClick={() => setPage(1 + page)}>pagina</div> */}
        </CharactersList>
    )
}

export default Home;
