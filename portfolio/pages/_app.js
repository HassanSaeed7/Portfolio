import Nav from '../components/Nav';
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import { AnimatePresence } from "framer-motion"
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
  <Nav />
 <Layout>
<AnimatePresence exitBeforeEnter initial={false}>
   <Component {...pageProps} key={router.route} /> 
</AnimatePresence>
</Layout>
<Footer />
  </>
  )
}

export default MyApp
