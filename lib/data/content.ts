export type Project = {
    years: string;
    title: string;
    partner?: string;
    funder?: string;
    status: 'ongoing' | 'completed';
    report?: string;
};

export const researchProjects: Project[] = [
    { years: '2008–2012', title: 'Regional Red List of Birds in Mongolia', partner: 'Dutch Government (NEMO-2), World Bank, Ministry of Nature, Environment and Tourism', status: 'completed' },
    { years: '2009–2010', title: "The status and distribution of Pallas's Fish Eagle in Mongolia", partner: 'The Peregrine Fund, WSC', status: 'completed' },
    { years: '2009–2011', title: 'Avian influenza and bird migration in Mongolia', partner: 'OIE, Japan', status: 'completed' },
    { years: '2008–2010', title: 'Taxonomy and barcoding of birds', partner: 'Oslo University, Norway', status: 'completed' },
    { years: '2008–2009', title: 'Migration studies of geese in Mongolia', partner: 'Japanese Government', status: 'completed' },
    { years: '2008–2009', title: 'A risk assessment of high-power electric lines in Mongolia', partner: 'Asia Research Centre, Korea Foundation for Advanced Studies', status: 'completed' },
    { years: '2007–2008', title: 'Taxonomy, biology and ecology of Upland Buzzard', partner: 'Asian Research Centre, Korea Foundation for Advanced Studies', status: 'completed' },
    { years: '2007–2008', title: 'Mitigating raptor electrocutions in Mongolia', partner: 'IBRC Eilat; Lynette International Foundation; EDM International', status: 'completed' },
    { years: '2005', title: 'Importance of North-East Mongolia for Pacific Golden Plovers', partner: 'WIWO', status: 'completed' },
    { years: '2004–2006', title: 'Satellite tracking of Black Stork in Mongolia', partner: 'Ministry of Nature and Environment of Czech; Union of Czech and Slovak Zoological Gardens', status: 'completed' },
    { years: '2004–2005', title: 'Wintering waterfowl census in the Tuul River valley', partner: 'Khustai National Park, Mongolia', status: 'completed' },
    { years: '2004', title: 'Important Bird Areas (IBA) survey in Eastern Mongolia', partner: 'RSPB, WCS', status: 'completed' },
    { years: '2003–2005', title: "Relationships of raptors and Brandt's Vole", partner: 'GEF/UNDP', status: 'completed' },
    { years: '2001', title: 'Satellite tracking of White-naped Crane in Eastern Mongolia', partner: 'Yamashina Institute for Ornithology, Japan', status: 'completed' },
    { years: '2000–2001', title: 'Saxaul Sparrow in the Mongolian Gobi', partner: 'Dr. Kate Oddie, Darwin Initiative, Zoological Society UK', status: 'completed' },
    { years: '1999–2001', title: 'Globally threatened White-naped Crane: habitat use and livestock grazing', partner: 'Institute of Avian Research, Germany; BirdLife International', status: 'completed' },
    { years: '1998–2007', title: 'Saker Falcon in Mongolia: research and conservation', partner: 'Environmental Research and Wildlife Development Agency, UAE', status: 'completed' },
    { years: '1995', title: 'Mongolian–German joint biodiversity research in Eastern Mongolia', partner: 'German researchers', status: 'completed' },
    { years: '1994', title: 'Russian–Mongolian joint crane conservation project', partner: 'Daurian Strictly Protected Area, Russia', status: 'completed' },
];

export const conservationProjects: Project[] = [
    { years: '2018–present', title: 'Amur Falcon migration and roost-site protection', partner: 'Wildlife Science and Conservation Center of Mongolia', funder: 'Critical Ecosystem Partnership Fund', status: 'ongoing' },
    { years: '2016–present', title: 'Saker Falcon population monitoring and nest protection', partner: 'Environmental Research and Wildlife Development Agency (UAE)', funder: 'ERWDA', status: 'ongoing' },
    { years: '2015–present', title: 'Raptor electrocution mitigation on power lines', partner: 'National Power Transmission Grid JSC', funder: 'Oriental Bird Club', status: 'ongoing' },
    { years: '1999–present', title: 'Important Bird & Biodiversity Area (IBA) network', partner: 'BirdLife International, RSPB', status: 'ongoing' },
    { years: '2010–2019', title: 'White-naped Crane habitat conservation in Eastern Mongolia', partner: 'Institute of Avian Research, Germany', funder: 'BirdLife International', status: 'completed' },
    { years: '2008–2016', title: 'Pallas\'s Fish Eagle conservation in the Great Lakes Depression', partner: 'The Peregrine Fund', status: 'completed' },
];

