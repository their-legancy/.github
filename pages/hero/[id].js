import { useState, useEffect } from 'react';
import axios from 'axios';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function PostPage({ frontmatter, watchCount }) {
  const [count, setCount] = useState(watchCount + 1); // set initial value of count to watchCount + 1
  useEffect(() => {
    async function updateWatchCount() {
      try {
        const res = await axios.put(process.env.BACKEND_API+`api/hero/${frontmatter._id}`, {
          watchCount: count // update watch count with current value of count
        });
        setCount(res.data.watched);
      } catch (err) {
        console.log(err);
      }
    }

    updateWatchCount();
  }, []);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Head>
        <title>{frontmatter.name}  | Their Legency</title>
      </Head>

      <div className="blog px-8 py-8 bg-[#3e8193]">
        <div className="blog-inner mx-auto">
          <img src="/bird.png" width={100} height={100} className='absolute bird' />
          <div className='mb-4'>
            <Link href={`/`}>
              <a className='flex flex-row aligns-center'>
                <Image src="/back-arrow.png" width={25} height={19} alt="back-arrow" /><span className='ml-3'>ရှေ့သို့ ပြန်သွားရန်</span>
              </a>
            </Link>
          </div>
          <div className="blog-details relative">
            <div className="flex flex-row items-center">
              <div className="text-center relative">
                <Image width={300} height={300} className="mb-5 rounded-2xl" src={frontmatter.imageUrl} alt={frontmatter.name} />
              </div>
            </div>
            <div className="flex flex-row"><h1 className="ml-3 text-bold">{frontmatter.name}</h1></div>
            {(typeof (frontmatter.age) !== 'undefined') ?
              <div className="flex flex-row"><h2 className="ml-3 text-bold">{frontmatter.age}</h2></div>
              : ""}


            {(typeof (frontmatter.the_day_of_the_fall) !== 'undefined') ?
              <div className="flex flex-row"><label className=''>ကျဆုံးသောနေ့ </label><div className="ml-3">{frontmatter.the_day_of_the_fall}</div></div>
              : ""}
            {(typeof (frontmatter.the_place_of_the_fall) !== 'undefined') ?
              <div className="flex flex-row"><label className=''>ကျဆုံးသောနေရာ </label><div className="ml-3">{frontmatter.the_place_of_the_fall}</div></div>
              : ""}
            {(typeof (frontmatter.organization) !== 'undefined') ?
              <div className="flex flex-row"><label className=''>အဖွဲ့အစည်း </label><div className="ml-3">{frontmatter.organization}</div></div>
              : ""}
            {(typeof (frontmatter.address) !== 'undefined') ?
              <div className="flex flex-row"><label className=''>နေရပ်လိပ်စာ </label><div className="ml-3">{frontmatter.address}</div></div>
              : ""}
            {(typeof (frontmatter.what_was_said) !== 'undefined') ?

              <div className="flex flex-row"><label className=''>ပြောခဲ့သောစကား </label><div className="ml-3">{frontmatter.what_was_said}</div></div>
              : ""}
          </div>
          <div className="flex flex-row items-center">
              <div className='flex flex-row items-center mr-6'>
               <span className='ml-2'>{count}</span>
              </div>
              <button onClick={handleCount} className="bg-white font-bold text-black py-2 px-4 rounded-full">Watched</button>
            </div>

        </div>

      </div>
    </>
  )
}

async function getAllPostIds() {
  try {
    const res = await axios.get(process.env.BACKEND_API+'api/hero');
    const posts = res.data;
    return posts.map(post => ({ params: { id: post._id.toString() } }));
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false
  };
}


export async function getStaticProps({ params }) {
  const { id } = params;

  const res = await axios.get(
    process.env.BACKEND_API+'api/hero/' + id
  );

  const watchCount = res.data.watched ;
  return {
    props: {
      frontmatter: res.data,
      watchCount: watchCount || 0,

    }
  };
} 