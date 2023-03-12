'use client';

import React from 'react';

type Mode = { displayText: string; element: string | JSX.Element };
type CustomSwitchProps = {
    modes: Mode[];
    activeMode: string | boolean;
    setActiveMode: (mode: string) => void;
    switchClass?: string;
    activeClass?: string;
    inActiveClass?: string;
};

const activeSwitchClassNames = 'bg-white text-[#909ab4] ';
const inActiveSwitchClassNames = 'text-[#c0c6d4]';
const commonSwitchClassNames =
    'font-semibold px-3 flex items-center cursor-pointer ease-in-out duration-300 rounded-full';

const CustomSwitch = ({
    modes,
    activeMode,
    setActiveMode,
    switchClass,
    activeClass,
    inActiveClass
}: CustomSwitchProps) => {
    const generateClassName = (mode?: Mode) => {
        if (
            (typeof activeMode === 'string' &&
                mode &&
                activeMode.toString() === mode.displayText) ||
            (typeof activeMode === 'boolean' && activeMode)
        ) {
            return `${activeSwitchClassNames} ${activeClass}`;
        }
        return `${inActiveSwitchClassNames} ${inActiveClass}`;
    };
    return (
        <div
            className={`rounded-full bg-[#f3f4f7] w-fit py-1 px-2 h-[40px] text-white flex ${switchClass} gap-1`}
        >
            {modes.map((mode) => (
                <button
                    key={mode.displayText}
                    type='button'
                    onClick={() => setActiveMode(mode.displayText)}
                    className={`${generateClassName(
                        mode
                    )} ${commonSwitchClassNames} hover:bg-white hover:dark:bg-[#3d3c3f]`}
                >
                    {mode.element}
                </button>
            ))}
        </div>
    );
};

export default CustomSwitch;
