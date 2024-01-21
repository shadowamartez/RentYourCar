import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 36px; 
    height: 80px;
    background-color: #fff;
    color: #3470FF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease; 

    &:hover {
        background-color: #f2f2f2; 
    }
`;

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: #3470FF;
    font-size: 20px; 
    font-weight: bold;
    font-family: Manrope;
    transition: color 0.3s ease;

    &:hover {
        color: #2255a4; 
    }
`;