import Searchbar from "./Searchbar";
import Image from 'next/image';

export default function Banner() {
    return (
        <main className="bg-[#000000] relative flex flex-col items-center justify-between">
            <Image
                src="/banner-1.png"
                alt="banner-1"
                className="w-full"
                width={3000}
                height={1500}
                priority
            />
            <div className="flex flex-col move-center">
                <Searchbar />
            </div>
        </main>
    )
}