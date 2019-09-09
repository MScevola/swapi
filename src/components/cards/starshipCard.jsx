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

const StarshipCard = ({ starship }) => {
    const [starshipData, setStarshipData] = useState([])

    useEffect(() => {
        let isMounted = true

        const starshipId = starship.split('/')[5]

        const fetchData = async () => {
            const getStarship = await SW_SERVICES.getStarship(starshipId)
            setStarshipData(getStarship)
        }

        if(isMounted)
            fetchData()

        return () => {
            isMounted = false
        };
    }, [starship])

    console.log(starshipData)
    
    return(
        // <Link to={`/starship/${!!starshipData.url ? starshipData.url.split('/')[5] : ''}`}>
            <Container>
                <span className="film-title">
                    <span>{starshipData.name}</span>
                </span>
            </Container>
        // </Link>
    )
}

export default StarshipCard;
