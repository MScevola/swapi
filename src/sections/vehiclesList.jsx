import React from 'react';
import styled from 'styled-components';
import { VehicleCard } from '../components/cards';

import vehicleIcon from '../assets/vehicle-icon.png';

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
            background: url(${vehicleIcon}) no-repeat center;
            background-size: contain;
            vertical-align: middle;
            margin-right: 10px;
            transform: translateY(-2px);
        }
    }
`

const VehiclesList = ({ vehicles }) => {
    return(
        <List>
            <h3 className='title'>Vehicles</h3>
            {
                vehicles.map((item, index) => {
                    return(
                        <VehicleCard key={index} vehicle={item} />
                    )
                })
            }
        </List>
    )
}

export default VehiclesList;
