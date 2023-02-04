import React from 'react';
import Avatar from '../../Common/Avatar';

const FavouriteAuthors = () => {
    return (
        <div className='flex flex-col font-semibold text-gray-500 h-[160px] px-6 py-2 w-full border-blue-200'>
            <h3 className='text-[#c2c7d5]'>FAVOURITE AUTHOR</h3>
            <div className='flex w-full items-center gap-6 my-4 overflow-hidden py-4 flex-shrink-0 relative px-4'>
                <div className='w-[35px] h-[35px] flex bg-white shadow-md absolute rounded-full left-[-10px] cursor-pointer' />
                {Array(20)
                    .fill(0)
                    .map((author) => (
                        <Avatar image='/icons/person1.png' badge={2} />
                    ))}
                <div className='w-[35px] h-[35px] flex bg-white shadow-md absolute rounded-full right-[-10px] cursor-pointer' />
            </div>
            <div className='border border-b-1 h-[1px] w-full mx-auto flex mt-auto' />
        </div>
    );
};

export default FavouriteAuthors;
