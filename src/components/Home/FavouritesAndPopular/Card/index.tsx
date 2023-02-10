import Image from 'next/image';
import { BookmarkIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import Avatar from '@/components/Common/Avatar';

type CardProps = {
    title?: string;
    post?: any;
};

const Card = ({ title, post }: CardProps) => {
    return (
        <div className='flex flex-col w-[500px] max-w-full'>
            <Image
                src='/images/komodo.jpg'
                width={800}
                height={240}
                style={{ objectFit: 'cover', maxHeight: 280 }}
                className='mb-2'
                alt='featured'
            />
            <h3 className='font-semibold text-[#b2b9ca] text-sm'>NATURE</h3>
            <h3 className='font-bold text-[#657297]'>
                Everything you need to know about Chameleons
            </h3>
            <p className='text-[#c3c8d6] text-sm mb-2'>
                Ad qui veniam eiusmod esse id eu ad aute do amet ut. Aliquip sit ullamco amet
                eiusmod consectetur velit deserunt voluptate pariatur incididunt id.{' '}
            </p>

            <div className='flex justify-between mt-auto'>
                <div className='flex gap-2 items-center'>
                    <Avatar height={35} width={35} shadow image='/icons/person1.png' />
                    <h3 className='text-gray-500 font-bold text-sm'>Liam Neeson</h3>
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
