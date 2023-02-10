'use client';

import CustomSwitch from '@/components/Common/CustomSwitch';
import React from 'react';
import Card from './Card';
import { useWindowSize } from '@/hooks/useWindowSize';

const FavouritesAndPopular = () => {
    const [activeMode, setActiveMode] = React.useState('Following');
    const { width, height } = useWindowSize();
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
        <div className='flex flex-col h-[100%] px-6 pt-2 gap-4'>
            <CustomSwitch modes={modes} activeMode={activeMode} setActiveMode={setActiveMode} />
            <div className='grid sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 gap-4 flex-1'>
                {Array(width && width > 1540 ? 2 : 2)
                    .fill(0)
                    .map((post, index) => (
                        <Card key={index} post={post} />
                    ))}
            </div>
            <div className='border border-b-1 h-[1px] w-full mx-auto flex mt-auto' />
        </div>
    );
};

export default FavouritesAndPopular;
