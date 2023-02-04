import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { DisplayModeProvider } from '@/contexts/DisplayModeContext';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <DisplayModeProvider>
            <Component {...pageProps} />
        </DisplayModeProvider>
    );
};
export default App;
