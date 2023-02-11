import { trendingStories } from '@/data';
import React from 'react';
import Card from './Card';

type Props = {};

const index = (props: Props) => {
    return (
        <div className='grid grid-cols-3 gap-6 w-full col-span-2 p-6'>
            {trendingStories.map((post) => (
                <Card post={post} />
            ))}
        </div>
    );
};

export default index;
