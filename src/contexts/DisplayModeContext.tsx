'use client';

import { createContext, useCallback, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

type DisplayModeContextState = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};

type DisplayModeProviderProps = {
    children: React.ReactNode;
};
export const DisplayModeContext = createContext<DisplayModeContextState>({
    isDarkMode: false,
    toggleDarkMode: () => {}
});

let htmlDocument: HTMLHtmlElement;

export const DisplayModeProvider = ({ children }: DisplayModeProviderProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        if (typeof window === 'object') {
            // eslint-disable-next-line prefer-destructuring
            htmlDocument = document.getElementsByTagName('html')[0];
        }
    }, []);

    const toggleDisplayModeClass = useCallback(
        (displayMode: boolean): void => {
            if (!displayMode) {
                htmlDocument.classList.remove('dark');
                setTheme('light');
            } else {
                htmlDocument.classList.add('dark');
                setTheme('dark');
            }
            localStorage.setItem('isDarkMode', displayMode.toString());
        },
        [isDarkMode, theme]
    );

    useEffect(() => {
        if (htmlDocument) {
            if (localStorage.getItem('isDarkMode') === 'true') {
                setIsDarkMode(true);
                toggleDisplayModeClass(true);
            } else if (localStorage.getItem('isDarkMode') === 'false') {
                setIsDarkMode(false);
                toggleDisplayModeClass(false);
            } else {
                toggleDisplayModeClass(isDarkMode);
            }
        }
    }, []);

    const toggleDarkMode = useCallback(() => {
        setIsDarkMode((prevDisplayMode) => {
            toggleDisplayModeClass(!prevDisplayMode);
            return !prevDisplayMode;
        });
    }, [isDarkMode, theme]);

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <DisplayModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DisplayModeContext.Provider>
    );
};
