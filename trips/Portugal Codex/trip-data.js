const tripData = {
  title: "🗺 🇵🇹 Portugália Útiterv – 2026. április 3–10.",
  subtitle: "8 nap · Lisszabon · Sintra · Óbidos · Nazaré · Batalha · Fátima · Porto · Régua · Pinhão",
  updatedAt: "2026.04.02",
  route: [
    { label: "BUD", cls: "flight" },
    { separator: "→✈→" },
    { label: "Lisszabon", cls: "lisbon" },
    { separator: "→🚆→" },
    { label: "Sintra", cls: "sintra" },
    { separator: "→🚗→" },
    { label: "Óbidos", cls: "sintra" },
    { label: "Nazaré", cls: "sintra" },
    { label: "Batalha", cls: "sintra" },
    { label: "Fátima", cls: "sintra" },
    { label: "Porto", cls: "porto" },
    { label: "Régua", cls: "douro" },
    { label: "Pinhão", cls: "douro" },
    { separator: "→🚗→" },
    { label: "LIS", cls: "flight" },
    { separator: "→✈→" },
    { label: "BUD", cls: "flight" }
  ],
  flights: [
    {
      title: "✈ Ryanair · K8UZMB",
      body: "BUD → LIS · Ápr. 3 (este)",
      links: [
        { label: "FlightStats", url: "https://www.flightstats.com/v2/flight-tracker/FR/" },
        { label: "Trip.com", url: "https://www.trip.com/flights/" }
      ]
    },
    {
      title: "✈ Wizz Air W6 · YPJP7Q",
      body: "LIS → BUD · Ápr. 10 · ~20:30 indulás",
      links: [
        { label: "FlightStats", url: "https://www.flightstats.com/v2/flight-tracker/W6/" },
        { label: "Trip.com", url: "https://www.trip.com/flights/" }
      ]
    }
  ],
  overview: {
    urgent: [
      "Jerónimos és Pena jegy előre, időpontra.",
      "Autóbérlés csak április 7 reggeltől kell.",
      "Livraria Lello időpont, valamint portói parkolási stratégia előre.",
      "Pinhão szállás és egy douro-i kóstoló foglalása időben.",
      "DOP és MUU vacsora foglalás Porto napokra."
    ],
    notes: [
      "Április 6 teljes puffernap Lisszabonban, ezért kevésbé feszes az út eleje.",
      "Április 7 fókuszált megállós tranzitnap: rövid Óbidos, Sítio-Nazaré, Batalha és Fátima, majd esti Porto.",
      "Április 8 teljes Porto gyalogos nap, az autót érdemes egy parkolóban hagyni.",
      "Április 9 sokkal jobb külön Douro-napként, Pinhão alvással, nem oda-vissza rohanva.",
      "Április 10-re a direkt LIS reptéri visszaút a reális, komoly városnézés nélkül."
    ]
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
        { time: "09:00", title: "☕ Pastéis de Belém", detail: "Ikonikus pastel de nata, reggel a legrövidebb a sor." },
        { time: "09:30", title: "🏛 Jerónimos kolostor", detail: "UNESCO látnivaló, online jegy kötelezően ajánlott.", maps: "https://www.google.com/maps/search/Jer%C3%B3nimos+Monastery+Lisbon", wikipedia: "https://hu.wikipedia.org/wiki/Jer%C3%B3nimos-kolostor", googleRating: "4.5", price: "10€/fő" },
        { time: "11:00", title: "🗼 Belém-torony", detail: "Folyóparti séta és rövid fotóblokk.", maps: "https://www.google.com/maps/search/Torre+de+Bel%C3%A9m+Lisbon", wikipedia: "https://hu.wikipedia.org/wiki/Bel%C3%A9m-torony", googleRating: "4.6", price: "8€/fő" },
        { time: "13:00", title: "🍽 Ebéd: Solar dos Presuntos", detail: "Klasszikus portugál húsos hely a belvárosban." },
        { time: "15:00", title: "🏘 Alfama negyed", detail: "São Jorge vár környéke és kilátók." },
        { time: "17:30", title: "🚶 Baixa–Chiado séta", detail: "Praça do Comércio és Rua Augusta." },
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
        { time: "09:30", title: "🏰 Palácio Nacional da Pena", detail: "A nap legfontosabb pontja, online időponttal.", maps: "https://www.google.com/maps/search/Pena+Palace+Sintra", wikipedia: "https://en.wikipedia.org/wiki/Pena_Palace", googleRating: "4.4", price: "20€/fő" },
        { time: "12:00", title: "🌳 Quinta da Regaleira", detail: "Iniciatikus kút és kert.", maps: "https://www.google.com/maps/search/Quinta+da+Regaleira+Sintra", wikipedia: "https://en.wikipedia.org/wiki/Quinta_da_Regaleira", googleRating: "4.8", price: "8€/fő" },
        { time: "13:30", title: "🍽 Ebéd Sintra központban", detail: "Rövid, könnyű ebéd." },
        { time: "15:00", title: "🌊 Cabo da Roca opció", detail: "Ha a tempó bírja, beleférhet." },
        { time: "17:30", title: "🚆 Vissza Lisszabonba", detail: "Este már pihenős lezárás." }
      ],
      daySights: [
        { name: "Pena kastély", googleRating: "4.4", price: "20€/fő", text: "Sintra zászlóshajója, erős korai idősávval működik a legjobban.", wikipedia: "https://en.wikipedia.org/wiki/Pena_Palace", maps: "https://www.google.com/maps/search/Pena+Palace+Sintra" },
        { name: "Quinta da Regaleira", googleRating: "4.8", price: "8€/fő", text: "Titokzatos kert és iniciatikus kút, tökéletes második nagy stop a Pena után.", wikipedia: "https://en.wikipedia.org/wiki/Quinta_da_Regaleira", maps: "https://www.google.com/maps/search/Quinta+da+Regaleira+Sintra" }
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
        { time: "09:30", title: "🌿 LX Factory vagy Jardim da Estrela", detail: "Laza reggel, kávéval." },
        { time: "11:30", title: "🚶 Bica + kilátóblokk", detail: "Miradouro São Pedro de Alcântara környéke." },
        { time: "13:00", title: "🍽 Ebéd Chiado / Bairro Alto környékén", detail: "Nyugodt, nem túlvállalt ebéd." },
        { time: "15:00", title: "🛍 Szabad blokk", detail: "Time Out Market, vásárlás vagy pihenés." },
        { time: "17:30", title: "🧳 Pakolás + autós nap előkészítése", detail: "Bérlés, útvonal, parkolás, jegyek." },
        { time: "20:00", title: "🍽 Korai vacsora Lisszabonban", detail: "Másnap hosszú északi autóút jön." }
      ]
    },
    {
      id: "d5",
      tabLabel: "Ápr. 7 · Óbidos–Nazaré–Batalha",
      dayLabel: "5. nap",
      dateLabel: "2026. április 7., kedd",
      title: "🚗 Lisszabon → Óbidos → Nazaré → Batalha → Fátima → Porto",
      subtitle: "09:00 körüli indulással teljesen reális, esti portói érkezéssel.",
      stay: "Porto szállás (2 éj)",
      note: "Ez a nap azért működik jól, mert minden megálló rövid és lényegi. Óbidosban elég egy fókuszált séta, Nazaréban rögtön a Sítióra menj, Batalhában a monostor a lényeg, Fátimában pedig a kegyhely magja.",
      bullets: [
        "Autófelvétel csak ma reggel",
        "Óbidos rövid városfalas megálló",
        "Nazaré fent, a Sítio részen",
        "Batalha + Fátima után esti Porto érkezés"
      ],
      mapTitle: "Autós nap",
      mapStops: [
        { label: "LIS", color: "#1f5a3e" },
        { label: "Óbidos", color: "#8a4f24" },
        { label: "Nazaré", color: "#8a4f24" },
        { label: "Batalha", color: "#8a4f24" },
        { label: "Fátima", color: "#8a4f24" },
        { label: "Porto", color: "#233d7b" }
      ],
      guides: [
        {
          title: "Óbidos – mit érdemes csinálni?",
          text: "Nem kell túlgondolni: Porta da Vila, Rua Direita, egy rövid várfal-szakasz és a kastély külső része bőven elég 45–60 percben. Parkolni a falakon kívüli külső parkolókban a legegyszerűbb, onnan pár perc séta a kapu.",
          linkLabel: "Óbidos parkolás és megközelítés",
          url: "https://turismo.obidos.pt/how-to-get-to-obidos/"
        },
        {
          title: "Nazaré – merre menjetek?",
          text: "Itt a legerősebb rövid kör a Sítio rész: Miradouro do Suberco, Nossa Senhora da Nazaré szentély, majd Forte de São Miguel Arcanjo / világítótorony a Praia do Norte hullámaihoz. Inkább fent parkoljatok, ne lent a strandnál kezdjetek.",
          linkLabel: "Nazaré Sítio és kilátó",
          url: "https://www.nazareportugaltourism.com/guide/miradouro-do-suberco.html"
        },
        {
          title: "Batalha és Fátima – rövid megállós logika",
          text: "Batalhában a Mosteiro da Batalha a fő attrakció, rövid megállóra is kiváló. Fátimában a Capela das Aparições, a nagy tér és a Basilica of Our Lady of the Rosary a lényeg. Mindkét hely jól működik 45–60 perces blokkban.",
          linkLabel: "Batalha monostor",
          url: "https://www.museusemonumentos.pt/en/museus-e-monumentos/mosteiro-da-batalha"
        },
        {
          title: "Fátima parkolás és kegyhelymag",
          text: "A shrine körül több nagy parkolózóna van, személyautóra gyakran a P4, P5, P6, P10, P12 és P13 parkolók a praktikusak. Rövid körre a kegyhely központi része elég.",
          linkLabel: "Fátima szentély",
          url: "https://www.fatima.pt/en/pages/places-of-the-apparitions"
        }
      ],
      schedule: [
        { time: "09:00", title: "🚗 Indulás Lisszabonból", detail: "Az autót vagy előző este veszed fel, vagy közvetlenül indulás előtt." },
        { time: "10:00", title: "🏰 Óbidos", detail: "Kb. 45–60 perc: Porta da Vila, Rua Direita, rövid fal-szakasz és a kastély külső része.", meta: "A falakon kívüli parkolók a legpraktikusabbak.", maps: "https://www.google.com/maps/search/%C3%93bidos+Portugal", wikipedia: "https://en.wikipedia.org/wiki/%C3%93bidos,_Portugal", googleRating: "4.7", price: "Ingyenes" },
        { time: "11:00", title: "🚗 Óbidos → Nazaré", detail: "Kb. 35–60 perc." },
        { time: "12:00", title: "🌊 Nazaré – Sítio", detail: "Kb. 1.5–2 óra: Miradouro do Suberco, Nossa Senhora da Nazaré és a Forte / világítótorony.", meta: "Érdemes rögtön fent parkolni, nem a lenti strandos résznél.", maps: "https://www.google.com/maps/search/Miradouro+do+Suberco+Nazar%C3%A9", wikipedia: "https://en.wikipedia.org/wiki/Nazar%C3%A9,_Portugal", googleRating: "4.7", price: "Ingyenes / opcionális" },
        { time: "14:00", title: "🚗 Nazaré → Batalha", detail: "Kb. 32–33 perc." },
        { time: "14:40", title: "⛪ Mosteiro da Batalha", detail: "45–60 perc, rövid megállóra is kiváló UNESCO-helyszín.", meta: "A monostor közeli parkolóiból pár perc séta a bejárat.", maps: "https://www.google.com/maps/search/Batalha+Monastery", wikipedia: "https://hu.wikipedia.org/wiki/Batalhai_kolostor", googleRating: "4.7", price: "helyszíni jegy" },
        { time: "15:45", title: "🚗 Batalha → Fátima", detail: "Kb. 24 perc." },
        { time: "16:15", title: "🕊 Fátima szentély", detail: "45–60 perc: Capela das Aparições, a nagy tér és a Basilica of Our Lady of the Rosary.", meta: "A nagy külső parkolók közül a P4/P5/P6/P10/P12/P13 a legismertebb zónák.", maps: "https://www.google.com/maps/search/Sanctuary+of+F%C3%A1tima", wikipedia: "https://hu.wikipedia.org/wiki/F%C3%A1tima_(Portug%C3%A1lia)", googleRating: "4.8", price: "Ingyenes" },
        { time: "17:15", title: "🚗 Fátima → Porto", detail: "Kb. 1 óra 53–54 perc, így a 19:00 körüli portói érkezés reális." },
        { time: "19:15", title: "🏨 Check-in Portóban", detail: "Este már csak vacsora és pihenés." }
      ],
      daySights: [
        { name: "Óbidos óváros", googleRating: "4.7", price: "Ingyenes", text: "Porta da Vila, Rua Direita és rövid várfal-szakasz, pont annyi idővel, amennyi nem feszíti túl a napot.", wikipedia: "https://en.wikipedia.org/wiki/%C3%93bidos,_Portugal", maps: "https://www.google.com/maps/search/%C3%93bidos+Portugal" },
        { name: "Nazaré – Sítio + Forte", googleRating: "4.7", price: "Ingyenes / opcionális", text: "A rövid Nazaré-blokk lényege a felső rész, a kilátó és a hullámnéző pont.", wikipedia: "https://en.wikipedia.org/wiki/Nazar%C3%A9,_Portugal", maps: "https://www.google.com/maps/search/Miradouro+do+Suberco+Nazar%C3%A9" },
        { name: "Mosteiro da Batalha", googleRating: "4.7", price: "helyszíni jegy", text: "Rövid megállóra is nagy súlyú UNESCO-helyszín, jól működik ezen a tranzitnapon.", wikipedia: "https://hu.wikipedia.org/wiki/Batalhai_kolostor", maps: "https://www.google.com/maps/search/Batalha+Monastery" },
        { name: "Fátima szentély", googleRating: "4.8", price: "Ingyenes", text: "A kegyhely központi része rövid körben is erős és emlékezetes.", wikipedia: "https://hu.wikipedia.org/wiki/F%C3%A1tima_(Portug%C3%A1lia)", maps: "https://www.google.com/maps/search/Sanctuary+of+F%C3%A1tima" }
      ]
    },
    {
      id: "d6",
      tabLabel: "Ápr. 8 · Porto",
      dayLabel: "6. nap",
      dateLabel: "2026. április 8., szerda",
      title: "🏙 Porto egész nap, gyalogos körrel",
      subtitle: "Az autót egyszer leteszed, és a klasszikus Porto-kört végig lehet sétálni.",
      stay: "Porto szállás (2 éj)",
      note: "Ha a felső belváros a fő fókusz, a Saba Cardosas a legpraktikusabb. Ha a folyópart és Gaia fontosabb, a Saba Ribeira jobb választás. Nagy, egyszerű bázisparkolónak a Silo Auto is működik.",
      bullets: [
        "São Bento, Sé, Clérigos, Lello",
        "Ribeira és Dom Luís I híd",
        "Késő délután/este Gaia borospincék"
      ],
      mapTitle: "Porto gyalogos kör",
      mapStops: [
        { label: "São Bento", color: "#233d7b" },
        { label: "Sé", color: "#1f5a3e" },
        { label: "Clérigos", color: "#8a4f24" },
        { label: "Lello", color: "#b8860b" },
        { label: "Ribeira", color: "#233d7b" },
        { label: "Gaia", color: "#b8860b" }
      ],
      guides: [
        {
          title: "Porto parkolás – melyik garázs a jó?",
          text: "Ha a felső belvárosi blokk a fontos, a Saba Cardosas a legpraktikusabb, mert közel van São Bentóhoz, a Séhez, Clérigoshoz és a gyalogos központhoz. Ribeira-fókuszhoz a Saba Ribeira jobb, egyszerű nagy bázisnak pedig a Silo Auto működik.",
          linkLabel: "Saba Cardosas parkoló",
          url: "https://www.saba.pt/pt/estacionamento-porto/parque-de-estacionamento-saba-cardosas"
        },
        {
          title: "Livraria Lello – miért kell előre nézni?",
          text: "A Lello jegyes, voucher-rendszerű belépéssel működik, ezért időpont nélkül könnyen sorban állós, kellemetlen programpont lesz. A napi Porto-körben sokkal jobban működik fix idősávval.",
          linkLabel: "Livraria Lello jegyek",
          url: "https://www.livrarialello.pt/en/home"
        },
        {
          title: "A porto-i klasszikus kör",
          text: "A legerősebb, klasszikus városi sorrend: São Bento, Sé, Clérigos, Lello, majd Ribeira és a Dom Luís I híd, végül a túlparton Gaia és a port wine cellars.",
          linkLabel: "Porto fő látnivalók",
          url: "https://www.tripadvisor.com/Attractions-g189180-Activities-Porto_Porto_District_Northern_Portugal.html"
        }
      ],
      schedule: [
        { time: "09:30", title: "🚗 Autó letétele", detail: "Egész napos városi séta indul innen.", meta: "Saba Cardosas / Saba Ribeira / Silo Auto." },
        { time: "10:00", title: "🚉 São Bento", detail: "10–15 perc, de kihagyhatatlan azulejo-fal.", maps: "https://www.google.com/maps/search/S%C3%A3o+Bento+Station+Porto", wikipedia: "https://hu.wikipedia.org/wiki/S%C3%A3o_Bento_p%C3%A1lyaudvar_(Porto)", googleRating: "4.7", price: "Ingyenes" },
        { time: "10:30", title: "⛪ Sé do Porto + kilátás", detail: "30–45 perc a katedrális körül.", maps: "https://www.google.com/maps/search/S%C3%A9+do+Porto", wikipedia: "https://en.wikipedia.org/wiki/Porto_Cathedral", googleRating: "4.6", price: "részben ingyenes" },
        { time: "11:30", title: "🗼 Clérigos", detail: "45–60 perc a toronnyal és a környező utcákkal.", maps: "https://www.google.com/maps/search/Cl%C3%A9rigos+Tower+Porto", wikipedia: "https://en.wikipedia.org/wiki/Cl%C3%A9rigos_Church", googleRating: "4.5", price: "8€/fő" },
        { time: "12:45", title: "📚 Livraria Lello", detail: "30–45 perc, előre vett időpontos jeggyel.", meta: "A voucher-rendszer miatt érdemes előre foglalni.", maps: "https://www.google.com/maps/search/Livraria+Lello", wikipedia: "https://en.wikipedia.org/wiki/Livraria_Lello", googleRating: "4.1", price: "jegyes belépés" },
        { time: "14:00", title: "🍽 Ebéd a belvárosban", detail: "Rövid szünet a délelőtti blokk után." },
        { time: "15:30", title: "🏘 Ribeira + Dom Luís I híd", detail: "A klasszikus folyóparti Porto-élmény.", maps: "https://www.google.com/maps/search/Dom+Lu%C3%ADs+I+Bridge", wikipedia: "https://en.wikipedia.org/wiki/Dom_Lu%C3%ADs_I_Bridge", googleRating: "4.8", price: "Ingyenes" },
        { time: "17:30", title: "🍷 Gaia borospincék", detail: "Késő délutáni/esti pinceblokk a túlparton." },
        { time: "20:30", title: "🍽 Porto esti vacsora", detail: "A nap lezárása a városban vagy Gaiában." }
      ],
      daySights: [
        { name: "São Bento pályaudvar", googleRating: "4.7", price: "Ingyenes", text: "Rövid idővel is nagy élmény az azulejo-falak miatt.", wikipedia: "https://hu.wikipedia.org/wiki/S%C3%A3o_Bento_p%C3%A1lyaudvar_(Porto)", maps: "https://www.google.com/maps/search/S%C3%A3o+Bento+Station+Porto" },
        { name: "Sé do Porto", googleRating: "4.6", price: "részben ingyenes", text: "A katedrális és a környéki kilátópont együtt adnak jó rövid blokkot.", wikipedia: "https://en.wikipedia.org/wiki/Porto_Cathedral", maps: "https://www.google.com/maps/search/S%C3%A9+do+Porto" },
        { name: "Clérigos torony", googleRating: "4.5", price: "8€/fő", text: "Porto egyik klasszikus panorámapontja, jól beilleszthető a belvárosi körbe.", wikipedia: "https://en.wikipedia.org/wiki/Cl%C3%A9rigos_Church", maps: "https://www.google.com/maps/search/Cl%C3%A9rigos+Tower+Porto" },
        { name: "Livraria Lello", googleRating: "4.1", price: "jegyes belépés", text: "Időpontfoglalással működik igazán jól, különben sorban állós pont lesz.", wikipedia: "https://en.wikipedia.org/wiki/Livraria_Lello", maps: "https://www.google.com/maps/search/Livraria+Lello" },
        { name: "Ribeira + Dom Luís I híd + Gaia", googleRating: "4.8", price: "Ingyenes / kóstoló opcionális", text: "A legklasszikusabb Porto-élménycsomag egy blokkban, folyóval és híddal.", wikipedia: "https://en.wikipedia.org/wiki/Dom_Lu%C3%ADs_I_Bridge", maps: "https://www.google.com/maps/search/Dom+Lu%C3%ADs+I+Bridge" }
      ]
    },
    {
      id: "d7",
      tabLabel: "Ápr. 9 · Douro / Pinhão",
      dayLabel: "7. nap",
      dateLabel: "2026. április 9., csütörtök",
      title: "🍇 Porto → Régua → N222 → Pinhão",
      subtitle: "Sokkal jobb külön Douro-napként, és már ott is alszotok.",
      stay: "Pinhão szállás (1 éj)",
      note: "A gyors kijutás Porto felől A4 → A24 útvonalon megy, a szép részhez pedig a Régua–Pinhão közti N222 a kulcs. A fő kóstolót már Pinhãóban érdemes tartani, amikor az autót leraktátok.",
      bullets: [
        "Gyors kijutás Régua felé",
        "N222 panorámaút és Casal de Loivos",
        "Pinhão alvás és esti kóstoló"
      ],
      mapTitle: "Douro útvonal",
      mapStops: [
        { label: "Porto", color: "#233d7b" },
        { label: "Régua", color: "#b8860b" },
        { label: "N222", color: "#8a4f24" },
        { label: "Loivos", color: "#1f5a3e" },
        { label: "Pinhão", color: "#b8860b" }
      ],
      guides: [
        {
          title: "Douro-nap logikája Porto felől",
          text: "A gyors kijutás Porto felől az A4 → A24 útvonalon megy, Régua felé. A szép rész utána kezdődik, a Régua–Pinhão közti N222 szakaszon, amit a helyi guide-ok újra és újra kiemelnek a régió egyik legjobb panorámaútjaként.",
          linkLabel: "Douro-völgy guide",
          url: "https://porto-north-portugal.com/porto-guide/douro-valley-portugal.html"
        },
        {
          title: "Pinhão Station és Casal de Loivos",
          text: "A Pinhão Station rövid fotómegállónak is erős pont, a homlokzatán 25 azulejo panel van. A Casal de Loivos kilátó pedig a klasszikus képeslapnézet Pinhão fölött.",
          linkLabel: "Pinhão Station",
          url: "https://www.visitportugal.com/en/NR/exeres/7620ADD3-6D40-4E9F-9712-6B1DD244C2C4"
        },
        {
          title: "Borászat és kóstoló – mikor, hol?",
          text: "Útközbeni pincének a Quinta do Vallado jó opció, de ha még vezetni kell, inkább csak rövid nézelődés vagy ebéd legyen. A fő kóstolót sokkal jobb már Pinhãóban, autó nélkül letudni, például a Quinta do Bomfimnél.",
          linkLabel: "Quinta do Vallado",
          url: "https://www.quintadovallado.com/en/wine-tourism/visits-tastings-gastronomy/"
        },
        {
          title: "Pinhão szállás – két erős irány",
          text: "Praktikumra The Vintage House + Quinta do Bomfim jó kombináció. Ha inkább all-in-one hangulat kell, a Quinta de la Rosa szállás + borászat + vacsora együtt nagyon erős választás.",
          linkLabel: "Quinta de la Rosa",
          url: "https://www.quintadelarosa.com/"
        }
      ],
      schedule: [
        { time: "09:00", title: "🚗 Indulás Portóból", detail: "A4 → A24 irányban gyors kijutás a völgy felé." },
        { time: "10:15", title: "📍 Régua", detail: "Rövid technikai vagy kávés megálló." },
        { time: "11:00", title: "🛣 N222 panorámaút", detail: "A Douro egyik legjobb panorámaútja Régua és Pinhão között.", maps: "https://www.google.com/maps/search/N222+Douro", wikipedia: "https://en.wikipedia.org/wiki/EN222", googleRating: "4.8", price: "Ingyenes" },
        { time: "12:00", title: "🌅 Casal de Loivos", detail: "Klasszikus képeslapnézet Pinhão fölött.", maps: "https://www.google.com/maps/search/Casal+de+Loivos+Viewpoint", wikipedia: "https://en.wikipedia.org/wiki/Pinh%C3%A3o,_Alij%C3%B3", googleRating: "4.8", price: "Ingyenes" },
        { time: "13:00", title: "🚉 Pinhão Station", detail: "Rövid fotómegálló az azulejo paneleknél.", maps: "https://www.google.com/maps/search/Pinh%C3%A3o+Station", wikipedia: "https://en.wikipedia.org/wiki/Pinh%C3%A3o", googleRating: "4.4", price: "Ingyenes" },
        { time: "14:00", title: "🏨 Check-in Pinhãóban", detail: "The Vintage House, LBV House vagy Quinta de la Rosa." },
        { time: "16:00", title: "🍷 Kóstoló Pinhãóban", detail: "A fő kóstoló már autó nélkül legyen.", meta: "Praktikus: Quinta do Bomfim. All-in-one: Quinta de la Rosa." },
        { time: "19:30", title: "🍽 Vacsora és ott alvás", detail: "Nyugodt esti lezárás a völgyben." }
      ],
      daySights: [
        { name: "N222 panorámaút", googleRating: "4.8", price: "Ingyenes", text: "A Douro egyik legszebb autós szakasza, itt maga az út is látnivaló.", wikipedia: "https://en.wikipedia.org/wiki/EN222", maps: "https://www.google.com/maps/search/N222+Douro" },
        { name: "Casal de Loivos kilátó", googleRating: "4.8", price: "Ingyenes", text: "A klasszikus képeslapnézet Pinhão fölött, rövid stopként is megéri.", wikipedia: "https://en.wikipedia.org/wiki/Pinh%C3%A3o,_Alij%C3%B3", maps: "https://www.google.com/maps/search/Casal+de+Loivos+Viewpoint" },
        { name: "Pinhão Station", googleRating: "4.4", price: "Ingyenes", text: "Azulejo paneles állomás, rövid fotómegállóra tökéletes.", wikipedia: "https://en.wikipedia.org/wiki/Pinh%C3%A3o", maps: "https://www.google.com/maps/search/Pinh%C3%A3o+Station" }
      ]
    },
    {
      id: "d8",
      tabLabel: "Ápr. 10 · Visszaút",
      dayLabel: "8. nap",
      dateLabel: "2026. április 10., péntek",
      title: "✈ Pinhão → Lisszabon repülőtér",
      subtitle: "Direkt, gyors visszaút, valódi városnézés nélkül.",
      stay: "Hazautazás",
      note: "Erre a napra nem érdemes már komoly látnivalót tervezni. A jó logika az, hogy a gyors úton mentek vissza LIS felé, és legfeljebb egy rövid állomásfotó fér bele indulás előtt, ha az előző nap kimaradt.",
      bullets: [
        "Pinhão → LIS kb. 367 km / 4 óra körül",
        "12:30 körüli indulás kényelmes esti járathoz",
        "Wizz Air · YPJP7Q"
      ],
      mapTitle: "Hazautazás",
      mapStops: [
        { label: "Pinhão", color: "#b8860b" },
        { label: "LIS", color: "#1f5a3e" },
        { label: "BUD", color: "#8a2e52" }
      ],
      guides: [
        {
          title: "Visszaút – mire számíts?",
          text: "A gyors logika szerint Pinhão → LIS kb. 367 km és nagyjából 4 óra körüli nettó út. Ha 18:00 körül már a reptéren akartok lenni, a 12:30 körüli indulás kényelmes, tartalékos verzió.",
          linkLabel: "Pinhão → LIS útvonal",
          url: "https://www.rome2rio.com/s/Pinh%C3%A3o-Vila-Real-Portugal/Lisbon-Airport-LIS"
        },
        {
          title: "Mit ne tervezz erre a napra?",
          text: "Erre a napra már nem érdemes komoly városnézést vagy panorámautas kitérőt tenni. Legfeljebb egy 15–20 perces Pinhão Station fotó fér bele indulás előtt, ha előző nap kimaradt.",
          linkLabel: "Pinhão Station újra",
          url: "https://www.visitportugal.com/en/NR/exeres/7620ADD3-6D40-4E9F-9712-6B1DD244C2C4"
        }
      ],
      schedule: [
        { time: "délelőtt", title: "☕ Nyugodt reggel Pinhãóban", detail: "Legfeljebb 15–20 perces állomás- vagy folyóparti fotómegálló." },
        { time: "12:30", title: "🚗 Indulás Pinhãóból", detail: "Gyors főút/autópálya logikával LIS felé, nem a panorámautat erőltetve." },
        { time: "16:30", title: "🛬 Érkezés LIS környékére", detail: "Kb. 4 óra nettó út, tartalékkal számolva." },
        { time: "18:00", title: "🚗 Autóleadás + reptéri buffer", detail: "Kényelmes tartalék az átadásra és a check-inre." },
        { time: "20:30", title: "✈ Wizz Air LIS → BUD", detail: "A mostani terv szerint esti járatlogikával." }
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
    },
    {
      city: "Porto",
      items: [
        {
          name: "DOP by Rui Paula",
          type: "Vacsora · finomabb porto-i este",
          description: "Erős választás a teljes Porto-nap vagy az esti megérkezés után.",
          tags: ["🐷 sertés", "🥩 marha"],
          googleRating: "4.6",
          priceLevel: "€€€€",
          meta: "Largo de S. Domingos 18",
          url: "https://www.google.com/maps/search/DOP+Restaurant+Rui+Paula+Porto"
        },
        {
          name: "Conga – Casa das Bifanas",
          type: "Brunch / ebéd · Aliados",
          description: "Bifana, gyors és klasszikus porto-i ebéd.",
          tags: ["🐷 sertés"],
          googleRating: "4.5",
          priceLevel: "€",
          meta: "R. do Bonjardim 318",
          url: "https://www.google.com/maps/search/Conga+Casa+das+Bifanas+Porto"
        },
        {
          name: "MUU Steakhouse",
          type: "Búcsúvacsora · Aliados",
          description: "Jó húsos zárás a portói nap végére.",
          tags: ["🥩 marha"],
          googleRating: "4.9",
          priceLevel: "€€€€",
          meta: "R. do Almada 149A",
          url: "https://www.google.com/maps/search/MUU+Steakhouse+Porto"
        },
        {
          name: "Café Majestic",
          type: "Kávézó · Santa Catarina",
          description: "A legszebb porto-i kávés pihenőpont.",
          tags: ["☕ kávé", "🥐 pastry"],
          googleRating: "4.2",
          priceLevel: "€€€",
          meta: "R. de Santa Catarina 112",
          url: "https://www.google.com/maps/search/Cafe+Majestic+Porto+Rua+Santa+Catarina"
        }
      ]
    },
    {
      city: "Pinhão / Douro",
      items: [
        {
          name: "Quinta do Bomfim",
          type: "Kóstoló · praktikus, közeli választás",
          description: "A fő kóstolóhoz erős opció, ha már nem akartok vezetni.",
          tags: ["🍷 kóstoló", "🌊 river view"],
          googleRating: "4.7",
          priceLevel: "€€€",
          meta: "Pinhão, Douro-part",
          url: "https://www.symington.com/visitar/quinta-do-bomfim/"
        },
        {
          name: "Quinta de la Rosa",
          type: "Borászat + szállás + vacsora",
          description: "Ha mindent egy helyen akartok megoldani, ez az egyik legjobb verzió.",
          tags: ["🍷 borászat", "🛏 szállás"],
          googleRating: "4.7",
          priceLevel: "€€€€",
          meta: "Pinhão környéke",
          url: "https://www.quintadelarosa.com/"
        }
      ]
    }
  ],
  sights: [
    { name: "Jerónimos kolostor", googleRating: "4.5", when: "2. nap · Ápr. 4", price: "10€/fő", detail: "Belém, UNESCO. A lisszaboni nap legerősebb történelmi pontja.", wikipedia: "https://hu.wikipedia.org/wiki/Jer%C3%B3nimos-kolostor", maps: "https://www.google.com/maps/search/Jer%C3%B3nimos+Monastery+Lisbon" },
    { name: "Belém-torony", googleRating: "4.6", when: "2. nap · Ápr. 4", price: "8€/fő", detail: "Folyóparti erőd, rövid sétával jól összeköthető a Jerónimosszal.", wikipedia: "https://hu.wikipedia.org/wiki/Bel%C3%A9m-torony", maps: "https://www.google.com/maps/search/Torre+de+Bel%C3%A9m+Lisbon" },
    { name: "Pena kastély", googleRating: "4.4", when: "3. nap · Ápr. 5", price: "20€/fő", detail: "Sintra zászlóshajója, korai idősávval a legjobb.", wikipedia: "https://en.wikipedia.org/wiki/Pena_Palace", maps: "https://www.google.com/maps/search/Pena+Palace+Sintra" },
    { name: "Quinta da Regaleira", googleRating: "4.8", when: "3. nap · Ápr. 5", price: "8€/fő", detail: "Titokzatos kert, iniciatikus kút, rövid sintrai párosítás a Penával.", wikipedia: "https://en.wikipedia.org/wiki/Quinta_da_Regaleira", maps: "https://www.google.com/maps/search/Quinta+da+Regaleira+Sintra" },
    { name: "Óbidos óváros", googleRating: "4.7", when: "5. nap · Ápr. 7", price: "Ingyenes", detail: "Porta da Vila, Rua Direita és rövid várfal-szakasz 45–60 percben.", wikipedia: "https://en.wikipedia.org/wiki/%C3%93bidos,_Portugal", maps: "https://www.google.com/maps/search/%C3%93bidos+Portugal" },
    { name: "Nazaré – Sítio + Forte", googleRating: "4.7", when: "5. nap · Ápr. 7", price: "Ingyenes / opcionális", detail: "Miradouro do Suberco, szentély és a híres hullámnéző pont.", wikipedia: "https://en.wikipedia.org/wiki/Nazar%C3%A9,_Portugal", maps: "https://www.google.com/maps/search/Miradouro+do+Suberco+Nazar%C3%A9" },
    { name: "Mosteiro da Batalha", googleRating: "4.7", when: "5. nap · Ápr. 7", price: "helyszíni jegy", detail: "UNESCO monostor, rövid megállóra is kiváló.", wikipedia: "https://hu.wikipedia.org/wiki/Batalhai_kolostor", maps: "https://www.google.com/maps/search/Batalha+Monastery" },
    { name: "Fátima szentély", googleRating: "4.8", when: "5. nap · Ápr. 7", price: "Ingyenes", detail: "Capela das Aparições, a nagy tér és a bazilika a lényegi rövid kör.", wikipedia: "https://hu.wikipedia.org/wiki/F%C3%A1tima_(Portug%C3%A1lia)", maps: "https://www.google.com/maps/search/Sanctuary+of+F%C3%A1tima" },
    { name: "São Bento pályaudvar", googleRating: "4.7", when: "6. nap · Ápr. 8", price: "Ingyenes", detail: "20 000 azulejo csempe, röviden is nagy élmény.", wikipedia: "https://hu.wikipedia.org/wiki/S%C3%A3o_Bento_p%C3%A1lyaudvar_(Porto)", maps: "https://www.google.com/maps/search/S%C3%A3o+Bento+Station+Porto" },
    { name: "Sé do Porto", googleRating: "4.6", when: "6. nap · Ápr. 8", price: "részben ingyenes", detail: "Katedrális és kilátópont együtt működik a belvárosi körben.", wikipedia: "https://en.wikipedia.org/wiki/Porto_Cathedral", maps: "https://www.google.com/maps/search/S%C3%A9+do+Porto" },
    { name: "Clérigos torony", googleRating: "4.5", when: "6. nap · Ápr. 8", price: "8€/fő", detail: "Porto egyik klasszikus panorámapontja.", wikipedia: "https://en.wikipedia.org/wiki/Cl%C3%A9rigos_Church", maps: "https://www.google.com/maps/search/Cl%C3%A9rigos+Tower+Porto" },
    { name: "Livraria Lello", googleRating: "4.1", when: "6. nap · Ápr. 8", price: "jegyes belépés", detail: "Előre időponttal érdemes, különben sorban állós.", wikipedia: "https://en.wikipedia.org/wiki/Livraria_Lello", maps: "https://www.google.com/maps/search/Livraria+Lello" },
    { name: "Ribeira + Dom Luís I híd + Gaia", googleRating: "4.8", when: "6. nap · Ápr. 8", price: "Ingyenes / kóstoló opcionális", detail: "A legklasszikusabb Porto-élménycsomag egy blokkban.", wikipedia: "https://en.wikipedia.org/wiki/Dom_Lu%C3%ADs_I_Bridge", maps: "https://www.google.com/maps/search/Dom+Lu%C3%ADs+I+Bridge" },
    { name: "N222 panorámaút", googleRating: "4.8", when: "7. nap · Ápr. 9", price: "Ingyenes", detail: "A Douro egyik legszebb autós szakasza Régua és Pinhão között.", wikipedia: "https://en.wikipedia.org/wiki/EN222", maps: "https://www.google.com/maps/search/N222+Douro" },
    { name: "Casal de Loivos kilátó", googleRating: "4.8", when: "7. nap · Ápr. 9", price: "Ingyenes", detail: "Klasszikus képeslapnézet Pinhão fölött.", wikipedia: "https://en.wikipedia.org/wiki/Pinh%C3%A3o,_Alij%C3%B3", maps: "https://www.google.com/maps/search/Casal+de+Loivos+Viewpoint" },
    { name: "Pinhão Station", googleRating: "4.4", when: "7. nap · Ápr. 9", price: "Ingyenes", detail: "25 azulejo panellel az egyik leghangulatosabb állomás a régióban.", wikipedia: "https://en.wikipedia.org/wiki/Pinh%C3%A3o", maps: "https://www.google.com/maps/search/Pinh%C3%A3o+Station" }
  ],
  practical: [
    {
      title: "⚠️ Foglalások",
      items: [
        "Jerónimos és Pena időpontra foglalva a legjobb.",
        "Autóbérlés csak április 7 reggeltől kell.",
        "Livraria Lello időpontfoglalás erősen ajánlott.",
        "Pinhão szállás és 1 douro-i borkóstoló előre.",
        "DOP és MUU vacsora foglalás."
      ]
    },
    {
      title: "🚗 Autó",
      items: [
        "Felvétel Lisszabonban április 7 reggel.",
        "04.08-ra Portóban egyszer leteszed, utána gyalogos nap legyen.",
        "Felső belvároshoz Saba Cardosas, folyóparthoz Saba Ribeira a praktikusabb.",
        "A Douro-napon a gyors kijutás Porto felől A4/A24, a szép rész pedig a Régua–Pinhão N222.",
        "Leadás LIS reptérnél április 10-én.",
        "A visszaútnál már ne a panorámautat erőltesd újra."
      ]
    },
    {
      title: "🛏 Douro / Pinhão",
      items: [
        "Praktikus kombináció: The Vintage House + Quinta do Bomfim kóstoló.",
        "Hangulatos all-in-one verzió: Quinta de la Rosa.",
        "LBV House modernebb, panorámásabb alternatíva.",
        "Pinhãóban az esti kóstoló már autó nélkül legyen."
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
