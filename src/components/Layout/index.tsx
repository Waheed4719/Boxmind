'use client';

import { useState, useEffect, ReactNode } from 'react';

import { DisplayModeProvider } from '@/contexts/DisplayModeContext';
import styles from '../../styles/home.module.css';
import Header from '../Header';
import Sidebar from '../Sidebar';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <DisplayModeProvider>
            <main className={`${styles.container} pt-[60px]`}>
                <Header />
                {/* <Sidebar /> */}
                <div className='max-w-[1920px] mx-auto'>{children}</div>
            </main>
        </DisplayModeProvider>
    );
};

export default Layout;
