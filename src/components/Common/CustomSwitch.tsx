'use client';

import React from 'react';

type Mode = { displayText: string; element: string | JSX.Element };
type CustomSwitchProps = {
    modes: Mode[];
    activeMode: string | boolean;
    setActiveMode: (mode: string) => void;
};

const activeSwitchClassNames = 'bg-white text-[#909ab4] rounded-full';
const inActiveSwitchClassNames = 'text-[#c0c6d4]';
const commonSwitchClassNames =
    'font-semibold px-3 flex items-center cursor-pointer ease-in-out duration-300';

const CustomSwitch = ({ modes, activeMode, setActiveMode }: CustomSwitchProps) => {
    const generateClassName = (mode?: Mode) => {
        if (
            (typeof activeMode === 'string' &&
                mode &&
                activeMode.toString() === mode.displayText) ||
            (typeof activeMode === 'boolean' && activeMode)
        ) {
            return activeSwitchClassNames;
        }
        return inActiveSwitchClassNames;
    };
    return (
        <div className='rounded-full bg-[#f3f4f7] w-fit py-1 px-2 h-[40px] text-white flex '>
            {modes.map((mode) => (
                <div
                    key={mode.displayText}
                    role='presentation'
                    onClick={() => setActiveMode(mode.displayText)}
                    onKeyDown={() => setActiveMode(mode.displayText)}
                    className={`${generateClassName(mode)} ${commonSwitchClassNames}`}
                >
                    {mode.element}
                </div>
            ))}
        </div>
    );
};

export default CustomSwitch;
