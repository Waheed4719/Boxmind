'use client';

import Image from 'next/image';

type AvatarProps = {
    height?: number;
    width?: number;
    image?: string;
    badge?: string | number;
};

const Avatar = ({ height = 70, width = 70, image, badge }: AvatarProps) => {
    return (
        <div className={`h-[${height}px] w-[${width}px] relative`}>
            <div
                className={`bg-gray-300 rounded-full h-[${height}px] w-[${width}px] relative flex-shrink-0  overflow-hidden`}
            >
                {image && (
                    <Image
                        src={image}
                        height={height}
                        width={width}
                        alt='Avatar'
                        style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                    />
                )}
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
