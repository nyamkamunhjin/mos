"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function MembersPage() {
  const members = [
    {
      name: "Prof. D.SUMIYA",
      title: "An honorary member",
      imageUrl: "/members/Sumiya.jpg",
      bio: "Prof. D. Sumiya has more than 20 years' experience in studying birds of Khuvsgul Lake with Russian colleagues. His most famous monograph is \"Birds of Kuvsgul Lake and its surrounding territories\". He is one of the founders of the Ornithological Laboratory at NUM and has worked at the University more than 30 years. The main topic of his bird research is ecology of Gulls and rare bird conservation in Mongolia. In recent years, he is working on breeding biology and conservation of steppe raptors with Gomboo. He is a famous lecturer of Ornithology in Mongolia and has been training new generation of Mongolian ornithologists for 40 years. He has published scientific papers in Mongolian, Russian, and German, and is currently being translated into English. You can see his co-author publications from the publication list.",
    },
    {
      name: "Dr. S.GOMBOBAATAR",
      title: "Founder and Director",
      imageUrl: "/Gombobaatar.JPG",
      bio: "He is one of the founders of the Society in 1999. Since then, he has been extensively dealing with activities on bird research, conservation, and international collaborations for the Society. He is also head of the Laboratory of Ornithology, Zoology Department of School of Biology and Biotechnology at National University of Mongolia. Gomboo wrote his master thesis on Cranes of  Mongolia in 1996 and Ph.D. thesis on Saker Falcon in Mongolia in 2006 and successfully completed post doctorate programme at the Ben Gurion University, Isreal in 2007 (Prof. Reuven Yosef). He has been supervising and coordinating all projects and research works of the Society, and supervising theses of B.Sc., MSc., Ph.D students at his Laboratory. At the meantime, he deals with a wide range activities such as; 2010-present. National focal point for Mongolia for the Scientific and Technical review panel (STRP) of the Ramsar Convention and board member of the Ramsar Convention secretariat of Mongolia, Mongolia; 2010-present. Board member of the Raptor Research Foundation Conservation committee, USA; 2010-present. Member of the Japanese Bird Banding Association, Japan; 2010-present. Member of the International Ornithologist's Union, USA; 2009-present. Recognized Ph.D.  supervisor of the Rashtrasant Tukadoji Maharaj Nagpur University, India (88B/53); 2009-present. Member of the Fauna and Flora International, UK;2008-present. Board member of Goviin Khulan Association, France; 2008-present. Coordinator of the Steppe Forward Programme, joint programme of the Zoological Society of London (ZSL, UK) and National University of Mongolia; 2008-present. National representative of the Asian Raptor Research and Conservation Network, Japan; 2004-present. Honorary member of the Oriental Bird Club , UK;2003-present. National representative of the Anatidae working group of the South East Asia and Siberia region, South-east Asia, Japan; 1999-present. Founder and President of the Mongolian Ornithological Society, Mongolia etc. He wrote several books related to birds and biodiversity in Mongolian and English. He likes to watch and photograph birds and their habitats. He has one of the best bird image databases of Mongolian birds. Gomboo likes traveling and birding in Mongolia and overseas. He has been guiding the Society's birding tours since 1999.",
    },
    {
      name: "CH.UUGANBAYAR MSc.",
      title: "Board member of the society",
      imageUrl: "/members/Uuganbayar_Last.jpg",
      bio: "He is one of the pioneer members of the society. His bachelor and master thesis were written on the diet composition of Sakers in Central Mongolia. Since 2002, Uugan has been working at the Biology Department of Mongolian State University of Agriculture. He successfully organized several birding and ornithological expeditions in Eastern Mongolia. Uugan is interested in studying climate changes and grazing impacts it has on wetland birds in Mongolia.",
    },
    {
      name: "D.Usukhjargal MSc.",
      title: "Board member of the society",
      imageUrl: "/members/Usukhuu.jpg",
      bio: "He has been working at Hustai Nuruu national (www.hustai.mn) park as a Takhi (Przewalski's wild horse) biologist since 2003. He is one of the experts on birds in the areas. He has travelled across Mongolia together with Gomboo's field team members since 2001. He completed his master thesis on Reed Deer in Hustai Nuruu national park in Mongolia in 2002. Now he is studying doctorate training at the National University of Mongolia. He is also a board member of the Mongolian Ornithological Society (www.mos.mn) and a member of German Society of Mammalogy. His main interest is not only bird but also wildlife research and conservation in the protected area, and craniometrical and non-metric skull characteristic studies of mammals and its evaluation of population biology and population genetics.",
    },
    {
      name: "P.Amartuvshin MSc.",
      title: "Board member of the society",
      imageUrl: "/placeholder.svg",
      bio: "He is one of the researchers of the Society. Amaraa wrote his master thesis on Impacts of power lines on bird mortality in 2010. He has participated in research projects such as; 2008-2011. Regional Red List of Birds, in Mongolia supported by Dutch Government (NEMO-2), World Bank, Ministry of Nature, Environment and Tourism, Mongolia; 2009-2010. A risk assessments of high power electric line in Mongolia funded by the Asia Research Centre, Korean Foundation for Advanced Studies, South Korea; 2008-2009. The assessment of high-risk utility lines and conservation of the globally threatened pole-nesting steppe raptors in Mongolia funded by the Oriental Bird Club, UK; 2004. Important Bird Areas (IBA) Survey in Eastern Mongolia together with RSPB researchers funded by the WCS and RSPB. He likes to watch and photograph birds and their habitats. Amaraa likes traveling and birding in Mongolia and overseas. He has been guiding the Society's birding tours since 2009.",
    },
    {
      name: "B.Odkhuu MSc.",
      title: "",
      imageUrl: "/placeholder.svg",
      bio: "Ornithologist of Chinggis Khaan International Airport. He has been working at the airport to reduce bird and aircraft strike hazards since 2008. He wrote his bachelor thesis on \"Saker falcon's sex and age identification by the primer feathers\" in 2006 and master thesis on \"Biological surveys of upland buzzard\" in 2008. He participated in surveys such as Nest platform of steppe raptors in 2003-2005, Black stork migration study of Mongolia in 2004, 2005. He is interested in studying urban birds and raptors. He has experience in study fields such as bird identification, taking samples, photos, bird net use, and bird observation.",
    },
    {
      name: "B.Gantulga Dr.",
      title: "",
      imageUrl: "/placeholder.svg",
      bio: "B.Gantulga received his bachelor and master degree from the National University of Mongolia, Biology faculty in 2007 and 2010. His master thesis was entitled \"Breeding success of Azure-winged magpie (Cyanopica cyanus Pallas, 1776), cooperative breeding\". He has been a member of the Mongolian Ornithological Society since 2005 and has participated in several research projects organized by the Society. He is well experienced in field study, organizing field trips, and birding.",
    },
    {
      name: "O. Soronzonbold MSc.",
      title: "",
      imageUrl: "/placeholder.svg",
      bio: "Soronzon is one of the young members of the society. He is a third year student at the National University of Mongolia's Ecotourism Management class. He is a fourth year student at National University of Mongolia's Biotechnology class. He graduated from 33 high school of Ulaanbaatar in 2008. Soronzon participates in Pallas's fish eagle and Sakers surveys, helps organise conferences and workshops, including the Mongolian Regional Red List of Birds in 2009 and 6th International Conference on Asian Raptors in 2010.  He's interested in studying conservation genetics and biology of birds and wildlife in Mongolia.Soroko hopes to use her knowledge and experience from eco-tourism major to develop and expand the society's bird watching and filming tours. She has been an assistant guide for the Society's birding trip since 2010.",
    },
    {
      name: "B.Yumjirmaa",
      title: "",
      imageUrl: "/members/yuki.jpg",
      bio: "Yumjirmaa graduated from the National University of Mongolia majoring in Ecology and Nature Conservation. She has been a member of the Society since 2009 and has actively participated in conferences, workshops and birding trips. She graduated high school from Selenge soum of Bulgan province. She will continue her education in Ecology by participating in research works and activities conducted by the Society.",
    },
    {
      name: "U.Tuvshin",
      title: "",
      imageUrl: "/members/tuvshin.jpg",
      bio: "Tuvshin graduated from 81th high school of Ulaanbaatar city in 2004 and enrolled in Eco-Asia Institute's Ecology & Conservation class. He graduated in 2008 and received his bachelor's degree. He has been a member of the society since 2009 and is currently studying for his master degree. His research works include observation of birds in \"Avian Influenza Mongolia Project\" – 2008, 2009, \"Great Bustard's migration in North Mongolia\" 2008, 2009, \"Water birds migration\" – 2010.",
    },
    {
      name: "E.Unurjargal",
      title: "",
      imageUrl: "/placeholder.svg",
      bio: "Unuruu is one of the young members of the society. She graduated from the National University of Mongolia's Ecotourism Management class. She graduated from Alameda High School in Alameda, California in 2006, and started her university education at California State University with a major in Molecular and Cellular Biology. She participates in bird watching tours, helps organize conferences and workshops, including the Mongolian Regional Red List of Birds in 2009 and 6th International Conference on Asian Raptors in 2010. Unuruu hopes to use her knowledge and experience from eco-tourism major to develop and expand the society's bird watching and filming tours. She has been an assistant guide for the Society's birding trip since 2010.",
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center">
          OUR MEMBERS
        </h1>
        
        <p className="text-lg mb-10 text-gray-700 max-w-3xl mx-auto text-center">
          Meet the dedicated team behind the Mongolian Ornithological Society. Our members bring diverse expertise and passion to bird research, conservation, and education.
        </p>
        
        {/* Featured Members Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 border-b border-blue-200 pb-3">Leadership</h2>
          <div className="grid grid-cols-1 gap-12">
            {members.slice(0, 2).map((member, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-xl bg-white rounded-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 relative">
                    <div className="aspect-[3/4] lg:aspect-auto lg:h-full w-full relative bg-blue-50">
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="lg:w-2/3 p-6 lg:p-8 bg-gradient-to-br from-white to-blue-50">
                    <div className="border-l-4 border-blue-600 pl-4 mb-4">
                      <h3 className="text-2xl font-bold text-blue-800">{member.name}</h3>
                      {member.title && <p className="text-md font-medium text-blue-600">{member.title}</p>}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Board Members Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Board Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.slice(2, 5).map((member, index) => (
              <Card key={index} className="overflow-hidden border border-blue-100 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col h-full">
                  <div className="h-64 relative">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-lg font-bold">{member.name}</h3>
                        {member.title && <p className="text-sm font-medium opacity-90">{member.title}</p>}
                      </div>
                    </div>
                  </div>
                  <CardContent className="flex-grow bg-white p-4">
                    <p className="text-sm text-gray-700">{member.bio}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Other Members Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Members and Researchers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.slice(5).map((member, index) => (
              <Card key={index} className="overflow-hidden border border-gray-100 shadow hover:shadow-md transition-shadow duration-300">
                <div className="flex p-4 items-center gap-4">
                  <div className="w-16 h-16 relative flex-shrink-0 rounded-full overflow-hidden bg-blue-100">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                    {member.title && <p className="text-xs text-gray-600 mb-1">{member.title}</p>}
                  </div>
                </div>
                <CardContent className="pt-0 pb-4 px-4">
                  <p className="text-sm text-gray-700">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 