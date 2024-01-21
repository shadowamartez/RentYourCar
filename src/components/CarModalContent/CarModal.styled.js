import styled from 'styled-components';
import Modal from 'react-modal';

export const CustomModal = styled(Modal)`
    &.custom-overlay {
        background: none;
    }
`;

export const CMContainer = styled.div`
    background-color: #FFF;;
    border-radius: 24px;
    width: 541px;
    padding: 15px 15px 40px 40px; 
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    margin-top: 150px;
    position: absolute;
`;

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; 
    z-index: 100;
    background-color: rgba(18, 20, 23, 0.50);
`;

export const BtnImgContainer = styled.div`
    display: flex;
    align-items: flex-start; 
    padding: 0;
    margin: 0;
    gap: 56px;
`;

export const Img = styled.img`
    border-radius: 14px;
    padding: 0;
    margin: 0;
`;

export const XBtn = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
`;

export const TitleCar = styled.h3`
    color: #121417;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.33; 
    margin-bottom: 8px;
`;

export const TCSpecial = styled.span`
    color: #3470FF;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
    font-family: Manrope;
`;

export const TextGray = styled.p`
    color: rgba(18, 20, 23, 0.50);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5; 
    padding: 0;
    margin: 0; 
    font-family: Manrope;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px; 
`;

export const CarDescription = styled.p`
    color: #121417;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42;
    margin-bottom: 24px;
    padding: 0; 
    font-family: Manrope;
`;

export const TitleLower = styled.h4`
    color: #121417;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.42;
    margin-bottom: 8px; 
    font-family: Manrope;
`;

export const TextBlack = styled.p`
    color: #363535;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
`;

export const TextBlackSpecial = styled.p`
    color: #363535;
    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5; 
`;

export const SpecialText = styled.span`
    color: #3470FF;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5px;
    margin-right: 36px;
`;  

export const BtnRental = styled.a`
    padding: 12px 50px;
    background-color: #3470FF;
    border: none;
    margin-top: 31px;
    border-radius: 12px;
    width: 168px;

    &:hover {
        background-color: #0B44CD;
    }
`;

export const Btn = styled.button`
    padding: 12px 50px;
    background-color: transparent;
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.42;
    cursor: pointer;
    border: none;
    padding: 0;
    margin-top: 31px;
    margin-bottom: 40px;
    font-family: Manrope;
`;

export const Stroke = styled.span`
    margin-left: 6px;
    margin-right: 6px;
    color: #1214171a;
`;

