import { trendingStories } from '@/data';
import React from 'react';
import Card from './Card';

const MiscellaneousBlogs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full col-span-1 xl:col-span-2 p-6'>
            {trendingStories.map((post) => (
                <Card post={post} key={post.title} />
            ))}
        </div>
    );
};

export default MiscellaneousBlogs;
