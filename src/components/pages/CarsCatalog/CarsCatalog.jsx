import React, { useState } from 'react';
import CarsList from '../../Cars/CarsList';
import CarsSelection from 'components/CarsSelection/CarsSelection';

const CarsCatalog = () => {
    const [selectedMake, setSelectedMake] = useState('');

    const handleMakeChange = (make) => {
        setSelectedMake(make);
    };

    const handleReset = () => {
        setSelectedMake('');
    };

    return (
        <div>
            <CarsSelection onSelectMake={handleMakeChange} onReset={handleReset} />
            <CarsList selectedMake={selectedMake} />
        </div>
    );
};

export default CarsCatalog;