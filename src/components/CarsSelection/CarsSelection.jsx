import React, { useState } from 'react';
import { SelectContainer, SpecContainer, Label, Select, BtnReset } from './CarsSelection.styled';

const CarsSelection = ({ onSelectMake }) => {
  const [selectedCar, setSelectedCar] = useState('');

  const handleCarChange = (event) => {
    setSelectedCar(event.target.value);
    onSelectMake(event.target.value);
  };

  const handleReset = () => {
    setSelectedCar('');
    onSelectMake('');
  };

  return (
    <div>
      <SelectContainer>
        <Label htmlFor="carSelection">Car brand</Label>
        <SpecContainer>
          <Select id="carSelection" value={selectedCar} onChange={handleCarChange}>
            <option value="">Enter the text</option>
            <option value="Buick">Buick</option>
            <option value="Volvo">Volvo</option>
            <option value="HUMMER">HUMMER</option>
            <option value="Subaru">Subaru</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Nissan">Nissan</option>
            <option value="Lincoln">Lincoln</option>
            <option value="GMC">GMC</option>
            <option value="Hyundai">Hyundai</option>
            <option value="MINI">MINI</option>
            <option value="Bentley">Bentley</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Aston Martin">Aston Martin</option>
            <option value="Pontiac">Pontiac</option>
            <option value="Lamborghini">Lamborghini</option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Chrysler">Chrysler</option>
            <option value="Kia">Kia</option>
            <option value="Land Rover">Land Rover</option>
          </Select>
          <BtnReset onClick={handleReset}>Reset</BtnReset>
        </SpecContainer>
        </SelectContainer>
    </div>
  );
};

export default CarsSelection;


