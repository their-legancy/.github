import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='my'>
      <Head>
        <title>Their Legency</title>
        <meta property="og:title" content="Their Legency" key="title" />
        <meta
          name="description"
          content="ဤနေရာသည် ကြွေလွင့်သွားသော သူရဲကောင်းများကို ဂုဏ်ယူစွာဖြင့် မှတ်တမ်းတင်ထားသောနေရာ ဖြစ်ပါသည်။
          သူရဲကောင်းမောင်နှမများအား လွမ်းဆွတ်တမ်းတ သတိတရရှိသူများ ဝင်ရောက်ရှာဖွေ ဂုဏ်ယူနိုင်သောနေရာလေး ဖြစ်စေရန် ရည်ရွယ်ပါသည်။"
          key="desc"
        />
        <link rel="preload" href="banner-1.png" as="image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}