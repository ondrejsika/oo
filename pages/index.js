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
      <Article header="Účinnost">
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
            vegetace a ohradník tak není uzemněný. Lze využít zkoušečky,
            signální světla či SMS hlásiče
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
    </Section>
    <Section header="Použití">
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
    </Section>
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
