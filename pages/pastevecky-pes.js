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
      <title>Pastevecký pes | Ochrana Ovcí</title>
    </Head>
    <Navbar />
    <Header />
    <Section header="Pastevecký pes" className="row">
      <p>
        Pastevečtí psi jsou časem prověření strážci stád a v oblastech s
        výskytem vlků se stále využívají.
      </p>
      <Article header="Účinnost">
        <p>
          Pastevečtí psi jsou tradiční metodou ochrany stád od doby, kdy lidé
          začali chovat hospodářská zvířata. Na rozdíl od honáckých psů mají
          pastevečtí psi potlačené lovecké instinkty, jsou mohutní, ale zároveň
          bystří. Je však nutné je již od věku 6-8 týdnů vychovávat s
          hospodářskými zvířaty, aby si k nim vytvořili silný vztah. V
          dospělosti pak pomáhají chránit stáda proti vlkům, medvědům, ale i
          liškám nebo dravcům. Jsou využitelní zejména u větších stád. Někdy
          může stačit i jeden pes, zejména je-li sebevědomý, pracuje na
          otevřených loukách s dobrou viditelností nebo hlídá jen nepočetné
          stádo na oplocené pastvině. Zpravidla se doporučuje mít psy alespoň
          dva: ve dvojici jsou psi sebevědomější a snadněji odrazí útok
          vetřelce. Pro větší stáda je zapotřebí více psů – zhruba podle
          pravidla jeden pes na sto ovcí. Proti smečce vlků je vždy účinnější
          více psů, kteří u stád plní různé role. Kromě toho, když jeden pes
          onemocní nebo fena nemůže být u stáda při hárání nebo výchově štěňat,
          stádo nezůstane bez ochrany. Použití některých plemen pasteveckých psů
          může být problematické v oblastech, kde se pohybuje hodně turistů. Pro
          české podmínky proto doporučujeme méně agresivní a spolehlivější
          plemena, jako je pyrenejský horský pes, maremmský pes, španělský
          mastin nebo kangal. Tato plemena se osvědčují v hustě zalidněných nebo
          turisticky exponovaných lokalitách ve Španělsku, Švýcarsku nebo v
          Německu, ale také u chovatelů dobytka v České republice.
        </p>
      </Article>
      <Article header="Účinnost">
        <p>
          Správně vychovaní pastevečtí psi jsou velmi spolehlivým ochranným
          opatřením. Přítomnost psa, jeho hlasitý štěkot a statečnost při
          setkání s šelmami mohou stačit k odehnání vlků od stáda. Tito psi se
          nebojí s šelmami i bojovat, pokud je to nutné. Pes je dobrým hlídačem
          jen v případě, že byl od malička chován u stáda, ne mezi lidmi. Je
          naprosto nezbytné, aby si navykl chovat se ke stádu, které má chránit
          neagresivně a láskyplně. Je velmi důležité psy náležitě krmit.
          Vyhladovělí psi nebudou jako ochránci účinní. Dokonce mohou způsobit
          velký problém, pokud začnou jako potravu lovit divoká nebo i
          hospodářská zvířata.
        </p>
      </Article>
      <Article header="Cena">
        <p>
          Pastevečtí psi nejsou levným ochranným opatřením. Pořizovací náklady
          jsou ve srovnání s budováním pevných ohrad spíše nižší, je však třeba
          počítat s krmením, zdravotní péčí a zejména v prvním roce s časovou
          investicí při výchově psa. Protože pastevečtí psi nejsou v Česku běžně
          využíváni k ochraně stád, pořízení kvalitního štěněte z pracovního
          chovu může být značně časově a finančně náročné. Zpravidla je třeba si
          pro štěně zajet k osvědčenému chovateli do zahraničí. Cena za dopravu
          tak může přesáhnout i vlastní cenu štěněte. Pro sledování a kontrolu
          práce psa jsou vhodné GPS obojky. Při nápravě nežádoucího chování psa
          lze dočasně využít elektrické výcvikové obojky.
        </p>
      </Article>

      <Article header="Doporučení pro koupi a výchovu pasteveckých psů">
        <p>
          Téma správné výchovy pasteveckých psů je obsáhlé. Doporučujeme
          například publikaci “Pastevečtí psi: praktická příručka pro chovatele
          hospodářských zvířat” , z které zdůrazňujeme tato doporučení týkající
          se praktické výchovy:
        </p>
        <ul>
          <li>
            Vyberte si zdravé štěně osvědčeného plemene a typu od renomovaného
            chovatele.
          </li>
          <li>
            Mezi 6. a 8. týdnem věku vezměte štěně od matky a sourozenců. Ihned
            ho umístěte v blízkosti zvířat, jež má hlídat, do ohrady, která je
            dostatečně velká a umožňuje psovi volný pohyb a kontakt se zvířaty,
            ale zároveň je dostatečně zabezpečená a zabrání štěněti dostat se
            ven. Může to být oplocená část dvora nebo stodoly, mimo dohled a
            doslech hlavní hospodářské budovy. Štěněti dejte hračky a pravidelně
            ho krmte kvalitním psím žrádlem.
          </li>
          <li>
            Kontakty štěněte s lidmi a ostatními psy omezte na minimum.
            Nezapomeňte, že se z něho má stát hlídač a nikoliv domácí mazlíček.
            Nenechte ho si dlouho hrát s lidmi (včetně dětí) a ostatními psy. Až
            na krátké návštěvy by mělo být štěně do 16 týdnů věku vychováváno
            odděleně, ale ve styku s hospodářskými zvířaty
          </li>
          <li>
            Nenechte štěně utéct z ohrady, potulovat se po farmě a zdržovat se v
            přítomnosti lidí. Je důležité, abyste psa za takové chování, tj.
            když odejde od stáda, neodměňovali jídlem a nevěnovali mu pozornost.
            Nezapomeňte, že „není-li pes u ovcí, pak není na svém místě“ (Jay
            Lorenz.
          </li>
          <li>
            Kdykoliv pracujete u ohrady, pusťte štěně ke zvířatům. Pečlivě
            sledujte jeho první kontakty s ovcemi. Jestliže štěně začne ovce
            honit, okusuje jim uši nebo je tahá za ocas a srst, ihned ho
            pokárejte.
          </li>
          <li>
            Věnujte štěněti čas, aby se vás nebálo a později se nechalo od vás
            ošetřit apod. Pro dobré zdraví psa je nezbytné pravidelné
            odčervování, očkování a prohlídky u veterináře. Během prvních
            kontaktů s ovcemi začněte psa učit poslušnosti („k noze“, „ne“,
            „stůj“). Vždy ho však po krátké chvíli pusťte zpět do ohrady a
            pochvalte ho, pokud se s ovcemi vítá.
          </li>
          <li>
            Někteří farmáři nechávají psa u stáda již od mladého věku. Pokud je
            to i váš případ, při výběru ovcí, k nimž psa umístíte, vezměte v
            potaz jeho povahu. Pár slabých jehňat může být vhodných pro malého
            či krotkého psa, ale větší a energičtější pes, který se hodí spíše k
            ročním beranům, by je mohl poranit. Dokud si štěně a stádo na sebe
            dobře nezvyknou, nenechávejte štěně u zvířat déle bez dozoru.
          </li>
          <li>
            Postarejte se o to, aby se štěně seznámilo s různými jedinci, ne jen
            s jedním či dvěma, a v ideálním případě se zvířaty, která zůstanou
            ve stádě, a ne s těmi, která se chystáte prodat. Jakmile jedna
            skupina ovcí psa přijme, ostatní ovce, které nejsou na pastevecké
            psy zvyklé, ho přijmou rychleji.
          </li>
          <li>
            Jakmile je štěně starší, proveďte ho (na vodítku) po ostatních
            částech farmy a ukažte mu i vybavení, stroje, další zvířata (koně,
            skot, slepice) a psy. Přivedete-li psa k nově narozeným jehňatům,
            bedlivě ho sledujte. Zaměřte se na budování sebevědomí psa tím, že
            ho budete chválit a odměňovat za vhodné chování.
          </li>
          <li>
            Když je psovi 4 až 5 měsíců, začněte ho nechávat u stáda na delší
            dobu. Když pes dospěje a zvykne si na pobyt s ovcemi, dopřejte mu
            postupně více svobody a možností k samostatnému jednání. Z malé
            ohrady ho přemístěte do větší, dále na pastvinu a od několika málo
            jehňat k celému stádu, jež bude nakonec hlídat. Pečlivě ho sledujte,
            motivujte ho k dobrému chování a za špatné ho napomeňte.
          </li>
          <li>
            Po každém přemístění nebo změně každodenní rutiny psa pečlivě
            sledujte.
          </li>
          <li>
            Postarejte se o to, aby se řádně přizpůsobil, a napravte veškeré
            chyby.
          </li>
          <li>
            Nadále důsledně zajišťujte, aby pes pobýval u ovcí. Kdykoliv se
            pokusí od ovcí odejít, vraťte ho ke stádu, a když u ovcí zůstane,
            pochvalte ho.
          </li>
          <li>
            I když je štěně starší, je dobré mu zajistit místo, kam se ovce
            nedostanou a kde si bude moct odpočinout a najíst se.
          </li>
          <li>
            Pasteveckým psům by se mělo dostat alespoň základního výcviku v
            poslušnosti. Mít nad psem kontrolu není důležité jen kvůli
            bezpečnosti ovcí a lidí, ale i kvůli tomu, aby se pes nechal
            prohlédnout a ošetřit. Také se tím mezi psem a člověkem rozvíjí
            vřelý vztah. Pravidelně se psem cvičte na pastvině u ovcí, aby si
            výcvik spojil s radostí ze společnosti pána a stáda.
          </li>
          <li>
            Mezi 6. a 12. měsícem věku si pes pravděpodobně začne značkovat
            teritorium, vyjadřovat vážnější starost o ovce a štěkat s jasným
            záměrem. Stále je však nutné na mladé psy dohlížet, neboť dokud
            fyzicky a psychicky nedospějí, jsou zranitelní. Mladí psi mohou při
            hlídání stáda utrpět psychická traumata, kvůli nimž si nevytvoří
            sebevědomí potřebné k tomu, aby se z nich stali úspěšní dospělí
            hlídači.
          </li>
          <li>
            Necháváte-li psa u stáda v ohrazené pastvině, měli byste ho denně
            kontrolovat a dávat mu dostatek žrádla a vody a zajistit mu
            přístřeší. Možná ho budete muset naučit, aby hlídal vaše zvířata a
            ne ta na sousedních pastvinách.
          </li>
          <li>
            Pravidelně psovi prohlížejte zvukovody, oči, tlamu a nohy. Stříhejte
            mu drápy, a je-li to třeba, zkracujte mu srst na nohou a pod ocasem.
            Zkontrolujte, zda nemá řezné rány nebo škrábnutí, v nichž by mohlo
            dojít k infekci. V horku budete možná muset psovi stříhat nebo česat
            srst.
          </li>
          <li>
            Buďte trpěliví a dejte psovi dostatek času na to, aby dospěl.
            Ideální chování se u pasteveckých psů projeví v prvních šesti
            měsících, ale nejspíše bude trvat déle, než si vytvoří dostatečné
            sebevědomí k tomu, aby zaútočili na šelmy. U pasteveckých psů lze
            očekávat, že začnou efektivně pracovat mezi 1. a 3. rokem věku.
          </li>
          <li>
            Informujte vaše okolí o přítomnosti pasteveckých psů u stáda.
            Vhodnou formou pro návštěvníky procházející v okolí Vašich pastvin
            jsou informační cedule. Můžeme vám zdarma připravit návrh podle
            vzoru níže.
          </li>
        </ul>
      </Article>
      <Gallery
        images={[
          "/static/images/PP1.jpg",
          "/static/images/PP2.jpg",
          "/static/images/PP3.jpg",
          "/static/images/PP4.jpg"
        ]}
      />
    </Section>
    <Footer />
  </>
);
