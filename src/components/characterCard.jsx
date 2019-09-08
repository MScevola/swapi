import React from 'react';
import styled from 'styled-components';

import icon from '../assets/character-icon.png';
import genderMale from '../assets/gender-male-icon.png';
import genderFemale from '../assets/gender-female-icon.png';
import genderNA from '../assets/gender-na-icon.png';
import filmIcon from '../assets/film-icon.png';

const Container = styled.div`
    position: relative;
    display: block;
    margin: 0 0 10px;
    padding: 20px 20px 20px 70px;
    box-sizing: border-box;
    border-radius: 8px;
    background: url(${icon}) no-repeat left +10px center;
    background-size: 40px;
    background-color: rgba(255, 255, 255, .2);
    color: #ffca1e;

    .name{
        display: block;
    }

    .gender{
        position: relative;
        display: inline-block;
        vertical-align: middle;
        margin: 10px 10px 0 0;
        width: 20px;
    }

    .episodes{
        position: relative;
        display: inline-block;
        vertical-align: middle;
        margin: 10px 10px 0;
        
        &:before{
            position: relative;
            display: inline-block;
            content: '';
            width: 20px;
            height: 20px;
            vertical-align: middle;
            background: url(${filmIcon}) no-repeat center;
            background-size: contain;
            margin-right: 2px;
        }

        span{
            display: inline-block;
            transform: translateY(2px);
        }
    }
`

const CharacterCard = ({ name, gender, episodes }) => {
    const genderIcon = gender => {
        switch(gender) {
            case 'male':
                return genderMale;
            case 'female':
                return genderFemale;
            default:
                return genderNA;
        }
    }
    return(
        <Container>
            <span className="name">{name}</span>
            <img className="gender" src={genderIcon(gender)} alt={`${gender} icon`} text={gender} />
            <div className="episodes"><span>{episodes}</span></div>
        </Container>
    )
}

export { CharacterCard }
