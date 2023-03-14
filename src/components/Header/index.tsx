'use client';

import React, { useContext } from 'react';
import clsx from 'clsx';
import BrandLogo from '../../../public/icons/cube.svg';
import CustomSwitch from '../Common/CustomSwitch';
import SearchBar from './SearchBar';
import { DisplayModeContext } from '@/contexts/DisplayModeContext';
import Link from 'next/link';
import Avatar from '../Common/Avatar';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import MoonIcon from '../../../public/icons/MoonIcon';
import SunIcon from '../../../public/icons/SunIcon';
import { useWindowSize } from '@/hooks/useWindowSize';

const Header = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DisplayModeContext);
    const { width } = useWindowSize();
    const modes = [
        {
            displayText: 'Day',
            element: <SunIcon />
        },
        {
            displayText: 'Night',
            element: <MoonIcon />
        }
    ];
    const activeDisplayMode = isDarkMode ? 'Night' : 'Day';
    return (
        <div
            className={clsx([
                `h-[60px] flex justify-between items-center px-4 fixed top-0 bg-white dark:bg-[#18181e] w-full z-10`
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
                {width && width > 756 && (
                    <>
                        <SearchBar />
                        <div className='w-[2px] h-[25px] bg-[#f4f5f4] mx-3' />
                        <CustomSwitch
                            modes={modes}
                            activeMode={activeDisplayMode}
                            setActiveMode={toggleDarkMode}
                            switchClass={(isDarkMode && 'dark:bg-[#2f303a]') as string}
                            activeClass={(isDarkMode && 'dark:bg-[#ffffff33]') as string}
                        />
                        <div className='w-[2px] h-[25px] bg-[#f4f5f4] mx-3' />
                    </>
                )}

                <Avatar image='/icons/person1.png' height={35} width={35} />
                <ChevronDownIcon className='h-4 w-4 text-gray-500' />
            </div>
        </div>
    );
};

export default Header;
