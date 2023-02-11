import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { DisplayModeProvider } from '@/contexts/DisplayModeContext';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(
        <DisplayModeProvider>
            <Component {...pageProps} />
        </DisplayModeProvider>
    );
};
export default App;
