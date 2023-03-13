import Image from 'next/image';
import { BookmarkIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import Avatar from '@/components/Common/Avatar';
import { Post } from '@/types';

type CardProps = {
    post: Post;
};

const Card = ({ post }: CardProps) => {
    return (
        <div className='flex flex-col gap-y-1 s max-w-full'>
            <div className='min-h-[240px] relative'>
                <Image
                    src={post.featuredImage}
                    fill
                    style={{ objectFit: 'cover', maxHeight: 280 }}
                    className='mb-2'
                    alt='featured'
                />
            </div>

            <h3 className='font-semibold text-[#b2b9ca] text-sm uppercase'>{post.category}</h3>
            <h3 className='font-bold text-[#657297]'>{post.title}</h3>
            <p className='text-gray-400  text-sm'>
                Ad qui veniam eiusmod esse id eu ad aute do amet ut. Aliquip sit ullamco amet
                eiusmod consectetur velit deserunt voluptate pariatur incididunt id.{' '}
            </p>

            <div className='flex justify-between mt-auto'>
                <div className='flex gap-2 items-center'>
                    <Avatar height={35} width={35} shadow image={post.avatar} />
                    <h3 className='text-gray-500 font-bold text-sm'>{post.author}</h3>
                </div>

                <div className='flex gap-2'>
                    <BookmarkIcon className='h-6 w-6 text-[#657297] cursor-pointer' />
                    <EllipsisHorizontalIcon className='h-6 w-6 text-[#657297] cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default Card;
