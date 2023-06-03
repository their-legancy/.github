import Searchbar from "./Searchbar";
import Image from 'next/image';

export default function Banner() {
    return (
        <section className="banner bg-center bg-no-repeat bg-[url('/banner-1.png')]">
            {/* <Image
                src="/banner-1.png"
                alt="banner-1"
                className="w-full"
                width={3000}
                height={1500}
                priority
            /> */}
            <div className="flex flex-col move-center">
                <Searchbar />
            </div>
        </section>
    )
}