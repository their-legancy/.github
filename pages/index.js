import axios from 'axios';

// import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from '../components/Post';
import Banner from "../components/Banner";
// import search from "../search.json";
import Head from 'next/head';
import { sortByDate, slugify, ImageUrl } from '../utils';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

export const getStaticProps = async () => {

  const res = await axios.get(
    // process.env.BACKEND_API+'api/hero'
    process.env.BACKEND_API+'api/hero'
  );

  return {
    props: {
      searchPost: res.data,
    },
  };

};
export default function Home({ searchPost }) {

  const { query } = useRouter()
  const TempPosts = []

  searchPost.map(
    (post) => {

      // if (post.draft === false) {
      if (post.name.toLowerCase().includes(query.q)) {
        TempPosts.push(post)
      } else {
        TempPosts.push(null)
      }
      // }
    }
  )


  // remove null in posts 
  const posts = TempPosts.filter(
    path => {
      return path && path
    }
  )


  return (
    <>
      <Head>
        <title>Home | Their Legency</title>
      </Head>
      <Banner />

      <section id="search-result" className="w-full font-medium px-6 py-6">
        <div className="search-result-inner flex flex-wrap items-self-start justify-center">


          {
            posts.length > 0 ?
              posts.map((post, index) => (
                <Post key={index} post={post} />
              )) : <div className='m-auto p-5 mx-5 '>
                <h2 className='text-center text-white'>
                  {query.q ? `${query.q} အမည်ဖြင့် အချက်အလက်မရှိပါ။  ` : 'ကျေးဇူးပြု၍ အထက်ပါအကွက်တွင် ရှာဖွေပါ၊ ရလဒ်သည် ဤနေရာတွင် ပြပါမည်။'}
                </h2>
              </div>
          }
        </div>

      </section>

    </>


  )
}



