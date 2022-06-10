import { filterMissions } from "../filterMissions";

const missions = [
  {
    description:
      "Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.",
    id: "9D1B7E0",
    website: "http://www.thaicom.net/en/satellites/overview",
    name: "Thaicom",
    manufacturers: ["Orbital ATK"],
    twitter: "https://twitter.com/thaicomplc",
    wikipedia: "https://en.wikipedia.org/wiki/Thaicom",
  },
  {
    description:
      "Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.",
    id: "F4F83DE",
    website: "https://www.telesat.com/",
    name: "Telstar",
    manufacturers: ["SSL"],
    twitter: null,
    wikipedia: "https://en.wikipedia.org/wiki/Telesat",
  },
  {
    description:
      "In 2017, Iridium began launching Iridium NEXT, a second-generation worldwide network of telecommunications satellites, consisting of 66 active satellites, with another nine in-orbit spares and six on-ground spares. These satellites will incorporate features such as data transmission that were not emphasized in the original design. The constellation will provide L-band data speeds of up to 128 kbit/s to mobile terminals, up to 1.5 Mbit/s to Iridium Pilot marine terminals, and high-speed Ka-band service of up to 8 Mbit/s to fixed/transportable terminals. The next-generation terminals and service are expected to be commercially available by the end of 2018. However, Iridium's proposed use of its next-generation satellites has raised concerns the service will harmfully interfere with GPS devices. The satellites will incorporate a secondary payload for Aireon, a space-qualified ADS-B data receiver. This is for use by air traffic control and, via FlightAware, for use by airlines. A tertiary payload on 58 satellites is a marine AIS ship-tracker receiver, for Canadian company exactEarth Ltd. Iridium can also be used to provide a data link to other satellites in space, enabling command and control of other space assets regardless of the position of ground stations and gateways.",
    id: "F3364BF",
    website: "https://www.iridiumnext.com/",
    name: "Iridium NEXT",
    manufacturers: ["Orbital ATK"],

    twitter: "https://twitter.com/IridiumBoss?lang=en",
    wikipedia: "https://en.wikipedia.org/wiki/Iridium_satellite_constellation",
  },
  {
    description:
      "Commercial Resupply Services (CRS) are a series of contracts awarded by NASA from 2008–2016 for delivery of cargo and supplies to the International Space Station (ISS) on commercially operated spacecraft. The first CRS contracts were signed in 2008 and awarded $1.6 billion to SpaceX for 12 cargo transport missions and $1.9 billion to Orbital Sciences for 8 missions, covering deliveries to 2016. In 2015, NASA extended the Phase 1 contracts by ordering an additional three resupply flights from SpaceX and one from Orbital Sciences. After additional extensions late in 2015, SpaceX is currently scheduled to have a total of 20 missions and Orbital 10. SpaceX began flying resupply missions in 2012, using Dragon cargo spacecraft launched on Falcon 9 rockets from Space Launch Complex 40 at Cape Canaveral Air Force Station, Cape Canaveral, Florida. Orbital Sciences began deliveries in 2013 using Cygnus spacecraft launched on the Antares rocket from Launch Pad 0A at the Mid-Atlantic Regional Spaceport (MARS), Wallops Island, Virginia. A second phase of contracts (known as CRS2) were solicited and proposed in 2014. They were awarded in January 2016 to Orbital ATK, Sierra Nevada Corporation, and SpaceX, for cargo transport flights beginning in 2019 and expected to last through 2024.",
    id: "EE86F74",
    website: "https://www.spacex.com/",
    name: "Commercial Resupply Services",
    manufacturers: ["SpaceX"],
  },
  {
    description:
      "SES S.A. is a communications satellite owner and operator providing video and data connectivity worldwide to broadcasters, content and internet service providers, mobile and fixed network operators, governments and institutions, with a mission to “connect, enable, and enrich”. SES operates more than 50 geostationary orbit satellites and 16 medium Earth orbit satellites. These comprise the well-known European Astra TV satellites, the O3b data satellites and others with names including AMC, Ciel, NSS, Quetzsat, YahSat and SES.",
    id: "6C42550",
    website: "https://www.ses.com/",
    name: "SES",
    manufacturers: ["Orbital ATK", "Boeing", "Airbus Defence and Space"],
    twitter: "https://twitter.com/SES_Satellites",
    wikipedia: "https://en.wikipedia.org/wiki/SES_S.A.",
  },
  {
    description:
      "The JSAT constellation is a communication and broadcasting satellite constellation formerly operated by JSAT Corporation and currently by SKY Perfect JSAT Group. It has become the most important commercial constellation in Japan, and the fifth of the world. It has practically amalgamated all private satellite operators in Japan, with only B-SAT left as a local competitor.",
    id: "FE3533D",
    website: "https://www.jsat.net/en/",
    name: "JCSAT",
    manufacturers: ["SSL"],
    twitter: null,
    wikipedia: "https://en.wikipedia.org/wiki/JSAT_Corporation",
  },
  {
    description:
      "Asia Satellite Telecommunications Holdings Limited known as its brand name AsiaSat is a commercial operator of communication spacecraft. AsiaSat is based in Hong Kong but incorporated in Bermuda.",
    id: "593B499",
    website: "https://www.asiasat.com/",
    name: "AsiaSat",
    manufacturers: ["SSL"],
    twitter: "https://twitter.com/asia_satellite",
    wikipedia: "https://en.wikipedia.org/wiki/AsiaSat",
  },
  {
    description:
      "Orbcomm Generation 2 (OG2) second-generation satellites are intended to supplement and eventually replace the current first generation constellation. Eighteen satellites were ordered by 2008—nominally intended to be launched in three groups of six during 2010–2014—and by 2015 have all been launched, on three flights. Orbcomm has options for a further thirty OG2 spacecraft. The satellites were launched by SpaceX on the Falcon 9 launch system. Originally, they were to launch on the smaller Falcon 1e rocket.",
    id: "CE91D46",
    website: "https://www.orbcomm.com/",
    name: "Orbcomm OG2",
    manufacturers: ["Sierra Nevada Corporation"],
    twitter: "https://twitter.com/orbcomm_inc",
    wikipedia: "https://en.wikipedia.org/wiki/Orbcomm_(satellite)#Orbcomm-OG2",
  },
  {
    description:
      "ABS, formerly Asia Broadcast Satellite, is a global satellite operator based in Hong Kong and officially incorporated in Bermuda. Its services include direct-to-home and satellite-to-cable TV distribution, cellular services, and internet services. Operating 6 communication satellites, the satellite fleet currently covers 93% of the world’s population including the Americas, Africa, Asia Pacific, Europe, the Middle East, Russia and Commonwealth of Independent States.",
    id: "2CF444A",
    website: "http://www.absatellite.com/",
    name: "ABS",
    manufacturers: ["Boeing"],
    twitter: null,
    wikipedia: "https://en.wikipedia.org/wiki/ABS_(satellite_operator)",
  },
  {
    description:
      "Eutelsat S.A. is a European satellite operator. Providing coverage over the entire European continent, the Middle East, Africa, Asia and the Americas, it is the world's third largest satellite operator in terms of revenues.",
    id: "F7709F2",
    website: "https://www.eutelsat.com/en/home.html#",
    name: "Eutelsat",
    manufacturers: ["Boeing"],
    twitter:
      "https://twitter.com/Eutelsat_SA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    wikipedia: "https://en.wikipedia.org/wiki/Eutelsat",
  },
];

const filteredMissions = [
  {
    description:
      "Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.",
    id: "F4F83DE",
    website: "https://www.telesat.com/",
    name: "Telstar",
    manufacturers: ["SSL"],
    twitter: null,
    wikipedia: "https://en.wikipedia.org/wiki/Telesat",
  },
];

test("filters array to only include mission names that match search term", () => {
  expect(filterMissions(missions, "Telst")).toStrictEqual(filteredMissions);
});
