import styled from 'styled-components';

export const StyledContainer = styled.div`
    margin-top: 20px;
`;

export const List = styled.ul`
    display: grid;
    max-width: calc(100vw - 115px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 29px;
    margin-top: 0;
    margin-bottom: 50px;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto; 
`;

export const StyledLi = styled.li`
    position: relative;
`;

export const Img = styled.img`
    border-radius: 14px;
`;

export const IconBtnContainer = styled.div`
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 1; 
`;

export const TitleCar = styled.h3`
    color: #121417;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    padding-right: 8px;
    font-family: Manrope;
`;

export const TitleModel = styled.span`
    color: #3470FF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
    font-family: Manrope;
`;

export const SpecialContainer = styled.div`
    display: flex;
    gap: 4px;
`;

export const BtnLoadContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 150px; 
`;

export const BtnLoad = styled.button`
    padding: 0;
    border-radius: 2px;
    background: transparent;
    text-align: center;
    display: inline-block;
    color: #3470FF;
    border: 0;
    text-decoration: underline;
    cursor: pointer;
    font-family: inherit;
    font-size: 16px;
    line-height: 1.5;
    font-style: normal;
    font-weight: 500;
    font-family: Manrope;

    &:hover {
        color: #0B44CD;
    }
`;

export const BtnLearnContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16px;
`;

export const BtnLearn = styled.button`
    padding: 12px 99px;
    border-radius: 12px;
    background-color: #3470FF;
    text-align: center;
    display: inline-block;
    color: #FFF;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    line-height: 1.42;
    font-style: normal;
    font-weight: 600;
    width: 100%;
    font-family: Manrope;
    
    &:hover {
        background-color: #0B44CD;
    }
`;

export const TextInfo = styled.p`
    color: rgba(18, 20, 23, 0.50);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    font-family: Manrope;
`;

export const Stroke = styled.span`
    margin-left: 3px;
    margin-right: 3px;
    color: #1214171a;
`;



