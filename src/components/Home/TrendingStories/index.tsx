import React from 'react';
// import styles from './trending_stories.module.css'
import Card from './Card';

const index = () => {
    return (
        <div className='grid grid-cols-trendingStories  grid-rows-trendingStories'>
            <div className='grid grid-cols-2'>
                {Array(6)
                    .fill(0)
                    .map((_i, idx) => (
                        <Card key={idx} />
                    ))}
            </div>
            <div className='bg-black row-start-4'>
                <h3>See All Trending Stories</h3>
            </div>
        </div>
    );
};

export default index;
