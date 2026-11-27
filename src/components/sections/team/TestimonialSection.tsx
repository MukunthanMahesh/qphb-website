
"use client"
import Image from "next/image"
import { useState } from "react"  
import { motion } from "framer-motion"

const PRESIDENTS = [
  {
    name: "Madhureema Balasubramani-Rupa",
    role: "Co-President",
    program: "4th Year Health Sciences",
    imgsrc: "/images/team/MadhureemaBalasubramani-Rupa_Co-Pres_4HS.JPG",
    quote:
      "My motivation to serve as Co-President of Queen’s Public Health Brigades stems from a desire to turn our public healthgoals into tangible community impact. Public health remains an underexplored yet essential pillar of care. This year, I aim to expand our club’s presence across Queen’s and the Kingston community, strengthen our support for local and global health initiatives, and create opportunities for students to engage meaningfully with public health practice and education. To me, being Co-President isn’t just about overseeing tasks, it’s about working alongside every committee, and taking on responsibilities where needed. I value empathy, open communication, and approachability to ensure every team member feels supported, heard, and motivated.",
  },
  {
    name: "Soha Kar",
    role: "Co-President",
    program: "4th Year Health Sciences",
    imgsrc: "/images/team/SohaKar_Co-Pres_4HS.JPG",
    quote:
      "Quote coming soon.",
  },
];



export function TestimonialSection() {

    const [expanded, setExpanded] = useState<Record<number, boolean>>({})

    const getPreview = (text: string) => {
        const sentences = text.split(/(?<=[.!?])\s+/)
        return sentences.slice(0, 2).join(" ")
  }

  return (
    <motion.section
        className="mx-auto max-w-full px-6 py-12 space-y-12 bg-background-secondary"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        >
        <h1 className="text-[0.8rem] font-extrabold uppercase tracking-[0.25em] text-accent text-center">
            Testimonials
        </h1>

        {/* centered image, then text below */}
        <div className="flex flex-col items-center text-center gap-6">      
            <div className="rounded-3xl bg-[conic-gradient(at_center,_orange_0%,_#fff7ee_25%,_orange_50%,_#fff7ee_75%,_orange_100%)] p-[1px] shadow-lg">
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
                    <Image
                    src="/images/team/IMG_1116.JPG"
                    alt="Co-Presidents group photo"
                    width={900}
                    height={500}
                    className="object-cover mx-auto"
                    />
                </div>
            </div>

            <div className="max-w-3xl space-y-4">
                <h2 className="text-2xl font-bold text-foreground/100">
                    Listen to what our presidents have to say. 
                </h2>

                <p className="text-base sm:text-lg font-medium leading-relaxed text-foreground/90">
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
                            <p className="text-base font-medium text-foreground/100">
                            {p.name}
                            </p>
                            <p className="text-sm font-bold text-primary/100">
                            {p.role}
                            </p>
                            <p className="text-xs text-muted-foreground">
                            {p.program}
                            </p>
                        </div>
                    </div>

                    {/* Speech Bubble */}
                    <div
                        className={`
                            relative
                            w-full
                            bg-secondary/30
                            border-primary/100
                            p-5
                            rounded-2xl
                            italic
                            leading-relaxed
                            text-foreground/100
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
                                ? "after:left-[-18px] after:border-r-[18px] after:border-r-[#FAA54F]"
                                : "after:right-[-18px] after:border-l-[18px] after:border-l-[#FAA54F]"
                            }
                        `}>
                            
                        <span>
                            {expanded[i] ? (
                                <>“{p.quote}”</>
                            ) : (
                                <>“{getPreview(p.quote)} …”</>
                            )}
                        </span>

                    <button
                        type="button"
                        onClick={() =>
                            setExpanded(prev => ({ ...prev, [i]: !prev[i] }))
                        }
                        className="ml-2 text-primary font-xs hover:underline"
                        >
                        {expanded[i] ? "Show less" : "Read more"}
                    </button>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </motion.section>

  );
    };