export const projectSites = [
    { name: 'Amur Falcon roosts', region: 'Eastern Mongolia', lat: 47.9, lng: 113.5 },
    { name: 'Saker Falcon nesting cliffs', region: 'South Gobi', lat: 43.4, lng: 104.0 },
    { name: 'White-naped Crane breeding grounds', region: 'Dornod Steppe', lat: 48.5, lng: 114.8 },
    { name: "Pallas's Fish Eagle lakes", region: 'Great Lakes Depression', lat: 48.8, lng: 93.2 },
    { name: 'IBA network (Ugii Lake, Khustai)', region: 'Central Mongolia', lat: 47.3, lng: 102.8 },
    { name: 'Saxaul Sparrow study sites', region: 'Trans-Altai Gobi', lat: 43.0, lng: 99.6 },
];

export const partners = [
    'Mongolian Academy of Science',
    'Ministry of Nature, Environment and Tourism',
    'Mongolian Ornithological Foundation',
    'Mongolian State Agriculture University',
    'National University of Mongolia',
    'Khustai National Park',
    'Royal Society for Bird Protection – UK (RSPB)',
    'Oriental Bird Club – UK',
    'Halle-Wittenberg University – Germany',
    'Yamashina Institute for Ornithology – Japan',
    'Wilhelmshaven Avian Research Institute – Germany',
    'International Crane Foundation',
    'BirdLife International',
    'The Peregrine Fund',
    'UNDP',
    'IBRC Eilat, Israel',
];

export const publications = [
    {
        category: 'Mongolia Red List of Birds',
        title: 'Regional Red List of Birds in Mongolia',
        about: 'The first comprehensive regional assessment of Mongolia\'s avifauna, reviewing the extinction risk of all regularly occurring species and identifying national conservation priorities.',
        publisher: 'Mongolian Ornithological Society & Zoological Society of London',
        place: 'Ulaanbaatar, Mongolia',
        pages: '278 pages',
        reference: 'Gombobaatar, S. et al. (2011). Regional Red List of Birds in Mongolia. MOS & ZSL.',
    },
    {
        category: 'Books & Manual guides',
        title: 'Birds of Mongolia — Field Guide',
        about: 'An illustrated field guide covering identification, status and distribution of Mongolian birds, with bilingual English–Mongolian text and distribution maps.',
        publisher: 'Mongolian Ornithological Society',
        place: 'Ulaanbaatar, Mongolia',
        pages: '324 pages',
        reference: 'Gombobaatar, S. (2020). Birds of Mongolia. MOS.',
    },
    {
        category: 'Ornis Mongolica Journal',
        title: 'Ornis Mongolica',
        about: 'The Society\'s peer-reviewed ornithological journal publishing research on the birds of Mongolia and Central Asia. Back issues are freely downloadable.',
        publisher: 'Mongolian Ornithological Society',
        place: 'Ulaanbaatar, Mongolia',
        pages: 'Annual volumes',
        reference: 'Ornis Mongolica, Vols. 1–6.',
    },
    {
        category: 'Brochures',
        title: 'Bird Conservation Brochures',
        about: 'Public-awareness brochures on threatened species, electrocution risk, illegal trapping and responsible birdwatching.',
        publisher: 'Mongolian Ornithological Society',
        place: 'Ulaanbaatar, Mongolia',
        pages: '8–16 pages each',
        reference: 'MOS awareness series.',
    },
    {
        category: 'Mongolian Bird List',
        title: 'Checklist of the Birds of Mongolia',
        about: 'The official national checklist with taxonomic order, English, Mongolian and scientific names, and national status codes.',
        publisher: 'Mongolian Ornithological Society',
        place: 'Ulaanbaatar, Mongolia',
        pages: '52 pages',
        reference: 'MOS (2024). Checklist of the Birds of Mongolia.',
    },
    {
        category: 'Reports',
        title: 'Annual & Project Reports',
        about: 'Annual activity reports and technical reports from research and conservation projects.',
        publisher: 'Mongolian Ornithological Society',
        place: 'Ulaanbaatar, Mongolia',
        pages: 'Varies',
        reference: 'MOS annual reports.',
    },
];
