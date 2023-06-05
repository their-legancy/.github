import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import { slugify, ImageUrl } from '../../utils'
import { NextSeo } from 'next-seo';
import Image from 'next/image';

export default function PostPage({ content, frontmatter }) {
  const date = new Date(frontmatter.date)
  const imageMeta = frontmatter.images.map(
    image => {
      const imageUrl = ImageUrl(image)
      return {
        url: imageUrl,
        width: 1224,
        height: 724,
        alt: frontmatter.title,
        type: 'image/jpeg',
      }
    }
  )


  return (

    <div className="blog px-8 py-8 bg-[#3e8193]">
      <div className="blog-inner mx-auto">
        <img src="/bird.png" width={100} height={100} className='absolute bird' />
        <div className='mb-4'>
          <Link href={`/`}>
            <a className='flex flex-row aligns-center'><Image src="/back-arrow.png" width={25} height={19} /><span className='ml-3'>ရှေ့သို့ ပြန်သွားရန်</span></a>
          </Link>
        </div>
        <div className="blog-details relative">
          <div className="flex flex-row items-center">
            <div className="text-center">
              <Image width={300} height={300} className="mb-5" src={ImageUrl(frontmatter.image)} alt={frontmatter.name} />
            </div>
          </div>
          <div className="flex flex-row"><h2 className="ml-3 text-bold">{frontmatter.name}</h2></div>
          {(typeof (frontmatter.age) !== 'undefined') ?
            <div className="flex flex-row"><h2 className="ml-3 text-bold">{frontmatter.age}</h2></div>
          : ""}



          <div className="flex flex-row"><label className=''>ပြောခဲ့သောစကား -</label><div className="ml-3">{frontmatter.what_was_said}</div></div>
          <div className="flex flex-row"><label className=''>အဖွဲ့အစည်း -</label><div className="ml-3">{frontmatter.organization}</div></div>
          <div className="flex flex-row"><label className=''>နေရပ်လိပ်စာ -</label><div className="ml-3">{frontmatter.address}</div></div>
          <div className="flex flex-row"><label className=''>ကျဆုံးသောနေ့ -</label><div className="ml-3">{frontmatter.the_day_of_the_fall}</div></div>
          <div className="flex flex-row"><label className=''>ကျဆုံးသောနေရာ -</label><div className="ml-3">{frontmatter.the_place_of_the_fall}</div></div>

        </div>


      </div>

    </div>

  )
}


export async function getStaticPaths() {
  //  Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'));
  console.log(files);
  // Get slug and frontmatter from posts
  const temppaths = files.map((filename) => {

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    if (frontmatter.draft === false) {
      return {
        params: {
          slug: filename.replace('.md', ''),
        },
      }
    } else {
      return null
    }


  })
  //   remove null in tempPosts 
  const paths = temppaths.filter(
    path => {
      return path && path
    }
  )

  return {
    paths,
    fallback: false,
  }

}


export async function getStaticProps({ params: { slug } }) {

  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}