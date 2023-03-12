'use client';

import TrendingStories from '../components/Home/TrendingStories';
import FavouritesAndPopular from '../components/Home/FavouritesAndPopular';
import styles from '../styles/home.module.css';
import FavouriteAuthors from '@/components/Home/FavouriteAuthors';
import MiscellaneousBlogs from '@/components/Home/MiscellaneousBlogs';
import Layout from '@/components/Layout';
import { ReactNode } from 'react';

const Home = () => {
    const isAuthenticated = true;
    return (
        <div className={`${styles.home} ${isAuthenticated && 'pl-[70px]'} bg-white dark:bg-[#000]`}>
            <TrendingStories />
            <div className='flex flex-col gap-4'>
                <FavouriteAuthors />
                <FavouritesAndPopular />
            </div>
            <MiscellaneousBlogs />
        </div>
    );
};

export default Home;

Home.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;
