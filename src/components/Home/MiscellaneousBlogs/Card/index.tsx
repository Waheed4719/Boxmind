import { Post } from '@/types';
import Image from 'next/image';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import Avatar from '@/components/Common/Avatar';

type CardProps = {
    post: Omit<Post, 'description'>;
};

const Card = ({ post }: CardProps) => {
    return (
        <div className='flex gap-4 items-center'>
            <div className='h-[100px] w-[100px] relative'>
                <Image
                    fill
                    src={post.featuredImage}
                    style={{ objectFit: 'cover' }}
                    alt='featured'
                />
            </div>
            <div className='flex flex-col gap-2 flex-1 h-full'>
                <div className='flex flex-col'>
                    <h3 className='font-semibold text-[#b2b9ca] text-sm uppercase'>
                        {post.category}
                    </h3>
                    <h3 className='font-bold text-[#657297]'>{post.title}</h3>
                </div>

                <div className='flex justify-between mt-auto'>
                    <div className='flex gap-2 items-center'>
                        <Avatar height={25} width={25} shadow image={post.avatar} />
                        <h3 className='text-gray-500 font-bold text-sm'>{post.author}</h3>
                    </div>

                    <div className='flex gap-2'>
                        <EllipsisHorizontalIcon className='h-6 w-6 text-[#657297] cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
