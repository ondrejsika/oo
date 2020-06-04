import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Article from "../components/Article";
import Box from "../components/Box";
import BoxWrapper from "../components/BoxWrapper";
import Header from "../components/Header";
import { Row, Col } from "react-bootstrap";

export default () => (
  <>
    <Navbar />
    <Header />
    <Section header="Jak si chránit svá stáda?">
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
        >
          <p>
            Elektrický ohradník je jedním z nejoblíbenějších a nejúčinnějších
            ochranných opatření proti velkým šelmám.
          </p>
        </Box>
        <Box header="PASTEVECKÝ PES" img="/static/images/pastevecky_pes.jpg">
          <p>
            Pastevečtí psi jsou časem prověření strážci stád a v oblastech s
            výskytem vlků se stále využívají.
          </p>
        </Box>
        <Box header="PEVNÝ OHRADNÍK" img="/static/images/pevny_ohradnik.jpg">
          <p>
            Pevné ohrady se běžně používají k vymezení pastvin, kde jsou zvířata
            po většinu pastevní sezóny.
          </p>
        </Box>
      </BoxWrapper>
    </Section>
    <Section header="Příklady z praxe/Zkušenosti farmářů">
      <Article>
        <p>
          Představujeme chovatele hospodářských zvířat, kteří využívají
          preventivních opatření, aby ochránili svá stáda před útoky vlků.
        </p>
      </Article>
      <BoxWrapper>
        <Box
          header="FARMA ZVÍŘAT ABERTAMY"
          img="/static/images/mobilni_elektricky_ohradnik.jpg"
        >
          <ul>
            <li>3000 ovcí</li>
            <li>Pasení na otevřených pastvinách</li>
            <li> Pastevčští psi, bača, košáry ze síťových ohradníků</li>
          </ul>
        </Box>
        <Box
          header="PASTEVECKÝ PES V LUŽICKÝCH HORÁCH"
          img="/static/images/pastevecky_pes.jpg"
        >
          <ul>
            <li>70 ovcí</li>
            <li>Pasení v pevných ohradách</li>
            <li>Pastevčští psi, bača, košáry ze síťových ohradníků</li>
          </ul>
        </Box>
        <Box
          header="OCHRANA OVCÍ POD TROSKAMI"
          img="/static/images/pevny_ohradnik.jpg"
        >
          <ul>
            <li>120 ovcí</li>
            <li>Pasení v mobilních lankových ohradníkách</li>
            <li>Pastevecký pes</li>
          </ul>
        </Box>
      </BoxWrapper>
    </Section>

    <Section header="Podpora prevence">
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
          opatření až do výše 150% NOO. Všechny ceny jsou uvedeny s DPH a včetně
          nákladů na instalaci.
        </p>

        <p>
          Lze však podpořit i další položky související s elektrickým
          ohradníkem, které nejsou v ceníku NOO uvedeny, např. baterie, solární
          panely, krabice na zdroj, či náklady související s výchovou
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
        <p>
          Hnutí DUHA Olomouc má zkušenosti s přípravou a realizací
          individuálních i společných projektů OPŽP zaměřených na preventivní
          opatření. Pokud máte zájem o konzultaci možných opatření nebo
          kompletní přípravu a administraci projektu, kontaktujte nás na{" "}
          <a href="mailto:info@ochranaovci.cz">info@ochranaovci.cz</a>.
        </p>
      </Article>
    </Section>
    <Section header="Co dělat při napadení?">
      <p>Foo bar foo...</p>
    </Section>
    <Section header="O projektu">
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
    <Section header="Kontakt">
      <Row>
        <Col>
          <h3>Alena Koutková</h3>
          <p>
            Příprava a administrace projektů OPŽP pro lepší zabezpečení stád.
          </p>
          <p>
            E-mail: <a href="mailto:info@ochranaovci.cz">info@ochranaovci.cz</a>
            <br />
            Tel.
            <a href="tel:+420776361735">776 361 735</a>
          </p>
        </Col>
        <Col>
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
        <Col>
          <h3>Lenka Štíhlová</h3>
          <p>
            Chovatelka koz a krav na Broumovsku se zkušenostmi s útokem vlků a
            realizací preventivních opatření
          </p>
          <p>
            Tel.<a href="tel:+420776642866">776 642 866</a>
          </p>
        </Col>
      </Row>
    </Section>
    
  </>
);
