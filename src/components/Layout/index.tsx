'use client';

import React, { useState } from 'react';
import TrendingStories from '@/components/Home/TrendingStories';
import FavouritesAndPopular from '@/components/Home/FavouritesAndPopular';
import styles from '../../styles/home.module.css';
import Header from '../Header';
import FavouriteAuthors from '@/components/Home/FavouriteAuthors';
import Sidebar from '../Sidebar';

const Layout = () => {
    const [isAuthenticated, setisAuthenticated] = useState(true);
    return (
        <main className={`${styles.container}`}>
            <Header />
            <div className={`${styles.home}  ${isAuthenticated && 'pl-[70px]'}`}>
                <Sidebar />
                <TrendingStories />
                <div className='flex flex-col gap-4'>
                    <FavouriteAuthors />
                    <FavouritesAndPopular />
                </div>
            </div>
        </main>
    );
};

export default Layout;
