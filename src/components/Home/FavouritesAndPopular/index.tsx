'use client';

import CustomSwitch from '@/components/Common/CustomSwitch';
import React from 'react';
import styles from './favourites_and_popular.module.css';

const FavouritesAndPopular = () => {
    const [activeMode, setActiveMode] = React.useState('Following');
    const modes = [
        {
            displayText: 'Following',
            element: 'Following'
        },
        {
            displayText: 'Recommended',
            element: 'Recommended'
        }
    ];
    return (
        <div className={`${styles.favoritesAndPopular}h-[100%] px-6 py-2`}>
            <CustomSwitch modes={modes} activeMode={activeMode} setActiveMode={setActiveMode} />
        </div>
    );
};

export default FavouritesAndPopular;
