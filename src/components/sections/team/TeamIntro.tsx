import { NameCard } from "@/components/ui/NameCard";

const NAME_CARD_DATA = [
  {
    id: 0,
    name: "Madhureema Balasubramani-Rupa",
    role: "Co-President",
    program: "4th Year Health Sciences",
    imagesrc: "/images/team/MadhureemaBalasubramani-Rupa_Co-Pres_4HS.JPG",
  },
  {
    id: 1,
    name: "Soha Kar",
    role: "Co-President",
    program: "4th Year Health Sciences",
    imagesrc: "/images/team/SohaKar_Co-Pres_4HS.JPG",
  },
  {
    id: 2,
    name: "Saachi Jain",
    role: "Marketing Director",
    program: "3rd Year Health Sciences",
    imagesrc: "/images/team/SaachiJain_MarketingDirector_3HS.JPG",
  },
  {
    id: 3,
    name: "Judy Moon",
    role: "Marketing Coordinator",
    program: "2nd Year Health Sciences",
    imagesrc: "/images/team/JudyMoon_MarketingCoordinator_2HS.JPG",
  },
  {
    id: 4,
    name: "Jake Turnbull",
    role: "Marketing Coordinator",
    program: "2nd Year Nursing",
    imagesrc: "/images/team/JakeTurnbull_MarketingCoordinator_2N.JPG",
  },
  {
    id: 5,
    name: "Elena Rastani",
    role: "Secretary",
    program: "2nd Year Life Sciences",
    imagesrc: "/images/team/ElenaRastani_Secretary_2LS.jpg",
  },
  {
    id: 6,
    name: "Mya Norman",
    role: "Finance Director",
    program: "4th Year Health Sciences",
    imagesrc: "/images/team/MyaNorman_FinanceDirector_4HS.JPG",
  },
  {
    id: 7,
    name: "Gloria Li",
    role: "Fundraising Director",
    program: "4th Year Health Sciences",
    imagesrc: "/images/team/GloriaLi_FundraisingDirector_4HS.JPG",
  },
  {
    id: 8,
    name: "Bhaveesha Prem",
    role: "Fundraising Coordinator",
    program: "3rd Year Health Sciences",
    imagesrc: "/images/team/BhaveeshaPrem_FundraisingCoordinator_3HS.jpg",
  },
  {
    id: 9,
    name: "Lani Ogunkoya",
    role: "Fundraising Coordinator",
    program: "2nd Year Health Sciences",
    imagesrc: "/images/team/LaniOgunkoya_FundraisingCoordinator_2HS.JPG",
  },
  {
    id: 10,
    name: "Mathura Manoranjan",
    role: "Outreach Director",
    program: "3rd Year Health Sciences",
    imagesrc: "/images/team/MathuraManoranjan_OutreachDirector_3HS.jpg",
  },
  {
    id: 11,
    name: "Ramneek Dhillon",
    role: "Outreach Coordinator",
    program: "2nd Year Health Sciences",
    imagesrc: "/images/team/RamneekDhillon_OutreachCoordinator_2HS.JPG",
  },
  {
    id: 12,
    name: "Walden Wu",
    role: "Outreach Coordinator",
    program: "2nd Year Health Sciences",
    imagesrc: "/images/team/WaldenWu_OutreachCoordinator_2HS.JPG",
  },
  {
    id: 13,
    name: "Girish Saini",
    role: "Conference Director",
    program: "2nd Year Health Sciences",
    imagesrc: "/images/team/GirishSaini_ConferenceDirector_2HS.JPG",
  },
  {
    id: 14,
    name: "Ishaann Bakirathan",
    role: "Conference Director",
    program: "4th Year Health Sciences",
    imagesrc: "/images/team/Ishaan_Bakirathan_ConferenceDirector_4HS.JPG",
  },
  {
    id: 15,
    name: "Anamika Bimal",
    role: "Conference Coordinator",
    program: "2nd Year Health Sciences",
    imagesrc: "/images/team/AnamikaBimal_ConferenceCoordinator_2HS.JPG",
  },
  {
    id: 16,
    name: "Angela Fitzpatrick",
    role: "First Year Representative",
    program: "1st Year Life Sciences",
    imagesrc: "/images/team/AngelaFitzpatrick_FirstYearRepresentative_1LS.jpg",
  },
  {
    id: 17,
    name: "Sienna Singaram",
    role: "First Year Representative",
    program: "1st Year Health Sciences",
    imagesrc: "/images/team/SiennaSingaram_FirstYearRepresentative_1HS.JPG",
  },
];

const groupedTeams = {
  executives: NAME_CARD_DATA.filter((p) => p.role.includes("President")),

  marketing: NAME_CARD_DATA.filter((p) => p.role.includes("Marketing")),

  admin: NAME_CARD_DATA.filter(
    (p) => p.role.includes("Secretary") || p.role.includes("Finance"),
  ),

  fundraising: NAME_CARD_DATA.filter((p) => p.role.includes("Fundraising")),

  outreach: NAME_CARD_DATA.filter((p) => p.role.includes("Outreach")),

  conference: NAME_CARD_DATA.filter((p) => p.role.includes("Conference")),

  firstYears: NAME_CARD_DATA.filter((p) => p.role.includes("First Year")),
};

export function TeamIntro() {
  return (
    <section
      className="
      mx-auto max-w-7xl px-6 py-12 space-y-14
      bg-[radial-gradient(circle_at_left,_var(--secondary)_0%,_transparent_55%),_radial-gradient(circle_at_right,_var(--secondary)_0%,_transparent_55%),_white]
    "
    >
      <TeamSection title="Executive Team" members={groupedTeams.executives} />
      <TeamSection title="Marketing Team" members={groupedTeams.marketing} />
      <TeamSection title="Administrative Team" members={groupedTeams.admin} />
      <TeamSection
        title="Fundraising Team"
        members={groupedTeams.fundraising}
      />
      <TeamSection title="Outreach Team" members={groupedTeams.outreach} />
      <TeamSection title="Conference Team" members={groupedTeams.conference} />
      <TeamSection title="First Year Team" members={groupedTeams.firstYears} />
    </section>
  );
}

function TeamSection({
  title,
  members,
}: {
  title: string;
  members: (typeof NAME_CARD_DATA)[number][];
}) {
  if (!members.length) return null;
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-300" />
        <h2 className="text-2xl font-bold text-accent text-center whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gray-300" />
      </div>
      <div className="flex flex-wrap gap-15 justify-center pt-10">
        {members.map((member, index) => (
          <NameCard
            key={member.id}
            name={member.name}
            role={member.role}
            program={member.program}
            imagesrc={member.imagesrc}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
