import Image from "next/image"

export function TeamHero() {
    return (    
        <section className="relative bg-background bg-background pt-[10px] flex flex-col overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-[100%] w-1/2 overflow-invisible z-0 left-[-250px]">
               <Image
                    src="/images/orange_globe.svg"    
                    alt="globe graphic"
                    fill
                    className="object-cover object-right opacity-100"
                />
            </div>
            <div className="pointer-events-none absolute right-0 top-0 h-[100%] w-1/2 overflow-invisible z-0 right-[-250px]">
                <Image
                    src="/images/orange_globe.svg"
                    alt="globe graphic"
                    fill
                    className="object-cover object-left opacity-100"
                />
            </div>
            <div className="text-center z-10 pb-0 ">
                <h1 className="text-[3rem] font-extrabold uppercase tracking-[0.25em] text-accent">
                    <span>MEET </span>
                    <span className="text-transparent stroke-text relative">
                        OUR </span>
                    <span className="relative">
                        TEAM
                    <span className="absolute left-0 right-0 -bottom-2 h-2 rounded-full bg-black/20 blur-sm" />
                    </span>
                </h1>
                <div className="mt-0 mb-0 flex justify-center ">
                    <Image
                    src="/images/QPHB_Illustration_Teams.svg"
                    alt="Team illustration graphic"
                    width={1000}
                    height={1000}
                    className="object-contain"
                    priority 
                    />
                </div>
            </div>
        </section>
    );
}