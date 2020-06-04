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
      <title>PEVNÝ OHRADNÍK | Ochrana Ovcí</title>
    </Head>
    <Navbar />
    <Header />
    <Section header="PEVNÝ OHRADNÍK">
      <p>
        Pevné ohrady se běžně používají k vymezení pastvin, kde jsou zvířata po
        většinu pastevní sezóny.
      </p>
      <Article header="Použití">
        <p>
          Pevné ohrady se běžně používají k vymezení pastvin, kde jsou zvířata
          po většinu pastevní sezóny. Tyto ohrady však většinou nejsou postavené
          tak, aby stádo uchránily před útokem predátorů. Aby zvířata ohradou
          neprolezla, je nutné ohradu zajistit proti podhrabání:
        </p>
        <ul>
          <li>
            Z vnější strany ohrady instalovat vodič na (20 cm) předsazených
            izolátorech ve výšce 20-25 cm nad zemí.
          </li>
        </ul>
        <p>nebo</p>
        <li>
          Mechanicky zapustit drátěný plot min. 50 cm pod zem nebo před ohradu
          položit a pevně zakotvit pletivo navazující na plot v šířce min. 100
          cm před ohradníkem .
        </li>
        <p>
          Alternativou k mechanické ochraně proti podhrabání je využití
          pasteveckých psů v pevné ohradě.{" "}
        </p>
        <p>
          Minimální výška pevné elektrifikované ohrady by stejně jako u
          mobilních ohradníků měla být 120 cm, lze ji navýšit o přídavný drát až
          do výšky 150 cm. Samotná ohrada může mít různé podoby: uzlíkové nebo
          vysokopevnostní pletivo na akátových kůlech nebo vypnutné dráty o
          průměru 1,5-2,5 mm pod napětím s rozestupy 20-30 cm, s nejnižším
          vodičem 20 cm nad zemí.
        </p>
      </Article>
      <Article header="Účinnost">
        <p>
          Správně udržovaná pevná ohrada s elektrickými vodiči, bránící
          podhrabání, má podobnou účinnost jako mobilní elektrické ohradníky.
          Výhodou je, že zvířata vyplašená vlky pevnou ohradu zpravidla
          neprotrhnou. Je však třeba důsledně kontrolovat napětí v ohradníku a
          všímat si, zda jsou proti podhrabání chráněna i slabá místa na ohradě,
          tedy zejména brány.
        </p>
      </Article>
      <Article header="Cena">
        <p>
          Pevná ohrada je velkou vstupní investicí. Pokud však chovatel již
          pevnou ohradu má nebo ji plánuje postavit či obnovit kvůli vymezení
          pastviny pro hospodářská zvířata, nejsou přídavné prvky zajišťující
          ochranu proti vniknutí predátorů většinou významným navýšením - jde
          zejména o zvýšení počtu vodičů tak, aby ohrada splňovala minimální,
          výše popsané parametry. Náklady na následnou údržbu zahrnují zejména
          pravidelné podsekávání, aby nejnižší vodiče nezarůstaly trávou.
        </p>
      </Article>
      <Article header="Požadavky a doporučení při instalaci">
        <ul>
          <li>Alespoň 5 vodičů.</li>
          <li>Výška ohradníku 120-150 cm.</li>
          <li>Nejnižší vodič 20-25 cm nad zemí.</li>
          <li>Vzdálenost mezi vodiči 20-30 cm.</li>
          <li>Napětí alespoň 4500 V.</li>
          <li>
            Pro funkčnost opatření je zásadní, aby vodiče byly stále pod
            napětím. Je potřeba pravidelně kontrolovat, zda se vodiče nedotýkají
            vegetace a ohradník tak není uzemněný. Lze využít zkoušečky,
            signální světla či SMS hlásiče.
          </li>
          <li>
            Pokud nechcete nebo nemůžete ohradník pravidelně podsekávat, lze pod
            nejnižším lankem bránícím šelmám podhrabání instalovat fólií bránící
            prorůstání trávy.
          </li>
          <li>
            K podsekávání rozsáhlých ohrad je možné použít speciální sekačky na
            traktor, které zvládnou podsekat i nejnižší vodič a objet kůl.
          </li>
        </ul>
      </Article>
      <Gallery
        images={[
          "/static/images/PO1.jpg",
          "/static/images/PO2.jpg",
          "/static/images/PO3.jpg"
        ]}
      />
    </Section>
    <Footer />
  </>
);
