import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default () => (
  <>
    <Head>
      <title>Ochrana ovcí pod Troskami | Ochrana Ovcí</title>
    </Head>
    <Navbar />
    <Header />
    <Section header="Ochrana ovcí pod Troskami">
      <p>
        Zdeněk Krejčí hospodaří v jižní části Chráněné krajinné oblasti Český
        Ráj, nedaleko známé zříceniny hradu Trosky. Ozval se nám v dubnu roku
        2018 s žádostí o pomoc při zabezpečení svého stáda asi 120 ovcí. Kromě
        toho chová také dvě desítky krav.
      </p>
      <p>
        Přestože Český rRáj stále nepatří do oblastí, kde vlci trvale žijí,
        jejich návrat je možné v horizontu dalších let očekávat – ukázal to i
        případ vlčice, která byla začátkem roku 2020 sražena nedaleko Turnova.
        Považujeme za důležité, aby k realizaci preventivních opatření docházelo
        ještě před příchodem vlků. „Už jsem zažil, když se dostane pes do stáda
        a měli jsme dvanáct ovcí potrhaných. V případě vlků se obávám daleko
        větších následků“ vysvětluje Zdeněk Krejčí, proč se rozhodl k lepšími
        zabezpečení svého hospodářství v předstihu. Značný čas zabere příprava a
        schvalovací proces projektu, také výchova pasteveckých psů trvá
        minimálně rok než pes dospěje a je schopný samostatné práce. Zdeňkovi
        Krejčímu zpracovalo Hnutí DUHA projekt do 110. výzvy Operačního programu
        životní prostředí, v rámci nějž byla preventivní opatření na ochranu
        stád podpořena z 80 %.
      </p>

      <p>
        Zdeněk Krejčí pase v mobilních lankových ohradnících. Místo klasických
        plastových tyček s malou trvanlivostí si nechává nařezat železné tyče
        (používané ve stavebnictví jako výztuhy do betonu), na které připevňuje
        plastové izolátory a lanka. Aby byl ohradník účinný před útoky vlků,
        nejnižší lanko by mělo být umístěno do 20 cm nad zemí a mezi ostatními
        lanky by neměly být mezery vyšší než 30 cm. Takové opatření zabrání
        tomu, aby vlk ohradník podhrabal nebo prolezl. Nejvyšší vodič, který
        tvoří signální, dobře viditelná páska je umístěn ve výšce zhruba 130 cm.
      </p>
      <p>
        Hlavním ochranným opatřením bylo však pořízení pasteveckých psů. Z
        důvodu turistických stezek vedoucích v blízkosti pastvin padla volba na
        pyrenejského horského psa, plemeno málo agresivní vůči lidem a dodnes
        využívané k ochraně stád především ve Španělsku a Francii. Protože
        pracovní psi se k ochraně stád před šelmami v České republice prakticky
        nevyužívají, přivezlo Hnutí DUHA chovateli osmitýdenní štěně přímo z
        pracovního chovu ve Španělsku, kde jeho rodiče stráží hospodářská
        zvířata po generace.
      </p>
      <p>
        Od března 2019 se Bétonica postupně socializovala nejprve s jehňaty,
        později i s dospělými ovcemi. Při slučování se stádem se neobjevily
        žádné významné problémy ani během prvního roku na farmě, ani letos při
        porodech jehňat. Druhého psa si Zdeněk Krejčí pořídil z chovu v České
        republice (pes se narodil mezi jehňaty a jeho rodiče žili mezi ovcemi).
        Za první rok přítomnosti obou psů na pastvinách nedošlo ani k žádným
        konfliktům při kontaktu s cizími lidmi, kteří se pohybovali v jejich
        blízkosti. Psi je buď ignorovali nebo turisty na svou přítomnost z
        povzdálí upozorňovali štěkotem.
      </p>
      <p>
        V rámci projektu byly dále pořízeny síťové ohradníky a ovčí plotové díly
        pro stavbu nezastřešeného košáru a pro oddělování stáda, což je
        praktické v raných fázích výchovy pasteveckých psů. Navíc byly vytvořeny
        cedulky, které budou upozorňovat procházející turisty na přítomnost
        pasteveckých psů. Oba psi jsou také sledovaní GPS obojky, což je
        praktické při kontrole práce psa v odlehlých lokalitách. Ostrý test
        fungování se stádem mají před sebou oba ochránci v této sezóně.
      </p>
      <p>
        Zdeněk Krejčí k provedeným opatřením dodává: „Za nejdůležitější považuji
        dovézt psa ze zahraničí z nepřerušené pracovní linie a dobře se
        připravit na příchod. Od té chvíle je to improvizace. Spolupráce s
        Hnutím DUHA byla výborná. Bohužel administrace dotace byla velmi
        komplikovaná.”{" "}
        <p>
          <i>Miroslav Kutal</i>
        </p>
      </p>

      <Gallery
        images={[
          "/static/images/T1.jpg",
          "/static/images/T2.jpg",
          "/static/images/T3.jpg",
          "/static/images/T4.jpg",
          "/static/images/T5.jpg"
        ]}
      />
    </Section>
    <Footer />
  </>
);
