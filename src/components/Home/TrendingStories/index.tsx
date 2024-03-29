import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import Card from './Card';
import { trendingStories } from '@/data';

const TrendingStories = () => {
    return (
        <div className='grid grid-cols-trendingStories  md:grid-rows-trendingStories'>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                {trendingStories.map((post, index) => (
                    <Card index={index} key={post.title} post={post} />
                ))}
            </div>
            <div className='bg-[#3d3c3f] row-start-4 h-[80px] flex items-center text-white font-semibold p-8 justify-between'>
                <h3>See All Trending Stories</h3>
                <ChevronDoubleRightIcon className='h-6 w-6' />
            </div>
        </div>
    );
};

export default TrendingStories;
