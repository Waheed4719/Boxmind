'use client';

import {
    BookmarkIcon,
    ArrowRightOnRectangleIcon,
    Cog6ToothIcon
} from '@heroicons/react/24/outline';

const Sidebar = () => {
    return (
        <div className='flex flex-col left-0 fixed bottom-0 top-[60px] bg-[#f5f7f9] w-[70px] border boder-l-2'>
            <div className='flex gap-2 flex-col items-center w-full flex-1'>
                <div className='h-[50px] w-full items-center flex justify-center'>
                    <BookmarkIcon className='h-6 w-6 text-[#bfc4d2]' />
                </div>
                <div className='h-[50px] w-full items-center flex justify-center'>
                    <BookmarkIcon className='h-6 w-6 text-[#bfc4d2]' />
                </div>
                <div className='h-[50px] w-full items-center flex justify-center'>
                    <BookmarkIcon className='h-6 w-6 text-[#bfc4d2]' />
                </div>
                <div className='h-[50px] w-full items-center flex justify-center'>
                    <Cog6ToothIcon className='h-6 w-6 text-[#bfc4d2]' />
                </div>
            </div>

            <div className='flex gap-2 flex-col items-center w-full'>
                <div className='h-[50px] w-full items-center flex justify-center'>
                    <BookmarkIcon className='h-6 w-6 text-[#bfc4d2]' />
                </div>
                <div className='h-[50px] w-full items-center flex justify-center'>
                    <ArrowRightOnRectangleIcon className='h-6 w-6 text-[#bfc4d2]' />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
