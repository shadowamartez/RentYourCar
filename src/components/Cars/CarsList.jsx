import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Adress } from "components/utils/utils";
import {StyledContainer, List, StyledLi, IconBtnContainer, Img, TitleCar, TitleModel, SpecialContainer, BtnLoad, BtnLoadContainer, BtnLearn, TextInfo, Stroke } from "./CarsList.styled";
import IconBtn from "components/IconBtn/IconBtn";
import CarModalContent from 'components/CarModalContent/CarModalContent';
import { selectCars } from 'components/redux/cars/carsSelectors';
import { getAllCars } from 'components/redux/cars/carsOperations';
import { CustomModal } from 'components/CarModalContent/CarModal.styled';

const CarsList = ({ cars, page, setPage, selectedMake }) => {
    const dispatch = useDispatch();
    const allCars = useSelector(selectCars);
    const [visibleCars, setVisibleCars] = useState(12);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);

    const openModal = (car) => {
        setSelectedCar(car);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedCar(null);
        setModalOpen(false);
    };

    useEffect(() => {
        dispatch(getAllCars(page));
    }, [dispatch, page]);

    const handleLoadMore = () => {
        setVisibleCars((prevVisibleCars) => prevVisibleCars + 12);
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <StyledContainer>
            <List>
                {allCars
                    .filter((car) => !selectedMake || car.make === selectedMake) 
                    .slice(0, visibleCars)
                    .map((car) => (
                    <StyledLi key={car.id}>
                        <IconBtnContainer>
                                <IconBtn carId={car.id} />
                        </IconBtnContainer> 
                        <Img src={car.img} alt="car" />
                        <TitleCar>
                            <SpecialContainer>
                            {car.make} 
                            <TitleModel>{car.model},</TitleModel>
                            {car.year}
                            </SpecialContainer>
                            <div>{car.rentalPrice}</div>
                        </TitleCar>
                        <TextInfo>{Adress(car.address)}<Stroke>|</Stroke>{car.rentalCompany}<Stroke>|</Stroke></TextInfo>
                        <TextInfo>{car.type}<Stroke>|</Stroke>{car.make}<Stroke>|</Stroke>{car.id}<Stroke>|</Stroke>{car.functionalities[0]}<Stroke>|</Stroke></TextInfo>
                        <BtnLearn onClick={() => openModal(car)}>Learn more</BtnLearn>
                    </StyledLi>
                ))}
            </List>
            {visibleCars < allCars.length && (
                <BtnLoadContainer>
                    <BtnLoad onClick={handleLoadMore}>Load more</BtnLoad>
                </BtnLoadContainer>
            )}
            <CustomModal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                contentLabel="Information about the car"
                overlayClassName="custom-overlay"
            >
            {selectedCar && <CarModalContent car={selectedCar} onClose={closeModal} />}
            </CustomModal>
        </StyledContainer>
    );
};

export default CarsList;

