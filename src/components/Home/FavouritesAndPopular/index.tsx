'use client';

import CustomSwitch from '@/components/Common/CustomSwitch';
import React from 'react';
import Card from './Card';
import { useWindowSize } from '@/hooks/useWindowSize';
import { trendingStories } from '@/data';

const FavouritesAndPopular = () => {
    const { width } = useWindowSize();
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
        <div className='flex flex-col h-[100%] px-6 gap-4 pt-3'>
            <CustomSwitch modes={modes} activeMode={activeMode} setActiveMode={setActiveMode} />
            <div className='grid  md:grid-cols-2 2xl:grid-cols-3 gap-6 flex-1'>
                {trendingStories.slice(0, width && width > 1540 ? 3 : 2).map((post) => (
                    <Card key={post.title} post={post} />
                ))}
            </div>
            <div className='border border-b-1 h-[1px] w-full mx-auto flex mt-auto' />
        </div>
    );
};

export default FavouritesAndPopular;
