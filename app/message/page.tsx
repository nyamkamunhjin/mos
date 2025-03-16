import React from "react";
import Image from "next/image";

export default function MessagePage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 mt-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center">
          MESSAGE FROM THE DIRECTOR
        </h1>
        
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="w-full md:w-1/3 relative">
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg shadow-lg">
              <Image 
                src="/Gombobaatar.jpg" 
                alt="Dr. Gombobaatar Sundev, Director of the Mongolian Ornithological Society"
                fill
                className="hover:scale-[1.2] transition-transform duration-300 object-cover scale-115"
                priority
              />
            </div>
            <div className="text-center mt-3 font-medium text-gray-700">
              Dr. Gombobaatar Sundev
              <div className="text-sm text-gray-600">Director, Mongolian Ornithological Society</div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100">
            <p className="text-lg mb-4 italic">Dear Sir/Madam,</p>
            
            <p className="mb-4 italic">
              We greatly appreciate your visit to our website. Hope you enjoy our site as you get knowledge and information 
              about our team and birds in Mongolia. Bird is one of the most interesting and beautiful creatures of our world. 
              That&apos;s why most people like and love birds, including our team, many scientists, readers, and you.
            </p>
            
            <p className="mb-4 italic">
              Since the time Mongolian Ornithological Society (MOS) was established in Mongolia as a NGO that is dedicated to 
              birds and their habitats&apos; research and conservation, the organization has been extensively running various activities 
              including research projects, conservation of birds&apos; habitats, education, publication and birding tours in Mongolia.
            </p>
            
            <p className="mb-4 italic">
              All these activities are integrated under our mission: Support science-oriented initiatives and actions for birds; 
              save birdlife and their habitats for the future; solve the conflicts between humans and birdlife.
            </p>
          </div>
        </div>
        
        <div className="prose max-w-none">
          <p className="mb-4 italic">
            Our nearest aim is to establish the National Bird Data Base covering all species, photographs, information and data on 
            field identification, taxonomy, number, status, distribution, breeding ecology, behavior, threats and conservation. 
            We hope you will contribute your idea and share your experiences.
          </p>
          
          <p className="mb-4 italic">
            The Society has been closely collaborating with Ornithological Laboratory at the National University of Mongolia on 
            educating undergraduate and postgraduate students in order to train well-educated ornithologists&apos; generations and 
            bird conservationists in the country. Your collaborations, encouragements and supports through becoming a member, 
            participating in professional birding trip, and donating books, field equipment, and others for these activities are 
            most welcomed.
          </p>
          
          <p className="mb-6 italic">
            We wish you the strongest health, happiness, success and future collaborations.
          </p>
          
          <p className="font-medium italic">
            Yours sincerely,<br />
            Dr. Gombobaatar Sundev<br />
            Director of the Mongolian Ornithological Society
          </p>
        </div>
      </div>
    </div>
  );
} 