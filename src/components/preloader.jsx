import React from 'react';
import styled from 'styled-components';

import preloaderGif from '../assets/y5ymCvd.gif';

const PreloaderStyles = styled.div`
    position: fixed;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    overflow: hidden;
    border-radius: 50%;

    img{
        position: absolute;
        width: 200px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

const Preloader = () => {
    return(
        <PreloaderStyles>
            <img src={preloaderGif} alt="Loading..."/>
        </PreloaderStyles>
    )
}

export { Preloader }
