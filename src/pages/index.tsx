'use client';

import TrendingStories from '../components/Home/TrendingStories';
import FavouritesAndPopular from '../components/Home/FavouritesAndPopular';
import styles from '../styles/home.module.css';
import Header from '../components/Header';
import FavouriteAuthors from '@/components/Home/FavouriteAuthors';
import Layout from '@/components/Layout';

const Home = () => {
    return (
        <main className=''>
            {/* <Header />
            <div className={`${styles.home} max-w-[1920px] mx-auto`}>
                <TrendingStories />
                <div className='flex flex-col gap-4'>
                    <FavouriteAuthors />
                    <FavouritesAndPopular />
                </div>
            </div> */}
            <Layout />
        </main>
    );
};

export default Home;
