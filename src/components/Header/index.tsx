'use client';

import React, { useContext } from 'react';
import clsx from 'clsx';
import BrandLogo from '../../../public/icons/cube.svg';
import CustomSwitch from '../Common/CustomSwitch';
import SearchBar from './SearchBar';
import Image from 'next/image';
import { DisplayModeContext } from '@/contexts/DisplayModeContext';
import Link from 'next/link';
import Avatar from '../Common/Avatar';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DisplayModeContext);
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
    const activeDisplayMode = isDarkMode ? 'Night' : 'Day';
    return (
        <div
            className={clsx([
                `h-[60px] flex justify-between items-center px-4 fixed top-0 bg-white w-full z-10`
            ])}
        >
            <div className={clsx([`w-fit flex items-center gap-x-2`])}>
                <div
                    className={clsx([
                        `rounded-full bg-blue-500 text-white flex items-center justify-center h-[40px] w-[40px]`
                    ])}
                >
                    <BrandLogo src='/cube.svg' height={20} width={20} alt='brand' />
                </div>
                <Link href='/' className='font-bold '>
                    Boxmind.
                </Link>
            </div>
            <div className='h-fit flex items-center gap-2'>
                <SearchBar />
                <div className='w-[2px] h-[25px] bg-[#f4f5f4] mx-3' />
                <CustomSwitch
                    modes={modes}
                    activeMode={activeDisplayMode}
                    setActiveMode={toggleDarkMode}
                />
                <div className='w-[2px] h-[25px] bg-[#f4f5f4] mx-3' />
                <Avatar image='/icons/person1.png' height={35} width={35} />
                <ChevronDownIcon className='h-4 w-4 text-gray-500' />
            </div>
        </div>
    );
};

export default Header;
