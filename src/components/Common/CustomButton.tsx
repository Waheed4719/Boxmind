import React from 'react';

type CustomButtonProps = { className?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton = ({ children, className, ...rest }: CustomButtonProps) => {
    return (
        <button
            type='button'
            className={`bg-blue-500 text-white rounded-full h-[40px] w-[100px] px-6 ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default CustomButton;
