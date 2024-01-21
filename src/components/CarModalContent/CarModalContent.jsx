import { CMContainer, BtnImgContainer, Img, Backdrop, XBtn, TitleCar, TCSpecial, TextBlackSpecial, TextContainer, TextGray, CarDescription, TitleLower, SpecialText, BtnRental, Btn, Stroke } from "./CarModal.styled";
import { Adress } from 'components/utils/utils';

const CarModalContent = ({ car, onClose }) => {
    return (
        <div>
            <Backdrop onClick={onClose} />
            <CMContainer>
                <BtnImgContainer>
                    <Img src={car.img} alt="car" />
                    <XBtn onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18" stroke="#121417" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6 6L18 18" stroke="#121417" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </XBtn>
                </BtnImgContainer>
                <TitleCar>{car.make} <TCSpecial>{car.model}</TCSpecial>, {car.year}</TitleCar>
                <TextContainer>
                    <TextGray>{Adress(car.address)}<Stroke>|</Stroke>Id: {car.id}<Stroke>|</Stroke> Year: {car.year}<Stroke>|</Stroke> Type: {car.type}<Stroke>|</Stroke></TextGray>
                    <TextGray>Fuel Consumption: {car.fuelConsumption}<Stroke>|</Stroke> Engine Size: {car.engineSize}<Stroke>|</Stroke></TextGray>
                </TextContainer>
                <CarDescription>{car.description}</CarDescription>
                <TitleLower>Accessories and functionalities:</TitleLower>
                <TextContainer>
                    <TextGray>{car.accessories[0]}<Stroke>|</Stroke>{car.accessories[1]}<Stroke>|</Stroke>{car.accessories[2]}<Stroke>|</Stroke></TextGray>
                    <TextGray>{car.functionalities[0]}<Stroke>|</Stroke>{car.functionalities[1]}<Stroke>|</Stroke>{car.functionalities[2]}<Stroke>|</Stroke></TextGray>
                </TextContainer>
                <TitleLower>Rental conditions:</TitleLower>
                <TextBlackSpecial>{car.rentalConditions}</TextBlackSpecial>
                <TextBlackSpecial>Mileage: <SpecialText>{car.mileage}</SpecialText> Price: <SpecialText>{car.rentalPrice}</SpecialText></TextBlackSpecial>
                <BtnRental href={`tel:${+380730000000}`}>
                    <Btn>Rental car</Btn>
                </BtnRental>
            </CMContainer>
        </div>
    );
};

export default CarModalContent;