import styled from 'styled-components';

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: column; 
    width: 224px;
    margin-left: 58px;
`;

export const SpecContainer = styled.div`
    display: flex;
    flex-direction: raw; 
`;

export const Label = styled.label`
    color: #8A8A89;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.28;
    margin: 8px 0;
`;

export const Select = styled.select`
    padding: 14px 18px;
    border: none; 
    background-color: #F7F7FB;
    border-radius: 14px;
    outline: none;
    margin-right: 18px; 

    ::selection {
        background-color: #121417; 
        color: #FFF; 
        font-family: Manrope;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 1.25;
    }

    option {
        color: rgba(18, 20, 23, 0.20); 
    }
`;

export const BtnReset = styled.button`
    display: flex;
    padding: 14px 44px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: #3470FF;
    color: #FFF;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.42;

    &:hover {
        background-color: #0B44CD;
    }
`;