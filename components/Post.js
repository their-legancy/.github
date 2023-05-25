import Link from 'next/link'
import { slugify } from '../utils'

export default function Post({ post }) {

  const date = new Date(post.frontmatter?.date)
  return (
    <div class="w-70 mx-auto bg-[#e2e2e2] rounded-2xl px-6 py-6 shadow-lg">
      <div class="flex-row items-center justify-between">
        <a href={`/blog/${post.slug}`} >
          <img className="card-img-top w-full rounded-2xl mb-3" src={post.frontmatter.image} alt="..." />
        </a>

        {/* <span class="text-gray-400 text-sm">{`${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`}</span> */}

        {/* <span class="text-emerald-400">{
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
        } </span> */}
        <div className="flex flex-row"><label className='text-gray-400'>အမည် -</label><h2 className="ml-3 text-bold">{post.frontmatter.name}</h2></div>
        <div className="flex flex-row"><label className='text-gray-400'>ပြောခဲ့သောစကား -</label><div class="ml-3">{post.frontmatter.what_was_said}</div></div>
        <div className="flex flex-row"><label className='text-gray-400'>အဖွဲ့အစည်း -</label><div class="ml-3">{post.frontmatter.organization}</div></div>
        {/* <div className="flex flex-row"><label className='text-gray-400'>နေရပ်လိပ်စာ -</label><div class="ml-3">{post.frontmatter.address}</div></div>
        <div className="flex flex-row"><label className='text-gray-400'>ကျဆုံးသောနေ့ -</label><div class="ml-3">{post.frontmatter.the_day_of_the_fall}</div></div>
        <div className="flex flex-row"><label className='text-gray-400'>ကျဆုံးသောနေရာ -</label><div class="ml-3">{post.frontmatter.the_place_of_the_fall}</div></div> */}
        <div className="flex flex-col mt-3">
          <Link href={`/blog/${post.slug}`}>
            <a className='align-self-flex-end'>
              <button type="button" class="text-[#000] border border-[#000] hover:bg-[#000] hover:text-white focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Icon description</span>
              </button>
            </a>
          </Link>
        </div>

      </div>
    </div>
  )
}