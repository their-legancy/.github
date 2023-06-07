import Searchbar from "./Searchbar";
import Image from "next/image";
export default function Banner() {
    return (
        <section className="banner relative">
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <Image
                    alt='banner'
                    src='/banner-1.webp'
                    layout='fill'
                    objectFit='cover'
                    priority
                />
            </div>
            <div className="px-4 mx-auto max-w-screen-xl move-center">
                <h1 className="mb-4 text-white text-center">ဤနေရာသည် ကြွေလွင့်သွားသောသူရဲကောင်းများကိုဂုဏ်ယူစွာဖြင့်မှတ်တမ်းတင်ထားသောနေရာဖြစ်ပါသည်။<br />
                    သူရဲကောင်းမောင်နှမများအားလွမ်းဆွတ်တမ်းတသတိတရရှိသူများဝင်ရောက်ရှာဖွေဂုဏ်ယူနိုင်သောနေရာလေးဖြစ်စေရန်ရည်ရွယ်ပါသည်။</h1>

                <Searchbar />


            </div>

        </section>
    )
}