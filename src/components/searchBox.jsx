import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    display: block;
    padding: 20px;

    input{
        position: relative;
        display: block;
        border: none;
        border-radius: 8px;
        color: #666;
        padding: 10px 16px;
        font-size: 1rem;
        margin: 0 auto;
        box-sizing: border-box;
        min-width: 300px;

        &:focus{
            outline: none;
        }
    }
`

const SearchBox = ({ onChange }) => {
    const [term, setTerm] = useState('')

    return(
        <Container>
            <input type="text" value={term} onChange={e => setTerm(e.target.value) & onChange(e.target.value)} placeholder='Search your favorite character' />
        </Container>
    )
}

export { SearchBox };
