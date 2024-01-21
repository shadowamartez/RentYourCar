import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFavorites } from 'components/redux/cars/carsSlice';
import { selectFavorites } from 'components/redux/cars/carsSelectors';
import IconBtn from 'components/IconBtn/IconBtn';
import { Adress } from 'components/utils/utils';
import { StyledContainer, List, StyledLi, IconBtnContainer, Img, TitleCar, SpecialContainer, TitleModel, TextInfo, BtnLearn, Stroke } from '../../Cars/CarsList.styled';
import { CustomModal } from 'components/CarModalContent/CarModal.styled';
import CarModalContent from 'components/CarModalContent/CarModalContent';
import { useSpring, animated } from 'react-spring';
import { NoFavoritesMessage } from './CarsFavorites.styled';

const CarsFavorites = () => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    dispatch(setFavorites(favorites));
  }, [dispatch, favorites]);

  const openModal = (car) => {
    setSelectedCar(car);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCar(null);
    setModalOpen(false);
  };

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500, 
  });

  return (
    <StyledContainer>
      {favorites.length === 0 ? (
        <animated.div style={fadeIn}>
          <NoFavoritesMessage>
            Please choose a car in Catalog and it will appear here. 
          </NoFavoritesMessage>
        </animated.div>
      ) : (
        <List>
          {favorites.map((car) => (
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
              <TextInfo>
                {Adress(car.address)}
                <Stroke>|</Stroke>
                {car.rentalCompany}
                <Stroke>|</Stroke>
              </TextInfo>
              <TextInfo>
                {car.type}
                <Stroke>|</Stroke>
                {car.make}
                <Stroke>|</Stroke>
                {car.id}
                <Stroke>|</Stroke>
                {car.functionalities[0]}
                <Stroke>|</Stroke>
              </TextInfo>
              <BtnLearn onClick={() => openModal(car)}>Learn more</BtnLearn>
            </StyledLi>
          ))}
        </List>
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

export default CarsFavorites;
