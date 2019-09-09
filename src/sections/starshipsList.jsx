import React from 'react';
import styled from 'styled-components';
import { StarshipCard } from '../components/cards';

import starshipIcon from '../assets/starship-icon.png';

const List = styled.ul`
    position: relative;
    display: block;
    margin: 0 auto 10px;
    padding: 10px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, .2);
    border-radius: 8px;

    .title{
        &:before{
            position: relative;
            display: inline-block;
            content: '';
            width: 20px;
            height: 20px;
            background: url(${starshipIcon}) no-repeat center;
            background-size: contain;
            vertical-align: middle;
            margin-right: 10px;
            transform: translateY(-2px);
        }
    }
`

const StarshipsList = ({ starships }) => {
    return(
        <List>
            <h3 className='title'>Starships</h3>
            {
                starships.map((item, index) => {
                    return(
                        <StarshipCard key={index} starship={item} />
                    )
                })
            }
        </List>
    )
}

export default StarshipsList;
