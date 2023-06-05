import Searchbar from "./Searchbar";

export default function Banner() {
    return (
        <section className="banner relative bg-center bg-no-repeat bg-[url('/banner-1.png')]">
            <div className="px-4 mx-auto max-w-screen-xl">
                <h1 className="mb-4 text-white text-center">ဤနေရာသည် ကြွေလွင့်သွားသောသူရဲကောင်းများကိုဂုဏ်ယူစွာဖြင့်မှတ်တမ်းတင်ထားသောနေရာဖြစ်ပါသည်။<br />
                    သူရဲကောင်းမောင်နှမများအားလွမ်းဆွတ်တမ်းတသတိတရရှိသူများဝင်ရောက်ရှာဖွေဂုဏ်ယူနိုင်သောနေရာလေးဖြစ်စေရန်ရည်ရွယ်ပါသည်။</h1>
               


                    <div className="flex flex-col move-center mt-4">

                        <Searchbar />
                    </div>
                
            </div>

        </section>
    )
}