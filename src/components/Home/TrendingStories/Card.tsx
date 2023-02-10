import styles from './trending_stories.module.css';
import clsx from 'clsx';
import Avatar from '@/components/Common/Avatar';

type CardProps = {
    data: { category: string; title: string; author: string };
};

const Card = ({ data }: CardProps) => {
    return (
        <div
            className={clsx([
                styles.gradient,
                styles.trendingStoriesCard,
                'p-8 flex flex-col justify-start gap-2 sh'
            ])}
        >
            <h5 className='text-gray-300 text-sm font-medium uppercase'>{data.category}</h5>
            <h3 className='text-white text-md font-semibold'>{data.title.substring(0, 50)}</h3>

            <div className='items-center flex gap-2 mt-2'>
                <Avatar shadow height={35} width={35} image='/icons/person1.png' />
                <span className='text-white font-medium text-sm'>{data.author}</span>
            </div>
        </div>
    );
};

export default Card;
