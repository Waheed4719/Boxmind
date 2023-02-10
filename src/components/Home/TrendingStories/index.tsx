import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import Card from './Card';
import { trendingStories } from '@/data';

const index = () => {
    return (
        <div className='grid grid-cols-trendingStories  grid-rows-trendingStories'>
            <div className='grid grid-cols-2'>
                {trendingStories.map((story) => (
                    <Card key={story.title} data={story} />
                ))}
            </div>
            <div className='bg-[#3d3c3f] row-start-4 h-[80px] flex items-center text-white font-semibold p-4 justify-between'>
                <h3>See All Trending Stories</h3>

                <ChevronDoubleRightIcon className='h-6 w-6' />
            </div>
        </div>
    );
};

export default index;
