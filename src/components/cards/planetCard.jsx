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

    span{
        display: block;

        strong{
            font-weight: normal;
            color: #aaa;
        }
    }
`

const PlanetCard = ({ planet }) => {
    const [planetData, setPlanetData] = useState([])

    useEffect(() => {
        let isMounted = true
        console.log(planet)
        const planetId = planet.split('/')[5]

        const fetchData = async () => {
            const getPlanet = await SW_SERVICES.getPlanet(planetId)
            setPlanetData(getPlanet)
        }

        if(isMounted)
            fetchData()

        return () => {
            isMounted = false
        };
    }, [planet])

    console.log(planetData)
    
    return(
        <Link to={`/planet/${!!planetData.url ? planetData.url.split('/')[5] : ''}`}>
            <Container>
                <span className="film-title">
                    {planetData.name}
                </span>
            </Container>
        </Link>
    )
}

export default PlanetCard;
