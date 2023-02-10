'use client';

import Image from 'next/image';

type AvatarProps = {
    height?: number;
    width?: number;
    image?: string;
    badge?: string | number;
    shadow?: boolean;
};

const Avatar = ({ height = 60, width = 60, image, badge, shadow }: AvatarProps) => {
    return (
        <div className={`h-[${height}px] w-[${width}px] relative`}>
            <div
                className={`bg-gray-300 rounded-full h-[${height}px] w-[${width}px] relative flex-shrink-0  overflow-hidden ${
                    shadow ? 'drop-shadow-xl' : ''
                } }`}
                style={{ minWidth: width, maxWidth: width, minHeight: height, maxHeight: height }}
            >
                {image && <Image src={image} alt='Avatar' fill style={{ objectFit: 'cover' }} />}
            </div>
            {badge && (
                <div className='absolute top-[-5px] right-[10px] border-solid border-2 border-white bg-red-500 text-xs text-white h-[20px] w-[20px] flex items-center justify-center rounded-full'>
                    {badge}
                </div>
            )}
        </div>
    );
};

export default Avatar;
