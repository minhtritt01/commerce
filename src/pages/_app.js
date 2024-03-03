import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { ToastContainer } from 'react-toastify'; //styles of nprogress
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import { SWRConfig } from 'swr';
import fetcher from '../util/fetch';
import { appWithTranslation } from 'next-i18next';
//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <SWRConfig
        value={{
          refreshInterval: 2000,
          fetcher,
        }}
      >
        <Provider store={store}>
          <div
            className='fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300'
            page_id='197681293439134'
          ></div>
          <Layout admin={Component?.admin} auth={Component?.auth}>
            <Component {...pageProps} />
            <ToastContainer limit={4} />
          </Layout>
        </Provider>
      </SWRConfig>
    </NextAuthProvider>
  );
}

export default appWithTranslation(MyApp);
