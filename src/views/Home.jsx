import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CharacterCard } from '../components/cards';

import * as SW_SERVICES from '../actions/sw_queries';
import { SearchBox } from '../components/searchBox';
import { Preloader } from '../components/preloader';

const Container = styled.div`
    position: absolute;
    display: block;
    height: 100%;
    width: 100vw;
`

const CharactersList = styled.ul`
    position: relative;
    display: block;
    max-width: 800px;
    max-height: calc(100% - 74px);
    margin: 0 auto;
    padding: 0 20px 60px;
    list-style: none;
    overflow: auto;
    box-sizing: border-box;

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
`

const Home = () => {
    const [page, setPage] = useState(1)
    const [characters, setCharacters] = useState([])
    const [isSearch, setIsSearch] = useState(false)

    const listRef = useRef()

    useEffect(() => {
        let isMounted = true

        const fetchData = async () => {
            const getCharacters = await SW_SERVICES.getCharacters(page)
            setCharacters(characters.concat(getCharacters.results))
        }

        if(isMounted && !isSearch)
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

    const handleSearch = async value => {
        const search = await SW_SERVICES.searchCharacters(value)
        setCharacters(search.results)
        if(!!value)
            setIsSearch(true)
        else    
            setIsSearch(false)
    }

    return(
        <Container>
            <SearchBox onChange={handleSearch} />
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
            </CharactersList>
        </Container>
    )
}

export default Home;
