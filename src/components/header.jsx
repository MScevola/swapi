import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../assets/star-wars-logo.png';

const HeaderContainer = styled.header`
    position: relative;
    display: block;
    margin: 0 auto;
    max-width: 800px;
    text-align: center;
    height: 100px;
`

const Header = () => {
    return(
        <Link to='/'>
            <HeaderContainer>
                <img src={logo} alt="Star Wars Logo"/>
            </HeaderContainer>
        </Link>
    )
}

export { Header };
