import css from "./style.css"
import Image from 'next/image';
import SearchBar from './components/search';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">


      <Image
        src="/banner-1.png"
        alt="banner-1"
        className="w-full"
        width={2000}
        height={289}
        priority
      />



      <div className="relative flex place-items-center w-full flex items-center flex-col bg-[#5CB7CB]">
        <div className="relative flex flex-col move-top">
          <SearchBar />
          <Image
            src="/banner-2.png"
            alt="banner-2"
            className="dark:invert"
            width={1052}
            height={331}
            priority
          />
        </div>


      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          
        </a>

        
      </div>
    </main>
  )
}
