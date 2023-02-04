'use client';

import React, { useState } from 'react';
import TrendingStories from '@/components/Home/TrendingStories';
import FavouritesAndPopular from '@/components/Home/FavouritesAndPopular';
import styles from './page.module.css';
import Header from '../Header';
import FavouriteAuthors from '@/components/Home/FavouriteAuthors';

const Layout = () => {
    const [isAuthenticated, setisAuthenticated] = useState(true);
    return (
        <main className={`${styles.container}`}>
            <Header />
            <div className={`${styles.home}  ${isAuthenticated && 'pl-[80px]'}`}>
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
