import Image from "next/image";
import { motion } from "framer-motion"

interface NameCardProps {
  name: string;
  role: string;
  program: string;
  imagesrc: string;
}


export function NameCard({name, role, program, imagesrc} : NameCardProps) {
    return(
       <div className      = "h-auto w-65 rounded-2xl border border-white-10 p-0.5 shadow-sm backdrop-blur bg-[conic-gradient(at_center,_orange_0%,_#fff7ee_25%,_orange_50%,_#fff7ee_75%,_orange_100%)] ">
            <div className = "pt-6 pb-3 h-full w-full rounded-2xl border border-black/10 bg-white align-item-center">
                {/* Image */}
                    <div className="mx-auto h-40 w-40 overflow-hidden rounded-full relative ring-1 ring-[#FFD8C3] rounded-2xl">
                        <img
                            src={imagesrc}
                            alt= {'${name} headshot'}
                        />
                    </div>
                {/* Text Info */}
                <div className="p-3">
                    <p className="font-normal text-sm leading-relaxed text-foreground/100 sm:text-base text-center">
                    {name}
                    </p>

                    <p className="font-bold text-sm leading-relaxed text-[#C76604]/100 sm:text-base text-center">
                    {role}
                    </p>

                    <p className="font-normal text-sm text-muted-foreground text-center">
                    {program}
                    </p>
                </div>
            </div>
       </div>
    );
}
