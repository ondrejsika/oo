import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Gallery from "../components/Gallery";

export default () => (
  <>
    <Navbar />
    <Section header="Lužické hory: Fenka kangala Máša už dva roky stráží sedmdesátihlavé ovčí stádo">
      <p>
        První důkazy o postupném pronikání vlků do severních Čech přinesly
        fotopasti v těsné blízkosti hranic na německé straně šluknovského
        výběžku v roce 2012. Od roku 2014 se první výhradně česká smečka trvale
        usadila v oblasti Ralska nedaleko Doks. Škody na domácích zvířatech se
        častěji v širším okolí začaly objevovat v dalších letech, například v
        roce 2016 vlci zaútočili na stádo ovcí v Lužických horách. Poškozené
        chovatelce Haně zprostředkovalo Hnutí DUHA začátkem roku 2018 nákup
        osmitýdenního štěněte anatolského pasteveckého psa (kangala) z
        pracovního chovu na Slovensku, ze zemědělského družstva v Brusně v
        Horním Pohroní (oblast pod Nízkými Tatrami), které chrání svá stáda
        tradičním způsobem pomocí pasteveckých psů dlouhodobě.
      </p>
      <p>
        Zkušenosti z Lužických hor ukazují, že využívání pasteveckých psů není
        zásadní překážkou ani u menších chovatelů v Čechách. Fenka Máša se
        postupně začlenila do sedmdesátihlavého stáda ovcí, které už druhým
        rokem trvale stráží. Zpočátku byl problém, že si s jehňaty chtěla až
        příliš horlivě hrát, dokonce jim okusovala známky na uších. Bylo třeba
        ji hlídat a nežádoucí chování napravovat, což je časově náročné. Dnes,
        když už je pes dospělý, se situace zlepšila. Ke konfliktům nedochází ani
        s dalšími třemi psy na statku, při porodech jehňat nebo s lidmi.
        Chovatelka žije v turistické oblasti. Před pořízením psa si lidé často
        zkracovali cestu přes její pastvinu, což se v menší míře děje pořád, ale
        nedošlo přitom k žádným konfliktům. Některých lidí si Máša nevšímá, na
        některé štěká. Evidentně ji rozčilují volně pobíhající psi, proti kterým
        vybíhá, když je vidí u pastviny. Protože se Máša většinou nechová k
        lidem agresivně, zažila i turisty, kteří nabádali svoje děti, aby si ji
        přes plot pohladily. Takové chování však není zodpovědné k dětem ani k
        pasteveckým psům a na tomto poli je určitě třeba více osvěty.
      </p>
      <p>
        Přestože se od roku 2018 v Lužických horách natrvalo usadila vlčí smečka
        a dobrovolníci Hnutí DUHA opakovaně našli pobytové znaky vlků v
        bezprostřední blízkosti zdejších pastvin, hospodářství hlídané
        anatolským pasteveckým psem slovenského původu zatím neutrpělo žádnou
        ztrátu. Několikrát, nejspíš právě kvůli přítomnosti vlků, spustila Máša
        v noci hlasitý povyk a nahnala stádo od lesa blíž k vesnici. Majitelka
        věří, že bez tohoto pasteveckého psa by o další ovce už přišla a Mášu si
        velmi oblíbila. Do budoucna by chtěla odchovat štěňata, aby jedno z nich
        pomohlo s hlídáním stáda a ostatní mohla nabídnout dalším chovatelům pro
        snazší soužití s vlky v kraji.
      </p>
      <p>
        Na závěr jsme poprosili chovatelku o zodpovězení několika otázek,
        souvisejících s její motivací k pořízení pasteveckého psa a dosavadními
        zkušenostmi.
      </p>
      <p>
        <b>
          Hanko, proč ses rozhodla chránit zvířata zrovna pomocí pasteveckého
          psa?
        </b>
        <br />
        Psy mám odjakživa ráda, vždy jsme jich doma měli hned několik. Každý
        chovatel zvířat by měl zvířata mít rád, ať už jsou to jeho ovce, velký
        hlídací pes nebo vlk, který se vrací do naší krajiny. Využít psa, který
        byl po staletí chován přímo k tomuto účelu, mi přijde praktické a
        přirozené. V oblastech, kde velcí predátoři nikdy vyhubeni nebyli,
        pastevečtí psi jako například můj kangal efektivně pomáhají pastevcům
        chránit stáda. Není potřeba vymýšlet nic nového.
      </p>
      <p>
        <b>
          Co bys doporučila ostatním chovatelům, kteří hospodaří s domácími
          zvířaty v místech výskytu velkých šelem?
        </b>
        <br />
        Určitě bych jim doporučila pořízení dobrého pasteveckého psa z pracovní
        linie. Podle velikosti stáda zvážit také počet psů, ale za ideální
        považuji alespoň dva psy i k menšímu stádu ovcí, aby měl pes při obraně
        zvířat podporu a větší sebevědomí. Doporučila bych jim také zvířata
        zavírat na noc do menších, dobře zabezpečených síťových elektrických
        ohradníků spolu se psem, ideálně v blízkosti obydlí nebo alespoň na
        vzdálenějším místě od lesa.
      </p>
      <p>
        <b>Jak hodnotíš spolupráci s Hnutím DUHA?</b>
        <br />
        Spolupráci s Hnutím DUHA hodnotím jen pozitivně. Pomohli mi velmi rychle
        sehnat štěně pasteveckého psa, který se zatím v hlídání stáda velmi
        dobře osvědčil. Podali mi pomocnou ruku také při hledání dalších
        chovatelů kangalů, abych mohla nechat Mášu připustit ke krytí a odchovat
        tak i štěňata. Nedávno mi lidé z Hnutí DUHA zapůjčili i fotopast, kterou
        jsme společně umístili na ohradník, kam zavírám ovce a noc. MIROSLAV
        <br />
        --KUTAL, KRISTÝNA FRIDRICHOVÁ
      </p>
      <Gallery
        images={[
          "/static/images/LH1.jpg",
          "/static/images/LH2.jpg",
          "/static/images/LH3.jpg"
        ]}
      />
    </Section>
  </>
);
