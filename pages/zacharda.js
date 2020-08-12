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
      <title>Horský statek Abertamy - Farma Zvířat | Ochrana Ovcí</title>
    </Head>
    <Navbar />
    <Header />
    <Section header="Horský statek Abertamy - Farma Zvířat">
      <p>
        Stabilní výskyt vlků v Krušných horách jsme zaznamenali v srpnu 2016.
        Tenkrát byly poněkolikáté napadeny ovce u Abertam. Právě jejich
        chovatel, Petr Zacharda, dodal jako první důkazy o stálém výskytu vlka v
        této oblasti.
      </p>
      <p>
        Od počátku ohlášení stržených ovcí na Abertamsku se pracovníci Hnutí
        DUHA rozhodli rozšířit monitoring velkých šelem i do Krušných hor. První
        akce, kterou pro „vlčí osvětu“ v Krušných horách zorganizovali, bylo
        promítání dokumentu „Causa Carnivora“ s následující besedou v Božím
        Daru. Právě této akce jsem se zúčastnila jako místní zájemkyně o
        problematiku návratu vlků a od přednášky jsem začala s Hnutím DUHA
        spolupracovat.
      </p>
      <p>
        Aktuálně společně s dalšími dobrovolníky monitorujeme vlky po celých
        Krušných horách, nejvíce se však soustředíme na oblast, kde se vlci
        vyskytují, a kde má právě Petr Zacharda pastviny. Již na jaře mě zaujalo
        zabezpečení jeho stád elektrickými ohradníky a pasteveckými psy. Skrz
        pastviny chovatele prochází velmi navštěvované turistické stezky a právě
        kolem pastvin se se svým psem často pohybuji. Vypozorovala jsem, že
        pastevecký pes na mého psa začne reagovat až v bezprostřední blízkosti.
        Běžně procházející turista si pasteveckého psa ani nevšimne. Chovatel
        Zacharda k ochraně svých stád používá psí plemeno španělský mastin,
        které se liší od ostatních pasteveckých psů převážně tím, že se nechová
        agresivně k lidem.
      </p>
      <p>
        S chovatelem se mi podařilo spojit a sjednat si schůzku, abych zjistila
        více informací k jeho postoji vůči vlkům a ochraně stád.
      </p>
      <p>
        Hned na první schůzce jsem zaznamenala, že postoj hospodáře k návratu
        vlků je velmi vstřícný. Zastává názor, že je třeba se aktuální situaci,
        kdy se vrací velké šelmy, především vlci, přizpůsobit. Ze svých
        zkušeností shledal, že není praktické ovce držet v pevných plotech, ze
        kterých není úniku. Své ovce má převážně na otevřené pastvině s
        pastevcem a ovčáckým psem nebo za elektrickými ohradníky s pasteveckými
        psy. V případě paniky jsou ovce schopné ohradník povalit a mít větší
        šanci na útěk (stejně tak z volné pastviny). Jak jsem již zmínila,
        chovatel zvolil pasteveckého psa plemene španělský mastin, pro kterého
        si osobně dojel do Španělska. Zdejší farmář Gregorio Fidalco praktikuje
        tisíciletou tradici pastevectví, tzv. „transhumance“, kdy cestuje s
        ovcemi z nížiny na horské pastviny a zpět. Ve Španělsku se se stády ovcí
        chodí středem měst a vesnic, proto si pracovní mastinové lidí nevšímají
        a nejsou agresivní k lidem. Pan Zacharda si z pracovního chovu zprvu
        dovezl čtyři štěňata (fenky). Nyní má 7 fen a jednoho psa.
      </p>
      <p>
        Chovatel má zhruba 3 tisíce ovcí (na farmě Abertamy 1500 ovcí),
        rozdělených do několika stád. U každého, potenciálně ohroženého, stáda
        chce mít Petr Zacharda tři psy. V budoucnu jich chce chovat kolem
        patnácti. Psi jsou zatím ve štěněcím věku, objektivně se jejich účinnost
        dá posoudit až kolem jejich druhého roku života, ale už nyní své služby
        stádu i chovateli prokazují. Ačkoliv jsou pastviny ve středu vlčího
        teritoria, ztráty na ovcích jsou oproti minulému roku výrazně nižší.
        Velmi zajímavou poznámkou, kterou během naší schůzky chovatel podotknul,
        bylo, že má vyšší škody na ovcích od psů domácích a na pozemcích od
        divokých prasat. Na statku dále žije asi 150jalovic.
      </p>
      <p>
        S chovatelem Zachardou vedeme velmi přátelské a slušné diskuze, při
        kterých hledáme řešení ke spokojenosti všech zúčastněných stran. Těším
        se tak z naší společné spolupráce. Je také jediným chovatelem, který měl
        zatím prokazatelné ztráty na ovcích. Spolu s dalšími pracovníky Hnutí
        DUHA jsme v kontaktu i s dalšími chovateli, jež si postupně svá stáda
        zabezpečují a jsou s námi ochotni o problematice diskutovat. Zatím jsme
        se v Krušných horách nesetkali s žádným „vlčím“ odpůrcem.
      </p>
      <p>
        <i>Štěpánka Kadlecová</i>
      </p>
      <Gallery
        images={[
          "/static/images/Z1.jpg",
          "/static/images/Z2.jpg",
          "/static/images/Z3.jpg"
        ]}
      />
    </Section>
    <Footer />
  </>
);
