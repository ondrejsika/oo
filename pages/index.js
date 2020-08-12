import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Article from "../components/Article";
import Box from "../components/Box";
import BoxWrapper from "../components/BoxWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { Row, Col } from "react-bootstrap";
import Head from "next/head";

export default () => (
  <>
    <Head>
      <title>Ochrana Ovcí</title>
    </Head>
    <Navbar />
    <Header />
    <Section id="jak-si-chranit-sva-stáda" header="Jak si chránit svá stáda?">
      <Article>
        <p>
          Neexistuje univerzální řešení, které bude vyhovovat všem farmářům, ale
          lze vypracovat velmi účinnou kombinaci opatření individuálně. Zde
          popisujeme nejčastější a nejúčinnější způsoby prevence před útoky
          šelem.
        </p>
      </Article>
      <BoxWrapper>
        <Box
          header="MOBILNÍ ELEKTRICKÝ OHRADNÍK"
          img="/static/images/mobilni_elektricky_ohradnik.jpg"
          sizeMd={4}
        >
          <p>
            Elektrický ohradník je jedním z nejoblíbenějších a nejúčinnějších
            ochranných opatření proti velkým šelmám.
          </p>
          <Button href="/mobilni-elektricky-ohradnik">Více</Button>
        </Box>
        <Box
          header="PASTEVECKÝ PES"
          img="/static/images/pastevecky_pes.jpg"
          sizeMd={4}
        >
          <p>
            Pastevečtí psi jsou časem prověření strážci stád a v oblastech s
            výskytem vlků se stále využívají.
          </p>
          <Button href="/pastevecky-pes">Více</Button>
        </Box>
        <Box
          header="PEVNÝ OHRADNÍK"
          img="/static/images/pevny_ohradnik.jpg"
          sizeMd={4}
        >
          <p>
            Pevné ohrady se běžně používají k vymezení pastvin, kde jsou zvířata
            po většinu pastevní sezóny.
          </p>
          <Button href="/pevny-ohradnik">Více</Button>
        </Box>
      </BoxWrapper>
    </Section>
    <Section
      id="priklady-z-praxe"
      header="Příklady z praxe / zkušenosti farmářů"
    >
      <Article>
        <p>
          Představujeme chovatele hospodářských zvířat, kteří využívají
          preventivních opatření, aby ochránili svá stáda před útoky vlků.
        </p>
      </Article>
      <BoxWrapper>
        <Box
          header="FARMA ZVÍŘAT ABERTAMY"
          img="/static/images/Z2.jpg"
          sizeMd={4}
        >
          <ul>
            <li>3000 ovcí</li>
            <li>pastva na otevřených pastvinách</li>
            <li>pastevčtí psi, bača, košáry ze síťových ohradníků</li>
          </ul>
          <Button href="/zacharda">Více</Button>
        </Box>
        <Box
          header="PASTEVECKÝ PES V LUŽICKÝCH HORÁCH"
          img="/static/images/LH1.jpg"
          sizeMd={4}
        >
          <ul>
            <li>70 ovcí</li>
            <li>pastva v pevných ohradách</li>
            <li>pastevčští psi, bača, košáry ze síťových ohradníků</li>
          </ul>
          <Button href="/luzicke-hory">Více</Button>
        </Box>
        <Box
          header="OCHRANA OVCÍ POD TROSKAMI"
          img="/static/images/T3.jpg"
          sizeMd={4}
        >
          <ul>
            <li>120 ovcí</li>
            <li>pastva v mobilních lankových ohradnících</li>
            <li>pastevecký pes</li>
          </ul>
          <Button href="/pod-troskami">Více</Button>
        </Box>
      </BoxWrapper>
    </Section>

    <Section id="podpora-prevence" header="Podpora prevence">
      <Article header="">
        <p>
          V letošním roce poskytuje stát finanční podporu chovatelům na
          preventivní opatření proti útokům velkých šelem prostřednictvím
          Operačního programu životní prostředí (OPŽP). Bohužel získání této
          podpory je nesrovnatelně administrativně náročnější než v případě
          zemědělských dotací nebo Programu péče o krajinu, na které jsou
          chovatele zvyklí.
        </p>
      </Article>
      <Article header="Co je možné z OPŽP popořit?">
        <p>
          Lze podpořit realizaci širokého spektra opatření, která slouží k
          preventivní ochraně hospodářských zvířat nebo včelstev před útoky
          velkých šelem, a to ze 100 % způsobilých výdajů. AOPK ČR připravila
          ceník nákladů obvyklých opatření (NOO), který určuje maximální ceny
          vybraných opatření. V odůvodněných případech je možné podpořit
          opatření až do výše 150% NOO. Všechny ceny jsou uvedeny bez DPH a
          včetně nákladů na instalaci.
        </p>
        <table className="table">
          <tr>
            <td>Mobilní síťové ohradníky</td>
            <td>60 Kč/bm</td>
          </tr>
          <tr>
            <td>
              Elektrický ohradník pevný (cena za běžný metr použitého vodiče
              včetně izolátorů, sloupků nebo kůlů a brány)
            </td>
            <td>15 Kč/bm</td>
          </tr>
          <tr>
            <td>
              Elektrický ohradník mobilní (cena za běžný metr použitého vodiče
              včetně izolátorů, sloupků a brány)
            </td>
            <td>12 Kč/bm</td>
          </tr>
          <tr>
            <td>Zdroj impulzů včetně příslušenství</td>
            <td>12 500 Kč </td>
          </tr>
          <tr>
            <td>SMS alarm</td>
            <td>11 800 Kč</td>
          </tr>
          <tr>
            <td>Fotopast</td>
            <td>6000 Kč</td>
          </tr>
          <tr>
            <td>Pevná ohrada</td>
            <td>320 Kč/bm </td>
          </tr>
          <tr>
            <td>Košár (z pevných panelů, například ovčí plotové díly)</td>
            <td>750 Kč/bm</td>
          </tr>
          <tr>
            <td>Fladrový (zradidlový) ohradník</td>
            <td>10 Kč/bm</td>
          </tr>
          <tr>
            <td>
              Pořízení psa pasteveckého/vycvičeného ovčáckého plemene k ochraně
              hospodářských zvířat (vč. nákladů na výchovu do doby
              upotřebitelnosti)
            </td>
            <td>65 000 Kč</td>
          </tr>
          <tr>
            <td>
              Příspěvek na veterinární péči o psa pasteveckého/ovčáckého plemene
            </td>
            <td>3000 Kč/rok</td>
          </tr>
        </table>
        <p>
          Lze však podpořit i další položky související s elektrickým
          ohradníkem, které nejsou v ceníku NOO uvedeny, např. baterie, solární
          panely, krabice na zdroj či náklady související s výchovou
          pasteveckého psa (náklady na cestu pro psa do pracovního chovu do
          zahraničí, GPS obojek) a vzdělávací materiály (např. cedule
          upozorňující na přítomnost pasteveckých psů v ohradě).
        </p>
      </Article>
      <Article header="Limity OPŽP">
        <ul>
          <li>Minimální požadovaná částka je 100.000 Kč.</li>
          <li>
            Příprava projektu a vyplňování formuláře v systému MS2014+ je časově
            náročné a uživatelsky nepřívětivé. K podání projektu je nutný
            elektronický podpis.
          </li>
          <li>
            Žádost o platbu je možné žádat až na základě proplacených faktur.
          </li>
          <li>
            Náklady na přípravu projektu je možné zahrnout jen v případě podání
            projektu do 139. výzvy, která běží v režimu de minimis (maximální
            podpora pro jeden subjekt je 20.000 EUR (cca 500.000 Kč) během
            posledních 3 účetních období).
          </li>
        </ul>
        <h4>Více informací o aktuálně vyhlášených výzvách</h4>
        <Button
          href="https://www.opzp.cz/nabidka-dotaci/detail-vyzvy/?id=158"
          target="_blank"
        >
          139. výzva - otevřená do 2. 11. 2020 (v rámci podpory de minimis, max.
          výše dotace 20.000 EUR)
        </Button>
        <Button
          href="https://www.opzp.cz/nabidka-dotaci/detail-vyzvy/?id=113"
          target="_blank"
        >
          110. výzva - otevřená do 4.1.2021 (notifikovaná výzva, bez horního
          limitu podpory)
        </Button>
        <Button
          href="https://www.navratvlku.cz/prevence-moznost-financovani/"
          target="_blank"
        >
          Více informací od AOPK ČR také na webu Návrat vlků.
        </Button>
      </Article>
      <Article>
      <h6>
        <br>
          {" "}
          Hnutí DUHA Olomouc má zkušenosti s přípravou a realizací
          individuálních i společných projektů OPŽP zaměřených na preventivní
          opatření. Pokud máte zájem o konzultaci možných opatření nebo
          kompletní přípravu a administraci projektu, kontaktujte nás na{" "}
          <a href="mailto:info@ochranaovci.cz">info@ochranaovci.cz</a>.
        </br>
      </h6>
      </Article>
    </Section>

    <Section id="co-delat-pri-napadeni" header="Co dělat při napadení?">
      <Article header="">
        <p>
          V případě, že jsou hospodářská zvířata napadena vlkem, rysem nebo
          medvědem, kteří patří mezi zvláště chráněné druhy, mají chovatelé
          nárok na náhradu za škody od státu. Zákon č. 115/2000 Sb., o
          poskytování náhrad škod způsobených vybranými zvláště chráněnými druhy
          živočichů určuje jmenovitý seznam těchto živočichů a stanoví podmínky,
          kdy stát proplatí škody těmito chráněnými živočichy. Způsob výpočtu
          výše škody je uveden ve vyhlášce č. 360/2000 Sb.
        </p>
        <h4>Jaké škody stát může hradit?</h4>
        <ul>
          <li>
            Škody na ovcích, kozách, skotu, králících a hrabavé a vodní drůbeži,
            na prasatech, koních, oslech a jejich křížencích a na kožešinových
            zvířatech
          </li>
          <li>
            Škody na psech sloužících k hlídání vybraných domestikovaných zvířat
          </li>
          <li>Škody způsobené medvědem na včelstvech a včelařském zařízení.</li>
        </ul>
        <p>
          Zákon pamatuje i na případnou škodu na zdraví a životě člověka nebo na
          škodu na uzavřených objektech (například ohradách nebo plotech) a
          movitých věcech v nich umístěných.
        </p>
        <p>
          Podmínkou však je, že v době vzniku škody byla hospodářská zvířata v
          uzavřeném objektu nebo elektrickém ohradníku anebo pod přímým dohledem
          fyzické osoby nebo pasteveckého psa.
        </p>
      </Article>
      <Article header="Jak postupovat v případě napadení stáda?">
        <h4>1. Kontaktujte orgán ochrany přírody a krajiny</h4>
        <p>
          Je v zájmu poškozeného ohlásit událost co nejdříve, nejpozději však do
          48 hodin, místně příslušnému orgánu ochrany přírody, aby došlo co
          nejrychleji k ohledání místa a aby mohly být zdokumentovány případné
          stopy a pobytové znaky šelem. Místně příslušným orgánem je Správa
          chráněné krajinné oblasti nebo národního parku a mimo velkoplošná
          chráněná území odbor životního prostředí obce s rozšířenou působností.
          Ve dnech pracovního klidu je možné využít{" "}
          <a href="https://www.navratvlku.cz/kontakt-pohotovostni-linky/">
            pohotovostní linky Agentury ochrany přírody a krajiny ČR
          </a>
          .
        </p>
        <h4>2. Zajistěte pobytové znaky šelmy</h4>
        <ul>
          <li>
            Než dorazí pracovník příslušného orgánu ochrany přírody, je vhodné
            zajistit pobytové znaky šelmy.
          </li>
          <li>
            Kadáver nechte v místě, kde jste ho nalezli. Proveďte
            fotodokumentaci a překryjte ho plachtou, abyste zabránili dalším
            predátorům v konzumaci a chránili tělo také před deštěm a sluncem
            (později je možné odebrat stěr na genetickou analýzu pro potvrzení
            původce zabití zvířete).
          </li>
          <li>
            Zkuste obejít ohradu a najít místo, kudy šelma do ohrady vnikla.
          </li>
          <li>
            Můžete kontaktovat také místního koordinátora monitoringu šelem z
            Hnutí DUHA, který vám pomůže s nalezením dalších pobytových znaků.
            Pro více informací volejte Tel.{" "}
            <a href="tel:+420728832889">728 832 889</a> (M. Kutal).
          </li>
        </ul>
        <h4>3. Kontaktujte veterináře</h4>
        <p>
          K podání žádosti o náhradu škody je třeba také potvrzení veterinárního
          lékaře o příčině úhynu zvířete. Není nezbytně nutné, aby veterinární
          lékař provedl ohledání na místě. Příčinu úhynu může potvrdit z
          fotodokumentace a/nebo protokolu o šetření, který provedl orgán
          ochrany přírody.{" "}
        </p>
        <h4>4. Podejte žádost o náhradu škody</h4>
        <p>
          Žádost o náhradu škody se podává ke <b>krajskému úřadu</b>. Tu je
          třeba podat do <b>10 dnů od dne, kdy se poškozený o škodě dozvěděl</b>
          , nejpozději však do 6 měsíců od vzniku škody. V žádosti o náhradu je
          třeba uvést:
        </p>
        <ul>
          <li>
            základní identifikační údaje žadatele včetně rodného čísla nebo IČO
            a adresy trvalého bydliště nebo sídla (podle toho, zda je žadatel
            právnická nebo fyzická osoba)
          </li>
          <li>popis příčin vzniku škody a uvedení rozsahu škody</li>
          <li>
            označení vybraného živočicha, který škodu podle poznatků žadatele
            (poškozeného) způsobil
          </li>
          <li>
            popis opatření žadatele (poškozeného), která učinil k zabránění
            vzniku škody
          </li>
          <li>
            způsob poskytnutí náhrady škody (např. bankovním převodem na účet
            žadatele)
          </li>
        </ul>
        <h4>5. K žádosti dále přiložte:</h4>
        <ul>
          <li>potvrzení veterinárního lékaře o příčině úhynu zvířete</li>
          <li>
            doklad, že jste vlastníkem zvířat (výpis z evidence a/nebo čestné
            prohlášení)
          </li>
        </ul>

        <h4>Výše náhrady</h4>
        <p>
          Stanovení výše náhrady určuje vyhláška 360/2000 Sb., a jedná se o cenu
          obvyklou, tedy cenu, které by bylo dosaženo při prodeji takového
          zvířete, včelstva nebo zařízení. Za účelem sjednocení postupu a
          usnadnění stanovení výše náhrady škod byl Svazem chovatelů ovcí a koz
          sestaven ceník jednotlivých kategorií zvířat. Použití tohoto ceníku
          doporučilo v rámci společného jednání Ministerstvo životního prostředí
          a Ministerstvo zemědělství.
        </p>
        <table className="table">
          <tr>
            <td>
              <b>Kategorie</b>
            </td>
            <td>
              <b>Výše náhrady</b>
            </td>
          </tr>
          <tr>
            <td>
              Jehňata a kůzlata <br /> do 12 měsíců věku
            </td>
            <td>150 Kč/kg nebo 3500 Kč/ks</td>
          </tr>
          <tr>
            <td>Bahnice a kozy</td>
            <td>200 Kč/kg nebo 6000 Kč/ks</td>
          </tr>
          <tr>
            <td>
              Plemenný beran nebo kozel
              <br /> „v odchovu“
            </td>

            <td>300 Kč/kg nebo 10 000 Kč/ks</td>
          </tr>
          <tr>
            <td>Plemenný beran nebo kozel</td>
            <td>15 000 Kč</td>
          </tr>
          <tr>
            <td>
              Ovce s mléčnou produkcí <br /> (prokazatelně dojené ovce)
            </td>
            <td>19 680 Kč</td>
          </tr>
          <tr>
            <td>
              Užitkové tele do 10 měsíců věku <br /> - býček
            </td>
            <td>24 000 Kč</td>
          </tr>
          <tr>
            <td>
              Užitkové tele do 10 měsíců věku <br /> - jalovice
            </td>
            <td>15 000 Kč</td>
          </tr>
        </table>
        <p>
          Vždy však záleží na konkrétním posouzení krajského úřadu. V případě,
          že vzniklá škoda je vyšší, musí žadatel tuto skutečnost prokázat
          odborným posudkem.
        </p>
        <p>
          V případě, že nejsou o vzniku škody pochybnosti, krajský úřad má
          povinnost škodu proplatit <b> do 4 měsíců od obdržení žádosti</b>.
          Není-li škoda nebo její výše prokázána, úřad náhradu škody nezaplatí.
          V případě, že krajský úřad nepostupuje dle žadatele v souladu se
          zákonem, může se poškozený domáhat přiznání náhrady škody podle tohoto
          zákona u soudu, a to nejpozději do 1 roku ode dne, kdy příslušný orgán
          žádost poškozeného o poskytnutí náhrady škody obdržel.
        </p>
        <h4>6. Ohlašte zásah vyšší moci na SZIF</h4>
        <p>
          Aby poškozený chovatel nepřišel v důsledku poklesu počtu chovaných
          zvířat o dotace vyplácené Státním zemědělským intervenčním fondem
          (SZIF), je třeba úhyn zvířat v důsledku přírodních okolností
          nezaviněných chovatelem ohlásit pomocí{" "}
          <a href="https://www.selmy.cz/data/images/ovce/Ohlaseni_vyssi_moci_-_vyjimecne_okolnosti.pdf">
            formuláře vyšší moci
          </a>
          na SZIF.
        </p>
      </Article>
    </Section>
    <Section id="o-projektu" header="O projektu">
      <Article header="">
        <p>
          Web ochranaovci.cz je určen pro všechny chovatele a další zájemce o
          problematiku konfliktu mezi velkými šelmami a hospodářskými zvířaty.
          Jeho autorem je Hnutí DUHA Olomouc a spolupracuje na něm s řadou
          chovatelů v oblastech výskytu velkých šelem, kteří se rozhodli bránit
          svá stáda ovcí a dalších hospodářských zvířat v rámci současné
          legislativy.
        </p>
        <p>
          Chceme inspirovat další zájemce, kteří hledají cesty, jak lze dávný
          konflikt mezi zemědělcem a vlkem řešit v moderní kulturní krajině.
          Nabízíme proto přehled nejčastějších metod k ochraně stád a
          podrobnější popis modelových opatření, která chovatelé v Česku i v
          zahraničí využívají.
        </p>
        <p>
          Protože o tématu vlků se často šíří řada dezinformací, cílem webu je
          především pomoci chovatelům a poskytovat objektivní informace. A to
          nejen o metodách ochrany, ale i o možnostech financování, správném
          postupu při vzniku škody, o množství škod v České republice a také o
          místech, kde vlci nejčastěji útočí.
        </p>
        <p>
          Pokud byste měli zájem o více informací nebo chtěli představit vlastní
          způsoby ochrany, napište nám na info@ochranaovci.cz. Budeme rádi web
          rozvíjet a doplňovat.
        </p>
        <p>
          Tento web byl spolufinancován Evropskou unií – Fondem soudržnosti v
          rámci Operačního programu Životní prostředí a Nadací EuroNatur.
        </p>
      </Article>
    </Section>
    <Section id="kontakt" header="Kontakt">
      <Row>
        <Col md={4}>
          <h3>Alena Koutková</h3>
          <p>
            Příprava a administrace projektů OPŽP pro lepší zabezpečení stád.
          </p>
          <p>
            E-mail: <a href="mailto:info@ochranaovci.cz">info@ochranaovci.cz</a>
            <br />
            Tel. <a href="tel:+420776361735">776 361 735</a>
          </p>
        </Col>
        <Col md={4}>
          <h3>Miroslav Kutal</h3>
          <p>Konzultace k preventivním opatřením a výskytu šelem</p>
          <p>
            E-mail:{" "}
            <a href="mailto:miroslav.kutal@hnutiduha.cz">
              miroslav.kutal@hnutiduha.cz
            </a>
            <br />
            Tel. <a href="tel:+420728832889">728 832 889</a>
          </p>
        </Col>
        <Col md={4}>
          <h3>Lenka Štíhlová</h3>
          <p>
            Chovatelka koz a krav na Broumovsku se zkušenostmi s útokem vlků a
            realizací preventivních opatření
          </p>
          <p>
            Tel. <a href="tel:+420776642866">776 642 866</a>
          </p>
        </Col>
      </Row>
    </Section>
    <Footer />
  </>
);
