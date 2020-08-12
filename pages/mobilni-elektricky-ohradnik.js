import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Article from "../components/Article";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default () => (
  <>
    <Head>
      <title>MOBILNÍ ELEKTRICKÝ OHRADNÍK | Ochrana Ovcí</title>
    </Head>
    <Navbar />
    <Header />
    <Section header="MOBILNÍ ELEKTRICKÝ OHRADNÍK">
      <Article>
        <p>
          Elektrický ohradník je jedním z nejoblíbenějších a nejúčinnějších
          ochranných opatření proti velkým šelmám.
        </p>
      </Article>
      <Article header="Použití">
        <p>
          Lankový nebo síťový elektrický ohradník mají univerzální použití.
          Logicky jsou vhodné především tam, kde se místo pastvy během roku mění
          nebo je třeba v zájmu ochrany přírody zachovat průchodnou krajinu mimo
          období pastvy. Údržba vegetace v okolí ohradníků je snazší, protože je
          možné ohradníky snadno posunout nebo nadzvednout lanka. Síťové
          ohradníky je vhodnější instalovat v málo členitých terénech, ale mohou
          být méně stabilní na návětrných svazích a mají větší délku drátů, tedy
          i vyšší odběr ve srovnání s lankovým ohradníkem. Lankové elektrické
          ohradníky mají oproti síťovým výhodu, že zvířata s rohy se do něj
          nezamotají.
        </p>
      </Article>
      <Article header="Účinnost">
        <p>
          Správně instalovaný a udržovaný elektrický ohradník o minimální výšce
          120 cm je jedním z nejúčinnějších ochranných opatření proti šelmám.
          Samotný ohradník představuje fyzickou překážku a elektrický šok je pro
          zvíře, které se plotu dotkne, nepříjemný. U lankových ohradníků je
          třeba, aby nejnižší drát byl v minimální výšce 20-25 cm nad zemí, aby
          šelmám zabránil podlezení. Jednou ze slabin ohradníku je, že zvířata
          vyplašená vlky ho mohou sama protrhnout. Nejzásadnější je proto
          ponechat zvířatům dostatek místa, aby se cítila v bezpečí před šelmami
          zvenčí. Účinnost může být zvýšena přítomností pasteveckého psa uvnitř
          ohrady.
        </p>
      </Article>
      <Article header="Cena">
        <p>
          Elektrický ohradník vyžaduje středně vysokou vstupní investici; je
          třeba obstarat sítě nebo lanka se sloupky, zdroj impulzů a zkoušečku
          napětí. V lokalitách, kde není přístup elektřiny, je nutné používat
          akumulátory, případně dobíjení s malými solárními panely, což zvyšuje
          vstupní investici. Poměrná cena je tím nižší, čím větší je velikost
          ohrazeného prostoru. Pokud je ohradník stále pod napětím, fyzický
          kontakt se zvířaty (ať už s hospodářskými nebo divokými) je minimální
          a lankový ohradník z plastových lanek má dlouhou životnost. Cena
          pochopitelně závisí na typu a kvalitě použitých sloupků, výkonu zdroje
          a přítomnosti akumulátoru či solárního panelu.
        </p>
      </Article>
      <Article header="Požadavky a doporučení při instalaci">
        <h4>Lankový ohradník</h4>
        <ul>
          <li>alespoň 5 vodičů</li>
          <li>výška ohradníku 120-150 cm</li>
          <li>nejnižší vodič 20-25 cm nad zemí</li>
          <li>vzdálenost mezi vodiči 20-30 cm</li>
          <li>
            doporučujeme instalovat horní signální pásku bílé barvy alespoň 2 cm
            širokou. Tato páska nemusí být nutně pod napětím, ale zvyšuje
            viditelnost pro predátory a další divoce žijící zvířata.
          </li>
        </ul>
        <h4>Síťový ohradník</h4>
        <ul>
          <li>
            120 cm výšky nebo 90 cm s přídavnou vodivou páskou ve výšce 120 cm
          </li>
          <li>
            síťový ohradník musí být dostatečně napnutý, aby v kontaktu se zemí
            nebo vegetací nebyl druhý nejnižší vodorovný vodič, který je pod
            napětím. V členitém terénu je použití síťových ohradníků
            komplikovanější při lomu terénu.
          </li>
        </ul>
        <h4>Všechny typy</h4>
        <ul>
          <li>napětí alespoň 4500 V</li>
          <li>
            ospodářská zvířata by měla mít uvnitř ohradníku dostatek bezpečného
            prostoru (minimálně 2000 metrů čtverečních), aby se v případě pohybu
            šelem v blízkosti ohradníku nevyplašila a ohradník v panice
            neprotrhla
          </li>
          <li>
            pro funkčnost opatření je zásadní, aby ohradník byl stále pod
            napětím. Je potřeba pravidelně kontrolovat, zda se vodiče nedotýkají
            vegetace a ohradník tak není uzemněný. Lze využít zkoušečky, signálního světla (signálních světel) či SMS hlásiče.
          </li>
          <li>
            Během suchých období na písčitých půdách může být problém v tom, že
            zvířata, která se dotýkají sítí/lanek nejsou uzemněná, a tudíž jimi
            neprojde elektrický výboj. Řešením je v ohradníku střídat vodiče ze
            zdroje (+) s vodiči napojenými na dobře uzemněnou zemnící tyč (-). K
            výboji pak dojde, když se zvíře dotkne obou vodičů současně.
          </li>
        </ul>
      </Article>
      <Gallery
        images={[
          "/static/images/MO1.jpg",
          "/static/images/MO2.jpg",
          "/static/images/MO3.jpg"
        ]}
      />
    </Section>
    <Footer />
  </>
);
