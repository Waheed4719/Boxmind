import React from 'react';
import { faker } from '@faker-js/faker';
import Avatar from '../../Common/Avatar';
import ArrowLeftIcon from '../../../../public/icons/arrow-left.svg';
import ArrowRightIcon from '../../../../public/icons/arrow-right.svg';

const FavouriteAuthors = () => {
    return (
        <div className='flex flex-col font-semibold text-gray-500 h-[160px] px-6 py-2 w-full border-blue-200 relative'>
            <h3 className='text-[#c2c7d5]'>FAVOURITE AUTHOR</h3>
            <div className='px-4'>
                <div className='flex w-full mx-auto relative'>
                    <div className='flex w-full items-center gap-6 my-4 py-4 flex-shrink-0 overflow-x-hidden relative px-4'>
                        {Array(20)
                            .fill(0)
                            .map((_, index) => (
                                <Avatar shadow key={index} image={faker.image.avatar()} badge={2} />
                            ))}
                    </div>
                    <div className='w-[35px] h-[35px] flex bg-white shadow-md absolute rounded-full top-[50%] translate-y-[-50%] left-[-10px] cursor-pointer items-center justify-center'>
                        <ArrowLeftIcon />
                    </div>
                    <div className='w-[35px] h-[35px] flex bg-white shadow-md absolute rounded-full top-[50%] translate-y-[-50%] right-[-10px] cursor-pointer items-center justify-center'>
                        <ArrowRightIcon />
                    </div>
                </div>
            </div>

            <div className='border border-b-1 h-[1px] w-full mx-auto flex mt-auto' />
        </div>
    );
};

export default FavouriteAuthors;
