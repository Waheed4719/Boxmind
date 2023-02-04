import TrendingStories from '../components/Home/TrendingStories';
import FavouritesAndPopular from '../components/Home/FavouritesAndPopular';
import styles from './page.module.css';
import Header from '../components/Header';
import FavouriteAuthors from '@/components/Home/FavouriteAuthors';

const Home = () => {
    return (
        <main className={styles.container}>
            <Header />
            <div className={styles.home}>
                <TrendingStories />
                <div className='flex flex-col gap-4'>
                    <FavouriteAuthors />
                    <FavouritesAndPopular />
                </div>
            </div>
        </main>
    );
};

export default Home;
