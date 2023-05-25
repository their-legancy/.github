import "../styles/globals.css";
import Head from "next/head";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';


function MyApp({ Component, pageProps }) {
  return ( <>
   
    <DefaultSeo {...SEO} />
    {/* <Header/> */}
    <Component {...pageProps} />
    {/* <Footer /> */}
  </>)
}

export default MyApp
