import Link from 'next/link'
import { slugify } from '../utils'

export default function Post({ post }) {

  const date = new Date(post.frontmatter?.date)
  return (
    <div class="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
      <div class="flex-row items-center justify-between">
        <a href={`/blog/${post.slug}`} >
          <img className="card-img-top" src={post.frontmatter.image} alt="..." />
        </a>

        <span class="text-gray-400 text-sm">{`${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`}</span>

        <span class="text-emerald-400">{
          post.frontmatter.tags.map(
            tag => {

              const slug = slugify(tag)

              return (<Link key={tag} href={`/tag/${slug}`}>
                <a className='btn'>
                  <h6 className=' post-title'>#{tag}</h6>
                </a>
              </Link>)
            }
          )
        } </span>
        <h2 className="card-title">{post.frontmatter.title}</h2>
        <p className="card-text">{post.frontmatter.summary}</p>
        <Link href={`/blog/${post.slug}`}>
          <a className='btn'>Read More</a>
        </Link>
      </div>
    </div>
  )
}