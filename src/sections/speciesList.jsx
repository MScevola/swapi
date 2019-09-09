import React from 'react';
import styled from 'styled-components';
import { SpecieCard } from '../components/cards';

import specieIcon from '../assets/specie-icon.png';

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
            background: url(${specieIcon}) no-repeat center;
            background-size: contain;
            vertical-align: middle;
            margin-right: 10px;
            transform: translateY(-2px);
        }
    }
`

const SpeciesList = ({ species }) => {
    return(
        <List>
            <h3 className='title'>Species</h3>
            {
                species.map((item, index) => {
                    return(
                        <SpecieCard key={index} specie={item} />
                    )
                })
            }
        </List>
    )
}

export default SpeciesList;
