"use client"
import Image from "next/image"
import { NameCard } from "@/components/ui/NameCard"
import { motion } from "framer-motion";

const NAME_CARD_DATA = [
  {
    id: 0,
    name: "Madhureema Balasubramani Rupa",
    role: "Co-President",
    program: "3rd Year Health Sciences",
    imagesrc: "/images/exec-images/Madhureema_Balasubramani_Rupa-Co-President.webp",
  },
  {
    id: 1,
    name: "Kaliyha Dennis",
    role: "Co-President",
    program: "4th Year Health Sciences",
    imagesrc: "/images/exec-images/Kaliyha_Dennis-Co-President.webp",
  },
  {
    id: 2,
    name: "Saachi Jain",
    role: "Marketing Director",
    program: "2nd Year Health Sciences",
    imagesrc: "/images/exec-images/Saachi_Jain-Marketing_Director.webp",
  },
  {
    id: 3,
    name: "Zara Sheikh",
    role: "Marketing Coordinator",
    program: "2nd Year Life Sciences & Minor in Psychology",
    imagesrc: "/images/exec-images/Zara_Sheikh-Marketing_Coordinator.webp",
  },
  {
    id: 4,
    name: "Norah Burman",
    role: "Administrative Director",
    program: "3rd Year Life Sciences",
    imagesrc: "/images/exec-images/Norah_Burman-Administrative_Director.webp",
  },
  {
    id: 5,
    name: "Paige Bain",
    role: "Fundraising Director",
    program: "4th Year Health Sciences",
    imagesrc: "/images/exec-images/Paige_Bain-Fundraising_Director.webp",
  },
  {
    id: 6,
    name: "Soha Kar",
    role: "Outreach Director",
    program: "3rd Year Health Sciences",
    imagesrc: "/images/exec-images/Soha_Kar-Outreach_Director.webp",
  },
  {
    id: 7,
    name: "Mathura Manoranjan",
    role: "Outreach Coordinator",
    program: "2nd Year Health Sciences",
    imagesrc: "/images/exec-images/Mathura_Manoranjan-Outreach_Coordinator.webp",
  },
  
  {
    id: 8,
    name: "Ronin Dos Santos",
    role: "Outreach Coordinator",
    program: "2nd Year Health Sciences",
    imagesrc: "/images/exec-images/Ronin_Dos_Santos-Outreach_Coordinator.webp",
  },

  {
    id: 9,
    name: "Mathews Antony",
    role: "Fundraising Director",
    program: "3rd Year Health Sciences",
    imagesrc: "/images/exec-images/Mathews_Antony-Fundraising_Director.webp",
  },
  {
    id: 10,
    name: "Fiona Maguire",
    role: "Conference Director",
    program: "4th Year Biology",
    imagesrc: "/images/exec-images/Fiona_Maguire-Conference_Director.webp",
  },
  {
    id: 11,
    name: "Falaq Mansuri",
    role: "Conference Director",
    program: "3rd Year Health Sciences",
    imagesrc: "/images/exec-images/Falaq_Mansuri-Conference_Director.webp",
  },
  {
    id: 12,
    name: "Ishaann Bakirathan",
    role: "Conference Coordinator",
    program: "3rd Year Health Sciences",
    imagesrc: "/images/exec-images/Ishaann_Bakirathan-Conference_Coordinator.webp",
  },
  {
    id: 13,
    name: "Raiya Nerooban",
    role: "Conference Coordinator",
    program: "2nd Year Health Sciences",
    imagesrc: "/images/exec-images/Raiya_Nerooban-Conference_Coordinator.webp",
  },
  {
    id: 14,
    name: "Ishita Chohan",
    role: "Socials Co-Director",
    program: "2nd Year Health Sciences",
    imagesrc: "/images/exec-images/Ishita_Chohan-Socials_Co-Director.webp",
  },
  {
    id: 15,
    name: "Hope Olaniyan",
    role: "Socials Co-Director",
    program: "2nd Year Nursing",
    imagesrc: "/images/exec-images/Hope_Olaniyan-Socials_Co-Director.webp",
  },
  {
    id: 16,
    name: "Victoria Yu",
    role: "First Year Representative",
    program: "1st Year Health Sciences",
    imagesrc: "/images/exec-images/Victoria_Yu-First_Year_Representative.webp",
  },
  {
    id: 17,
    name: "Judy Moon",
    role: "First Year Representative",
    program: "1st Year Health Sciences",
    imagesrc: "/images/exec-images/Judy_Moon-First_Year_Representative.webp",
  },
];

const groupedTeams = {
  executives: NAME_CARD_DATA.filter(p =>
    p.role.includes("President")
  ),

  marketing: NAME_CARD_DATA.filter(p =>
    p.role.includes("Marketing")
  ),

  admin: NAME_CARD_DATA.filter(p =>
    p.role.includes("Administrative")
  ),

  fundraising: NAME_CARD_DATA.filter(p =>
    p.role.includes("Fundraising")
  ),

  outreach: NAME_CARD_DATA.filter(p =>
    p.role.includes("Outreach")
  ),

  conference: NAME_CARD_DATA.filter(p =>
    p.role.includes("Conference")
  ),

  socials: NAME_CARD_DATA.filter(p =>
    p.role.includes("Socials")
  ),

  firstYears: NAME_CARD_DATA.filter(p =>
    p.role.includes("First Year")
  ),
};

export function TeamIntro() {
  return (
    <section className="
      mx-auto max-w-7xl px-6 py-12 space-y-14
      bg-[radial-gradient(circle_at_left,_var(--secondary)_0%,_transparent_55%),_radial-gradient(circle_at_right,_var(--secondary)_0%,_transparent_55%),_white]
    ">


      <TeamSection title="Executive Team" members={groupedTeams.executives}/>
      <TeamSection title="Marketing Team" members={groupedTeams.marketing} />
      <TeamSection title="Administrative Team" members={groupedTeams.admin} />
      <TeamSection title="Fundraising Team" members={groupedTeams.fundraising} />
      <TeamSection title="Outreach Team" members={groupedTeams.outreach} />
      <TeamSection title="Conference Team" members={groupedTeams.conference} />
      <TeamSection title="Socials Team" members={groupedTeams.socials} />
      <TeamSection title="First Year Team" members={groupedTeams.firstYears} />

    </section>
  );
}

function TeamSection( {title, members}: {title: string;members: any[];}) {
  if (!members.length) return null;
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-300" />
        <h2 className="text-2xl font-bold text-accent text-center whitespace-nowrap">{title}</h2>
        <div className="flex-1 h-px bg-gray-300" />
      </div>
        <div className="flex flex-wrap gap-15 justify-center pt-10">
            {members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
              >
                <NameCard
                  name={member.name}
                  role={member.role}
                  program={member.program}
                  imagesrc={member.imagesrc}
                />
              </motion.div>
              ))}
        </div>
    </div>
  );
}