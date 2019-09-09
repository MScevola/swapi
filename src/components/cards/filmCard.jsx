import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import * as SW_SERVICES from '../../actions/sw_queries';

const Container = styled.div`
    position: relative;
    display: block;
    margin: 0 0 10px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 8px;
    background-size: 30px;
    color: #ffca1e;
    background: white;
    color: #666;

    .film-title{
        display: block;
    }
`

const FilmCard = ({ film }) => {
    const [filmData, setFilmData] = useState([])

    useEffect(() => {
        let isMounted = true

        const filmId = film.split('/')[5]

        const fetchData = async () => {
            const getFilm = await SW_SERVICES.getFilm(filmId)
            setFilmData(getFilm)
        }

        if(isMounted)
            fetchData()

        return () => {
            isMounted = false
        };
    }, [film])
    
    return(
        // <Link to={`/episode/${filmData.episode_id}`}>
            <Container>
                <span className="film-title">{filmData.title}</span>
            </Container>
        // </Link>
    )
}

export default FilmCard;
