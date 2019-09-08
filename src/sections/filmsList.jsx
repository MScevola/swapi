import React from 'react';
import styled from 'styled-components';
import { FilmCard } from '../components/cards';

import filmIcon from '../assets/film-icon.png';

const List = styled.ul`
    position: relative;
    display: block;
    margin: 0 auto;
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
            background: url(${filmIcon}) no-repeat center;
            background-size: contain;
            vertical-align: middle;
            margin-right: 10px;
            transform: translateY(-2px);
        }
    }
`

const FilmsList = ({ films }) => {
    return(
        <List>
            <h3 className='title'>Films</h3>
            {
                films.map((item, index) => {
                    return(
                        <FilmCard key={index} film={item} />
                    )
                })
            }
        </List>
    )
}

export default FilmsList;
