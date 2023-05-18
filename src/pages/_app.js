import Navbar from '@/components/Navbar'
import { store } from '../store/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  )
}
