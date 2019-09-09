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

const SpecieCard = ({ specie }) => {
    const [specieData, setSpecieData] = useState([])

    useEffect(() => {
        let isMounted = true
        console.log(specie)
        const specieId = specie.split('/')[5]

        const fetchData = async () => {
            const getSpecie = await SW_SERVICES.getSpecie(specieId)
            setSpecieData(getSpecie)
        }

        if(isMounted)
            fetchData()

        return () => {
            isMounted = false
        };
    }, [specie])

    console.log(specieData)
    
    return(
        <Link to={`/specie/${!!specieData.url ? specieData.url.split('/')[5] : ''}`}>
            <Container>
                <span className="film-title">
                    <span><strong>Specie:</strong> {specieData.name}</span>
                    <span><strong>Specie language:</strong> {specieData.language}</span>
                </span>
            </Container>
        </Link>
    )
}

export default SpecieCard;
