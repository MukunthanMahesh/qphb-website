import { TeamIntro } from "./TeamIntro"
import Image from "next/image"  

const PRESIDENTS = [
  {
    name: "Madhureema Balasubramani Rupa",
    role: "Co-President",
    program: "3rd Year Health Sciences",
    imgsrc: "/images/exec-images/Madhureema_Balasubramani_Rupa-Co-President.JPG",
    quote:
      "My motivation to serve as Co-President of Queen’s Public Health Brigades stems from a desire to turn our public healthgoals into tangible community impact. Public health remains an underexplored yet essential pillar of care. This year, I aim to expand our club’s presence across Queen’s and the Kingston community, strengthen our support for local and global health initiatives, and create opportunities for students to engage meaningfully with public health practice and education. To me, being Co-President isn’t just about overseeing tasks, it’s about working alongside every committee, and taking on responsibilities where needed. I value empathy, open communication, and approachability to ensure every team member feels supported, heard, and motivated.",
  },
  {
    name: "Kaliyha Dennis",
    role: "Co-President",
    program: "4th Year Health Sciences",
    imgsrc: "/images/exec-images/Kaliyha_Dennis-Co-President.JPG",
    quote:
      "I joined Global Brigades in my first year at Queen’s, and now in my fourth year, it has truly shaped my university experience. Each year has given me the opportunity to recognize my privilege and use it to advocate for others around the world. This experience is at the heart of why I wanted to serve as Public Health Co-President. I want more Queen’s students to experience that same transformative connection, meeting people globally, discovering their passion for advocacy, and finding direction in who they want to become and how they want to serve. This year, I also want to ensure that the impact of our work abroad is felt here in Kingston by engaging with local public health initiatives and uplifting the very community that has supported our education. As Co-President, I see my role as that of a servant leader. Madhu and I worked hard to build our team not to lead from above, but to support from within. Our members are experts in what they do, and I aim to uplift and empower them to succeed. Ultimately, being Co-President means fostering a spirit of advocacy, collaboration, and global citizenship,  the same spirit that first inspired me when I joined Global Brigades.",
  },
];

export function TestimonialSection() {
  return (
    <section className="mx-auto max-w-full px-6 py-12 space-y-12 bg-background-secondary ">
        <h1 className="text-[0.8rem] font-extrabold uppercase tracking-[0.25em] text-accent text-center">
            Testimonials
        </h1>

        {/* TOP: image + question side by side */}
        <div className="grid gap-10 md:grid-cols-2 items-start">
            <div className="rounded-3xl bg-[conic-gradient(at_center,_orange_0%,_#fff7ee_25%,_orange_50%,_#fff7ee_75%,_orange_100%)] p-[1px] shadow-lg">
                <div className="relative overflow-hidden rounded-3xl bg-white">
                    <Image
                    src="/images/exec-images/Pres.JPG"
                    alt="Co-Presidents group photo"
                    width={900}
                    height={500}
                    className="object-cover"
                    />
                </div>
            </div>

            {/* TEXT */}
            <div className="space-y-4 text-center md:text-left">
                <h2 className="text-2xl font-bold text-[#795027]/100">
                    Listen to what our presidents have to say
                </h2>

                <p className="text-base sm:text-lg font-medium leading-relaxed text-[#795027]/90">
                    Question: Short statement on the motivation behind being a
                    Co-President and what being a Co-President means to you!
                </p>
            </div>
        </div>

        {/* testimonials */}
        <div className="flex flex-col gap-10">
            {PRESIDENTS.map((p, i) => (
            <div key={p.name}>

                <div
                    className={`
                    flex items-center gap-4 md:gap-6 
                    ${i === 0 ? "flex-row" : "flex-row-reverse"}
                    `}
                >
                    {/* Avatar + name block */}
                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="relative h-20 w-20 rounded-full overflow-hidden ring-2 ring-orange-300 shadow">
                            <Image
                            src={p.imgsrc}
                            alt={p.name}
                            fill
                            className="object-cover"
                            />
                        </div>

                        <div className="space-y-0.5">
                            <p className="text-base font-semibold text-[#795027]">
                            {p.name}
                            </p>
                            <p className="text-sm font-medium text-orange-600">
                            {p.role}
                            </p>
                            <p className="text-xs text-gray-500">
                            {p.program}
                            </p>
                        </div>
                    </div>

                    {/* Speech Bubble */}
                    <div
                        className={`
                            relative
                            w-full
                            bg-[#fff7ee]
                            border border-orange-200
                            p-6
                            rounded-2xl
                            italic
                            leading-relaxed
                            text-[#795027]/90
                            shadow

                            after:content-['']
                            after:absolute
                            after:top-1/2
                            after:-translate-y-1/2
                            after:w-0
                            after:h-0
                            after:border-y-[12px]
                            after:border-y-transparent

                            ${
                            i === 0
                                ? "after:left-[-18px] after:border-r-[18px] after:border-r-orange-200"
                                : "after:right-[-18px] after:border-l-[18px] after:border-l-orange-200"
                            }
                        `}>
                            
                        “{p.quote}”
                    </div>
                </div>
            </div>
            ))}
        </div>
    </section>

  );
    };