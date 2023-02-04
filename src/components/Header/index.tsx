'use client';

import React from 'react';
import clsx from 'clsx';
import BrandLogo from '../../../public/cube.svg';
import CustomSwitch from '../Common/CustomSwitch';
import SearchBar from './SearchBar';
import Image from 'next/image';

const Header = () => {
    const [activeMode, setActiveMode] = React.useState('Day');
    const modes = [
        {
            displayText: 'Day',
            element: <Image src='./icons/sun.svg' alt='sun' height={14} width={14} />
        },
        {
            displayText: 'Night',
            element: <Image src='./icons/moon.svg' alt='moon' height={14} width={14} />
        }
    ];
    return (
        <div className={clsx([`h-[60px] flex justify-between items-center px-4`])}>
            <div className={clsx([`w-fit flex items-center gap-x-2`])}>
                <div
                    className={clsx([
                        `rounded-full bg-blue-500 text-white flex items-center justify-center h-[40px] w-[40px]`
                    ])}
                >
                    <BrandLogo src='/cube.svg' height={20} width={20} alt='brand' />
                </div>
                <a href='/' className='font-bold '>
                    Boxmind.
                </a>
            </div>
            <div className='h-fit flex items-center gap-2'>
                <CustomSwitch modes={modes} activeMode={activeMode} setActiveMode={setActiveMode} />
                <SearchBar />
            </div>
        </div>
    );
};

export default Header;
