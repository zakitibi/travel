const tripData = {
  title: "🗺 🇵🇹 Portugália - Liszabon – 2026. április 3–7.",
  subtitle: "4 nap · Lisszabon · Sintra",
  updatedAt: "2026.04.03",
  route: [
    { label: "BUD", cls: "flight" },
    { separator: "→✈→" },
    { label: "Lisszabon", cls: "lisbon" },
    { separator: "→🚆→" },
    { label: "Sintra", cls: "sintra" },
    { label: "Lisszabon", cls: "lisbon" },
    { separator: "→✈→" },
    { label: "LIS", cls: "flight" },
    { separator: "→✈→" },
    { label: "BUD", cls: "flight" }
  ],
  flights: [
    {
      title: "✈ Ryanair · K8UZMB",
      body: "BUD → LIS · Ápr. 3 · 20:15 - 23:15",
      links: [
        { label: "FlightStats", url: "https://www.flightstats.com/v2/flight-tracker/FR/" },
        { label: "Trip.com", url: "https://www.trip.com/flights/" }
      ]
    },
    {
      title: "✈ Wizz Air Hungary · W6 2394",
      body: "LIS → BUD · Ápr. 7 · 20:55 - 01:35",
      links: [
        { label: "FlightStats", url: "https://www.flightstats.com/v2/flight-tracker/W6/" },
        { label: "Trip.com", url: "https://www.trip.com/flights/" }
      ]
    }
  ],
  overview: {
    urgent: [
      "Jerónimos és Pena jegy előre, időpontra.",
      "A hazautas Wizz Air járat adatait és reptéri kijutást rögzítsd.",
      "Április 7-re már ne maradjon feszes program, csak kényelmes lezárás.",
      "A lisszaboni vacsorákra és Pastéis de Belémre továbbra is érdemes előre készülni."
    ],
    notes: [
      "Ez a verzió már tisztán lisszaboni út: a fókusz Belémen, Alfamán, Baixán és Sintrán marad.",
      "Április 6 teljes puffernap Lisszabonban, ezért kényelmesebb az egész út ritmusa.",
      "Április 7 már csak lezáró nap és esti hazautazás, észak-portugál kitérő nélkül."
    ]
  },
  sectionIntros: {
    restaurants: {
      title: "🇵🇹 Portugál kulinária röviden",
      dishBox: {
        title: "🍽 Jellegzetes portugál fogások röviden",
        items: [
          {
            name: "Bacalhau",
            description: "Sózott tőkehalból készülő gyűjtőfogalom, rengeteg verzióval.",
            flavor: "sósabb, karakteres, olívaolajos, gyakran hagymás-fokhagymás"
          },
          {
            name: "Pastel de nata",
            description: "Leveles tésztás, tojáskrémes kis sütemény, kívül karamellizált tetejű.",
            flavor: "édes, krémes, vaníliás, enyhén pörkölt cukros"
          },
          {
            name: "Francesinha",
            description: "Portói, rétegzett melegszendvics sonkával, kolbásszal, hússal, sajttal és sörös-paradicsomos szósszal.",
            flavor: "nehéz, szaftos, húsos, enyhén csípős és gazdag"
          },
          {
            name: "Bifana",
            description: "Vékony sertéshúsos szendvics, fűszeres szafttal vagy páccal.",
            flavor: "sós, húsos, enyhén fokhagymás-fűszeres, gyors street food jelleg"
          },
          {
            name: "Caldo verde",
            description: "Krumplis-kelkáposztás leves, gyakran chouriço kolbásszal.",
            flavor: "lágy, házias, enyhén füstös, komfortétel"
          },
          {
            name: "Sardinhas assadas",
            description: "Grillezett szardínia, főleg nyári és tengerparti vonalon erős.",
            flavor: "intenzíven halas, füstös, sós, egyszerű és nyersanyagra épülő"
          },
          {
            name: "Arroz de marisco",
            description: "Tenger gyümölcseivel főzött szaftos rizses fogás.",
            flavor: "mélyen tengeri, sós-umamis, sűrű és szaftos"
          },
          {
            name: "Polvo",
            description: "Polipos fogások gyűjtőneve, gyakran sütve vagy burgonyával tálalva.",
            flavor: "tengeries, húsos textúrájú, olívaolajos és fokhagymás"
          }
        ]
      },
      sections: [
        {
          heading: "Rövid ételtörténeti háttér",
          items: [
            "A portugál konyha a tengeri kereskedelem, a katolikus böjti hagyományok és a felfedezések korának hatásából épült fel.",
            "A sózott tőkehal, vagyis a bacalhau kultúrája történetileg a hosszú tárolhatósághoz és az atlanti kereskedelemhez kapcsolódik.",
            "Sok klasszikus édesség kolostori eredetű: tojássárgája, cukor és leveles tésztás hagyományok adják az alapot."
          ]
        },
        {
          heading: "A portugál konyha fő karaktere",
          items: [
            "Alapkarakter: halas, olívaolajos, kenyérre és rizsre épülő, mégis rusztikus és laktató.",
            "Egyszerre tud nagyon egyszerű lenni, például grillezett hal vagy bifana, és nagyon rétegzett, például bacalhau vagy tengeri rizses fogások formájában.",
            "Nem a túlfűszerezés a lényeg, hanem a jó alapanyag, a só, a textúra és a lassabb, hagyományos főzési logika."
          ]
        },
        {
          heading: "Régiós fókusz ezen az úton",
          items: [
            "Lisszabon: pastel de nata, petiscos, tőkehalas fogások, kisebb tabernák és városi klasszikusok.",
            "Belém: sütis és kávés megállók, egyszerű ikonikus pontokkal.",
            "Sintra: travesseiros, queijadas és könnyebb központi ebéd/kávé.",
            "Lisszabon esti vonala: Alfama és Bairro Alto környéki hangulatosabb tabernák."
          ]
        },
        {
          heading: "Mit kell megkóstolni?",
          items: [
            "Pastel de nata vagy a klasszikus Pastéis de Belém.",
            "Legalább egy bacalhau fogás, mert ez a portugál konyha egyik alappillére.",
            "Lisszabonban valamilyen jó petiscos vagy taberna-vacsora is erősen ajánlott.",
            "Caldo verde, sardinhas assadas, arroz de marisco vagy polipétel, ha az adott hely kínálata jó.",
            "Sintrában egy travesseiros vagy queijadas is férjen bele."
          ]
        }
      ],
      paragraphs: [
        "A portugál konyha egyszerre atlanti, mediterrán és birodalmi örökségű: a hal, a tenger gyümölcsei, az olívaolaj, a kenyér, a rizs, a sertés és a lassan főzött, rusztikus fogások adják az alapját. A felfedezések korával együtt rengeteg fűszer, cukor és új alapanyag érkezett be, ezért a portugál étkezés egyszerre tud egyszerű és történetileg meglepően gazdag lenni.",
        "A legismertebb történeti vonal a bacalhau, vagyis a sózott tőkehal kultúrája, amely a tengeri kereskedelemmel és a hosszú tárolhatósággal fonódott össze. Ugyanilyen fontos az édességek világa is: sok klasszikus portugál desszert kolostori eredetű, tojássárgájára és cukorra épülő receptekkel.",
        "Amit ezen az úton régiónként érdemes kiemelni: Lisszabonban a pastel de nata, a petiscos és az egyszerűbb tabernaételek; Belémben az ikonikus sütis megállókat; Sintrában pedig az édességeket és a könnyebb központi étkezéseket."
      ],
      highlights: [
        "Jellegzetes portugál ételek: bacalhau, caldo verde, sardinhas assadas, bifana, francesinha, arroz de marisco, polvo.",
        "Kötelezően megkóstolandó: pastel de nata, jó kenyér + olívaolaj, legalább egy tőkehalas fogás és egy jó lisszaboni taberna-vacsora.",
        "Desszertvonal: Pastéis de Belém, Sintrában travesseiros vagy queijadas, és általában a portugál tojáskrémes-kolostori édességek világa.",
        "Borfronton a portugál asztali vörös és fehér borok is erősek, még rövid lisszaboni úton is."
      ]
    },
    sights: {
      title: "🏛 Látnivaló-logika",
      paragraphs: [
        "Ez a rövid verzió Lisszabonra és Sintrára szűkít: a portugál főváros történelmi városrészei és a leglátványosabb közeli kirándulás adják az út gerincét.",
        "A legerősebb szerkezeti váltások: Belém császári-felfedezéskori arca, Alfama középkorias hangulata, Baixa–Chiado városi tengelye és Sintra romantikus tája."
      ],
      highlights: [
        "Must-see tengely: Jerónimos, Belém-torony, Alfama, Baixa–Chiado, Pena és Regaleira.",
        "A terv úgy van összerakva, hogy a legerősebb ikonikus pontok férjenek bele, ne a legtöbb név.",
        "A napi oldalaknál az inline boxok ott magyaráznak, ahol a helyszín először tényleg releváns."
      ]
    },
    practical: {
      title: "🧳 Praktikus keret",
      paragraphs: [
        "Ennél a rövid útvonalnál a kulcs a könnyű ritmus: városi napok tömegközlekedéssel, egy külön Sintra-nap, és a végén kényelmes esti reptéri kijutás.",
        "A legfontosabb praktikus döntések: időpontra vett jegyek a zsúfolt helyekre, korai indulás Sintrába, és április 7-re már minimális program."
      ],
      highlights: [
        "Jegyek: Jerónimos és Pena előre.",
        "Közlekedés: Lisszabonban gyalog + tömegközlekedés, Sintrába vonat.",
        "Április 7: könnyű nap, reptéri tartalékkal.",
        "Hazautas járat: W6 2394, LIS 20:55 → BUD 01:35."
      ]
    }
  },
  days: [
    {
      id: "d1",
      tabLabel: "Ápr. 3 · Indulás",
      dayLabel: "1. nap",
      dateLabel: "2026. április 3., péntek",
      title: "✈ Indulás – Budapest → Lisszabon",
      subtitle: "Késő esti érkezés, csak transzfer és pihenés.",
      stay: "Lisszabon szállás (4 éj)",
      note: "LIS reptérről éjjel is működik taxi, Uber és Bolt. Nem érdemes erre az estére semmit tervezni.",
      bullets: [
        "Ryanair · PNR: K8UZMB",
        "Érkezés ~23:15 Lisszabon",
        "Taxi/Uber a belvárosba ~20 perc"
      ],
      mapTitle: "Érkezés",
      mapStops: [
        { label: "BUD", note: "indulás", color: "#8a2e52" },
        { label: "LIS", note: "23:15", color: "#1f5a3e" }
      ],
      schedule: [
        { time: "este", title: "✈ Ryanair BUD → LIS", detail: "Kb. 4 órás repülés." },
        { time: "~23:15", title: "🛬 Megérkezés Lisszabonba", detail: "Csomagfelvétel és kijutás a reptérről." },
        { time: "23:30", title: "🚕 Transzfer a szállásra", detail: "Taxi vagy Uber, rövid út a belvárosba." },
        { time: "00:00", title: "🛏 Bejelentkezés és alvás", detail: "Másnap már teljes lisszaboni nap indul." }
      ],
      citySummaries: [
        {
          title: "🏙 Lisszabon összefoglaló",
          subtitle: "Az ország fővárosa, a Tejo és az Atlanti-óceán találkozási zónájában.",
          stats: ["~576 ezer lakos", "Portugália fővárosa", "1147 óta portugál kézen", "1256 óta főváros"],
          paragraphs: [
            "Lisszabon Európa egyik legrégebbi fővárosa, története a római Olissipótól a mór korszakon át a középkori portugál királyságig húzódik. A város 1147-ben került vissza keresztény uralom alá, majd 1256-ban lett Portugália fővárosa.",
            "A mai város karakterét egyszerre határozza meg a dombos topográfia, a Tejo-part, a felfedezések kora és az 1755-ös nagy földrengés utáni újjáépítés. Baixa rácsos szerkezete, Belém emlékei és Alfama réteges utcavilága ezért ennyire eltérő hangulatú.",
            "A rövid utazó számára Lisszabon legerősebb tengelye általában Belém történelmi zónája, Alfama kilátói és a Baixa–Chiado városi mag. Ezek együtt adják a város történelmi, vallási és mindennapi arcát.",
            "Gasztronómiailag Lisszabon egyszerre tradicionális és könnyen fogyasztható város: a pastel de nata, a tőkehalételek, a grillezett szardínia, a petiscos és a borbárok világa gyorsan érthető. Belémben a Pastéis de Belém a legismertebb ikon, míg Alfamában és Bairro Altóban a kisebb, hangulatos tabernák adják a karakteresebb esti élményt."
          ],
          highlights: [
            "Belém: Jerónimos kolostor, Belém-torony és a Padrão dos Descobrimentos együtt mutatják meg a felfedezések korát.",
            "Alfama: középkori utcaszövet, kilátók és a São Jorge-vár környéke adják a legkarakteresebb régi lisszaboni hangulatot.",
            "Baixa és Chiado: a földrengés utáni újjáépített városmag, elegáns utcákkal, terekkel és erős kávéházi-kereskedelmi múlttal.",
            "Praça do Comércio és Rua Augusta: a reprezentatív folyóparti városi tengely, első lisszaboni sétára tökéletes.",
            "Elevador de Santa Justa és Miradouro São Pedro de Alcântara: gyorsan elérhető klasszikus panorámapontok.",
            "LX Factory és Time Out Market: modernebb, gasztronómiai és urbánus ellenpont a történeti mag mellé.",
            "Cabo da Roca és Cascais: opcionális nagyobb kitérők, ha a liszaboni régió atlanti arcát is látni akarjátok."
          ],
          sources: [
            { label: "Wikipedia Lisbon", url: "https://en.wikipedia.org/wiki/Lisbon", icon: "W" },
            { label: "Wikipedia Jerónimos", url: "https://hu.wikipedia.org/wiki/Jer%C3%B3nimos-kolostor", icon: "J" },
            { label: "Wikipedia Belém Tower", url: "https://hu.wikipedia.org/wiki/Bel%C3%A9m-torony", icon: "B" }
          ]
        }
      ]
    },
    {
      id: "d2",
      tabLabel: "Ápr. 4 · Lisszabon",
      dayLabel: "2. nap",
      dateLabel: "2026. április 4., szombat",
      title: "🏛 Lisszabon – Belém + Alfama + Baixa",
      subtitle: "A klasszikus első teljes lisszaboni nap.",
      stay: "Lisszabon",
      note: "Belém és Alfama együtt is működik, de a Jerónimos jegyet tényleg időpontra vedd meg előre.",
      bullets: [
        "Pastéis de Belém reggel",
        "Jerónimos + Belém-torony",
        "Alfama és Baixa gyalog"
      ],
      mapTitle: "Belém → Alfama → Baixa",
      mapStops: [
        { label: "Belém", color: "#1f5a3e" },
        { label: "Alfama", color: "#8a4f24" },
        { label: "Baixa", color: "#233d7b" }
      ],
      schedule: [
        { time: "09:00", title: "☕ Pastéis de Belém", detail: "Ikonikus pastel de nata, reggel a legrövidebb a sor.", placeBox: {
          title: "Belém negyed",
          text: "Belém Lisszabon történelmi folyóparti zónája, amely a portugál felfedezések korának legerősebb emlékhelyeit sűríti össze. Itt koncentrálódik a Jerónimos kolostor, a Belém-torony és a Padrão dos Descobrimentos világa, ezért ez a város egyik legfontosabb történeti negyede.",
          highlights: [
            "monumentális folyóparti történelmi zóna",
            "Jerónimos és Belém-torony ugyanabban a tengelyben",
            "Pastéis de Belém miatt gasztronómiailag is ikonikus"
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Bel%C3%A9m,_Lisbon",
          maps: "https://www.google.com/maps/search/Bel%C3%A9m+Lisbon"
        } },
        { time: "09:30", title: "🏛 Jerónimos kolostor", detail: "UNESCO látnivaló, online jegy kötelezően ajánlott.", maps: "https://www.google.com/maps/search/Jer%C3%B3nimos+Monastery+Lisbon", wikipedia: "https://hu.wikipedia.org/wiki/Jer%C3%B3nimos-kolostor", googleRating: "4.5", price: "10€/fő" },
        { time: "11:00", title: "🗼 Belém-torony", detail: "Folyóparti séta és rövid fotóblokk.", maps: "https://www.google.com/maps/search/Torre+de+Bel%C3%A9m+Lisbon", wikipedia: "https://hu.wikipedia.org/wiki/Bel%C3%A9m-torony", googleRating: "4.6", price: "8€/fő" },
        { time: "13:00", title: "🍽 Ebéd: Solar dos Presuntos", detail: "Klasszikus portugál húsos hely a belvárosban." },
        { time: "15:00", title: "🏘 Alfama negyed", detail: "São Jorge vár környéke és kilátók.", placeBox: {
          title: "Alfama",
          text: "Alfama Lisszabon legrégebbi és legkarakteresebb negyede, amely a mór korszakot és a középkori utcahálózatot őrzi a leglátványosabban. Szűk utcák, lépcsők, kis terek, kilátópontok és a fado hangulata miatt ez a város leginkább atmoszférikus része.",
          highlights: [
            "középkori, réteges utcaszövet",
            "São Jorge-vár környéke és több miradouro",
            "a fado és a régi lisszaboni hangulat fő terepe"
          ],
          wikipedia: "https://hu.wikipedia.org/wiki/Alfama",
          maps: "https://www.google.com/maps/search/Alfama+Lisbon"
        } },
        { time: "17:30", title: "🚶 Baixa–Chiado séta", detail: "Praça do Comércio és Rua Augusta.", placeBox: {
          title: "Baixa–Chiado",
          text: "Baixa a nagy 1755-ös földrengés utáni újjáépített városmag, szabályosabb utcahálózattal, reprezentatív terekkel és kereskedelmi tengelyekkel. Chiado ehhez képest elegánsabb, kulturálisabb és kávéházasabb réteg, így a két negyed együtt mutatja meg a modern nagyvárosi Lisszabon központját.",
          highlights: [
            "Praça do Comércio mint folyóparti főtér",
            "Rua Augusta és az árkádos, klasszikus belvárosi séta",
            "Chiado: könyves, kávéházas, urbánusabb városi hangulat"
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Baixa_(Lisbon)",
          maps: "https://www.google.com/maps/search/Baixa+Chiado+Lisbon"
        } },
        { time: "20:00", title: "🍽 Vacsora: Taberna Sal Grosso", detail: "Autentikus alfamai vacsora, foglalással." }
      ],
      daySights: [
        { name: "Jerónimos kolostor", googleRating: "4.5", price: "10€/fő", text: "Belém legfontosabb történelmi pontja, manuelin stílusú UNESCO-helyszín.", wikipedia: "https://hu.wikipedia.org/wiki/Jer%C3%B3nimos-kolostor", maps: "https://www.google.com/maps/search/Jer%C3%B3nimos+Monastery+Lisbon" },
        { name: "Belém-torony", googleRating: "4.6", price: "8€/fő", text: "Folyóparti erőd és rövid, erős fotós megálló a Jerónimos után.", wikipedia: "https://hu.wikipedia.org/wiki/Bel%C3%A9m-torony", maps: "https://www.google.com/maps/search/Torre+de+Bel%C3%A9m+Lisbon" }
      ]
    },
    {
      id: "d3",
      tabLabel: "Ápr. 5 · Sintra",
      dayLabel: "3. nap",
      dateLabel: "2026. április 5., vasárnap",
      title: "🏰 Sintra nap – Pena + Regaleira",
      subtitle: "Erős, de jól működő egynapos Sintra-kör.",
      stay: "Lisszabon",
      note: "Vasárnap Sintra zsúfolt, ezért a korai indulás itt tényleg számít.",
      bullets: [
        "Rossio → Sintra vonat",
        "Pena kastély korai idősáv",
        "Regaleira + Cabo da Roca opció"
      ],
      mapTitle: "Sintra kör",
      mapStops: [
        { label: "Rossio", color: "#1f5a3e" },
        { label: "Sintra", color: "#8a4f24" },
        { label: "Pena", color: "#b8860b" },
        { label: "Regaleira", color: "#233d7b" }
      ],
      schedule: [
        { time: "08:00", title: "🚆 Rossio → Sintra", detail: "Kb. 40 perc vonat, reggeli indulással." },
        { time: "09:30", title: "🏰 Palácio Nacional da Pena", detail: "A nap legfontosabb pontja, online időponttal.", maps: "https://www.google.com/maps/search/Pena+Palace+Sintra", wikipedia: "https://en.wikipedia.org/wiki/Pena_Palace", googleRating: "4.4", price: "20€/fő", placeBox: {
          title: "Pena-palota",
          text: "A Pena Sintra legismertebb helye, színes romantikus palota és egyben erős panorámapont is. Itt a korai idősáv sokat számít, mert később gyorsan telítődik a környék és a bejutás is lassabb lesz.",
          highlights: [
            "a sintrai nap fő programpontja",
            "romantikus 19. századi palota",
            "időpontra vett jeggyel működik a legjobban"
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Pena_Palace",
          maps: "https://www.google.com/maps/search/Pena+Palace+Sintra"
        } },
        { time: "12:00", title: "🌳 Quinta da Regaleira", detail: "Iniciatikus kút és kert.", maps: "https://www.google.com/maps/search/Quinta+da+Regaleira+Sintra", wikipedia: "https://en.wikipedia.org/wiki/Quinta_da_Regaleira", googleRating: "4.8", price: "8€/fő", placeBox: {
          title: "Quinta da Regaleira",
          text: "A Regaleira a sintrai nap misztikusabb ellenpontja: kert, villa, föld alatti hangulat és az ikonikus iniciatikus kút együtt adják az élményt. A Penához képest kevésbé monumentális, de sokkal játékosabb és felfedezős hely.",
          highlights: [
            "iniciatikus kút és szimbolikus kert",
            "erős második nagy stop a Pena után",
            "gyalogos bolyongásra ideális"
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Quinta_da_Regaleira",
          maps: "https://www.google.com/maps/search/Quinta+da+Regaleira+Sintra"
        } },
        { time: "13:30", title: "🍽 Ebéd Sintra központban", detail: "Rövid, könnyű ebéd." },
        { time: "15:00", title: "🌊 Cabo da Roca opció", detail: "Ha a tempó bírja, beleférhet." },
        { time: "17:30", title: "🚆 Vissza Lisszabonba", detail: "Este már pihenős lezárás." }
      ],
      daySights: [
        { name: "Pena kastély", googleRating: "4.4", price: "20€/fő", text: "Sintra zászlóshajója, erős korai idősávval működik a legjobban.", wikipedia: "https://en.wikipedia.org/wiki/Pena_Palace", maps: "https://www.google.com/maps/search/Pena+Palace+Sintra" },
        { name: "Quinta da Regaleira", googleRating: "4.8", price: "8€/fő", text: "Titokzatos kert és iniciatikus kút, tökéletes második nagy stop a Pena után.", wikipedia: "https://en.wikipedia.org/wiki/Quinta_da_Regaleira", maps: "https://www.google.com/maps/search/Quinta+da+Regaleira+Sintra" }
      ],
      citySummaries: [
        {
          title: "🏰 Sintra összefoglaló",
          subtitle: "UNESCO kulturális táj, palotákkal, hegyekkel és romantikus villákkal.",
          stats: ["UNESCO: 1995", "Lisszabon térsége", "Sintra-hegység", "romantikus paloták"],
          paragraphs: [
            "Sintra a portugál romantikus tájépítészet és rezidenciakultúra egyik csúcspontja, ezért került a világörökségi listára. A városmag és a hegyvidéki környezet együtt alkotják azt a kulturális tájat, amelyben kastélyok, kertek, villák és erdős hegyoldalak fonódnak össze.",
            "A térség már a középkorban is fontos volt, de mai hírnevét főleg a 19. századi romantikus építészeti hullámnak köszönheti. A Pena-palota ennek ikonikus szimbóluma, míg a Quinta da Regaleira a misztikus, szimbolikus kerteivel különösen erős élmény.",
            "Sintrát nem klasszikus városként, hanem egymásra épülő helyszínek rendszerként érdemes nézni: központ, kastélyzóna, kertek és a Cabo da Roca felé nyitó atlanti perem együtt adják a karakterét.",
            "Gasztronómiai szempontból Sintra kisebb léptékű, de erős helyi identitású megálló. A travesseiros és queijadas a legismertebb helyi édességek, ezért a kastélyok közötti napba jól illik egy rövid cukrászdás vagy kávézós pihenő a központban."
          ],
          highlights: [
            "Pena-palota: a térség legikonikusabb helye, romantikus palota és erős panorámapont.",
            "Quinta da Regaleira: kert, villa és iniciatikus kút, a sintrai nap legmisztikusabb helyszíne.",
            "Mór vár: ha több idő lenne, ez adná a leginkább katonai-történeti ellenpontot a romantikus paloták mellé.",
            "Sintra Nemzeti Palota: a városmag királyi rétegét mutatja meg, jellegzetes ikerkéményeivel.",
            "Cabo da Roca: Európa kontinentális nyugati pereme, erős atlanti lezárás egy hosszabb nap végére."
          ],
          sources: [
            { label: "Wikipedia Sintra", url: "https://en.wikipedia.org/wiki/Sintra", icon: "W" },
            { label: "Wikipedia Pena", url: "https://en.wikipedia.org/wiki/Pena_Palace", icon: "P" },
            { label: "Wikipedia Regaleira", url: "https://en.wikipedia.org/wiki/Quinta_da_Regaleira", icon: "R" }
          ]
        }
      ]
    },
    {
      id: "d4",
      tabLabel: "Ápr. 6 · Lisszabon",
      dayLabel: "4. nap",
      dateLabel: "2026. április 6., hétfő",
      title: "☀️ Lisszabon – extra, laza városi nap",
      subtitle: "Teljes puffernap indulás előtt, kimaradt pontoknak és nyugodtabb ritmusnak.",
      stay: "Lisszabon",
      note: "Ez a szerkezetileg legjobb változtatás az egész útban: megszűnik a túlfeszített április 6.",
      bullets: [
        "LX Factory vagy nyugodt parkos reggel",
        "Bica, Bairro Alto, Time Out Market opció",
        "Pakolás és autós nap előkészítése"
      ],
      mapTitle: "Laza lisszaboni nap",
      mapStops: [
        { label: "LX", color: "#1f5a3e" },
        { label: "Bica", color: "#8a4f24" },
        { label: "Chiado", color: "#233d7b" },
        { label: "Hotel", color: "#b8860b" }
      ],
      schedule: [
        { time: "09:30", title: "🌿 LX Factory vagy Jardim da Estrela", detail: "Laza reggel, kávéval.", placeBox: {
          title: "LX Factory / Jardim da Estrela",
          text: "Ez a blokk a klasszikus történeti központ ellenpontja: vagy egy lazább, kreatív-urbánus reggel az LX Factoryban, vagy egy nyugodtabb parkos indulás a Jardim da Estrelában. Mindkettő jól működik puffernapként, amikor nem kell mindent kipipálni.",
          highlights: [
            "LX Factory: ipari-urbánus, kávézós hangulat",
            "Jardim da Estrela: zöldebb, lassabb reggeli indulás",
            "jól illik az április 6-i laza nap logikájához"
          ],
          maps: "https://www.google.com/maps/search/LX+Factory+Lisbon",
          wikipedia: "https://en.wikipedia.org/wiki/LX_Factory"
        } },
        { time: "11:30", title: "🚶 Bica + kilátóblokk", detail: "Miradouro São Pedro de Alcântara környéke.", placeBox: {
          title: "Bica és a kilátók",
          text: "Bica a meredek, sárga siklóval és szűk utcákkal együtt a fotogén lisszaboni városkép egyik röviden is élvezhető része. A São Pedro de Alcântara kilátó ehhez hozzáad egy könnyen elérhető panorámát a város fölött.",
          highlights: [
            "klasszikus lisszaboni siklós utcakép",
            "jó átmenet a laza nap és a városi séta között",
            "kilátóval együtt rövid blokkban is működik"
          ],
          maps: "https://www.google.com/maps/search/Bica+Lisbon",
          wikipedia: "https://en.wikipedia.org/wiki/Bica_funicular"
        } },
        { time: "13:00", title: "🍽 Ebéd Chiado / Bairro Alto környékén", detail: "Nyugodt, nem túlvállalt ebéd." },
        { time: "15:00", title: "🛍 Szabad blokk", detail: "Time Out Market, vásárlás vagy pihenés." },
        { time: "17:30", title: "🧳 Pakolás + autós nap előkészítése", detail: "Bérlés, útvonal, parkolás, jegyek." },
        { time: "20:00", title: "🍽 Korai vacsora Lisszabonban", detail: "Másnap hosszú északi autóút jön." }
      ]
    },
    {
      id: "d5",
      tabLabel: "Ápr. 7 · Hazautazás",
      dayLabel: "5. nap",
      dateLabel: "2026. április 7., kedd",
      title: "✈ Lisszabon → Budapest",
      subtitle: "Könnyű lezáró nap, esti reptéri indulással.",
      stay: "Hazautazás",
      note: "Erre a napra már ne tervezz feszes városnézést. Legyen laza reggel, csomagolás, egy utolsó könnyű lisszaboni blokk, majd kényelmes kijutás a reptérre.",
      bullets: [
        "Wizz Air Hungary · W6 2394",
        "LIS indulás: 20:55",
        "BUD érkezés: 01:35 (ápr. 8.)"
      ],
      mapTitle: "Hazautazás",
      mapStops: [
        { label: "Hotel", color: "#1f5a3e" },
        { label: "LIS", note: "20:55", color: "#1f5a3e" },
        { label: "BUD", note: "01:35", color: "#8a2e52" }
      ],
      schedule: [
        { time: "délelőtt", title: "☕ Laza utolsó lisszaboni délelőtt", detail: "Kávé, rövid séta vagy egy utolsó könnyű városi blokk, de már csomagolással együtt." },
        { time: "14:00", title: "🧳 Csomagolás és check-out logika", detail: "Érdemes úgy szervezni a napot, hogy ne maradjon kapkodás a reptéri kijutás előtt." },
        { time: "17:30", title: "🚕 Indulás a reptérre", detail: "Taxi vagy Uber/Bolt a legkényelmesebb esti megoldás." },
        { time: "20:55", title: "✈ Wizz Air Hungary W6 2394", detail: "LIS → BUD közvetlen járat." },
        { time: "01:35", title: "🛬 Érkezés Budapestre", detail: "Érkezés 2026. április 8-án, szerda hajnalban." }
      ]
    }
  ],
  restaurants: [
    {
      city: "Lisszabon",
      items: [
        {
          name: "Solar dos Presuntos",
          type: "Ebéd · Baixa · klasszikus portugál húsételek",
          description: "Stabil, megbízható lisszaboni húsos választás a belvárosban.",
          tags: ["🐷 sertés", "🥩 marha", "🍗 csirke"],
          googleRating: "4.2",
          priceLevel: "€€€",
          meta: "R. das Portas de Santo Antão 150",
          url: "https://www.google.com/maps/search/Solar+dos+Presuntos+Lisboa"
        },
        {
          name: "Taberna Sal Grosso",
          type: "Vacsora · Alfama · foglalós hely",
          description: "Kis, autentikus, erős vacsorahely Alfamában.",
          tags: ["🐷 sertés", "🥩 marha", "❌ hal nincs"],
          googleRating: "4.6",
          priceLevel: "€€",
          meta: "Beco do Açúcar 9",
          url: "https://www.google.com/maps/search/Taberna+Sal+Grosso+Alfama+Lisboa"
        },
        {
          name: "Pastéis de Belém",
          type: "Reggeli / kávé · ikonikus",
          description: "A kötelező nata megálló Belémben.",
          tags: ["☕ kávé", "🥮 sütemény"],
          googleRating: "4.6",
          priceLevel: "€",
          meta: "R. de Belém 84-92",
          url: "https://www.google.com/maps/search/Pasteis+de+Belem+Lisboa"
        }
      ]
    }
  ],
  sights: [
    { name: "Jerónimos kolostor", googleRating: "4.5", when: "2. nap · Ápr. 4", price: "10€/fő", detail: "Belém, UNESCO. A lisszaboni nap legerősebb történelmi pontja.", wikipedia: "https://hu.wikipedia.org/wiki/Jer%C3%B3nimos-kolostor", maps: "https://www.google.com/maps/search/Jer%C3%B3nimos+Monastery+Lisbon" },
    { name: "Belém-torony", googleRating: "4.6", when: "2. nap · Ápr. 4", price: "8€/fő", detail: "Folyóparti erőd, rövid sétával jól összeköthető a Jerónimosszal.", wikipedia: "https://hu.wikipedia.org/wiki/Bel%C3%A9m-torony", maps: "https://www.google.com/maps/search/Torre+de+Bel%C3%A9m+Lisbon" },
    { name: "Pena kastély", googleRating: "4.4", when: "3. nap · Ápr. 5", price: "20€/fő", detail: "Sintra zászlóshajója, korai idősávval a legjobb.", wikipedia: "https://en.wikipedia.org/wiki/Pena_Palace", maps: "https://www.google.com/maps/search/Pena+Palace+Sintra" },
    { name: "Quinta da Regaleira", googleRating: "4.8", when: "3. nap · Ápr. 5", price: "8€/fő", detail: "Titokzatos kert, iniciatikus kút, rövid sintrai párosítás a Penával.", wikipedia: "https://en.wikipedia.org/wiki/Quinta_da_Regaleira", maps: "https://www.google.com/maps/search/Quinta+da+Regaleira+Sintra" }
  ],
  practical: [
    {
      title: "⚠️ Foglalások",
      items: [
        "Jerónimos és Pena időpontra foglalva a legjobb.",
        "A hazautas W6 2394 járat adatait és online check-int rögzítsd.",
        "A lisszaboni vacsoráknál foglalás jól jöhet."
      ]
    },
    {
      title: "🚆 Közlekedés",
      items: [
        "Lisszabonban gyalog + tömegközlekedés bőven elég.",
        "Sintrába a Rossióból induló vonat a legegyszerűbb.",
        "A reptérre taxi, Uber vagy Bolt a legkényelmesebb esti megoldás."
      ]
    },
    {
      title: "✈ Hazautazás",
      items: [
        "Wizz Air Hungary W6 2394",
        "LIS indulás: 20:55, 2026. április 7., kedd",
        "BUD érkezés: 01:35, 2026. április 8., szerda"
      ]
    },
    {
      title: "💶 Pénz és appok",
      items: [
        "EUR, kártya szinte mindenhol működik.",
        "TheFork sok helyen segít foglalásnál és kedvezménynél.",
        "Google Maps offline és CP vonat app hasznos.",
        "Pastéis de Belémnél készpénz jól jöhet."
      ]
    }
  ]
};
