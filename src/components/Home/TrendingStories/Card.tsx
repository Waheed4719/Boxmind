import styles from './trending_stories.module.css';
import clsx from 'clsx';
import Avatar from '@/components/Common/Avatar';
import { Post } from '@/types';
import { useContext } from 'react';
import { DisplayModeContext } from '@/contexts/DisplayModeContext';

type CardProps = {
    post: Post;
    index: number;
};
const array = [0, 3, 4];

const Card = ({ post, index }: CardProps) => {
    const { isDarkMode } = useContext(DisplayModeContext);
    return (
        <div
            className={clsx([
                // eslint-disable-next-line no-nested-ternary
                !array.includes(index)
                    ? isDarkMode
                        ? styles.darkGradient
                        : styles.gradient
                    : 'bg-[#5e80d8] dark:bg-[#3a4c5a]',
                styles.trendingStoriesCard,
                'p-8 flex flex-col justify-start gap-2 sh'
            ])}
        >
            <h5 className='text-gray-300 text-sm font-medium uppercase'>{post.category}</h5>
            <h3 className='text-white text-md font-semibold cursor-pointer'>
                {post.title.substring(0, 50)}...
            </h3>

            <div className='items-center flex gap-2 mt-2'>
                <Avatar shadow height={35} width={35} image={post.avatar} />
                <span className='text-white font-medium text-sm'>{post.author}</span>
            </div>
        </div>
    );
};

export default Card;
