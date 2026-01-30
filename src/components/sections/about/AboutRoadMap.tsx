'use client'

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Star, Rocket, Globe } from "lucide-react";

const STEPS = [
  {
    title: "Official Launch",
    date: "Fall 2025",
    description: "Successfully ratified as a university club. Recruiting our first cohort of student advocates.",
    icon: <Rocket className="size-5" />,
    status: "completed"
  },
  {
    title: "Global Brigades Annual Summit 2026",
    date: "Winter 2026",
    description: "Hosting our first campus-wide event featuring public health experts and hands-on case competition.",
    icon: <Globe className="size-5" />,
    status: "completed"
  },
  {
    title: "Inaugural Health Summit",
    date: "Spring 2026",
    description: "Hosting our first campus-wide event featuring public health experts and hands-on workshops.",
    icon: <Star className="size-5" />,
    status: "upcoming"
  },
  // To add more, just copy/paste another object here! :)
];

export function AboutRoadMap() {
  return (
    <section className="pb-0 pt-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-accent font-extrabold tracking-[0.2em] uppercase text-xs mb-10">
            The Journey Ahead
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Strategic Roadmap</h2>
        </div>

        <div className="relative">

          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-accent/20" />

          <div className="space-y-12">
            {STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
              >
           
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className={`z-10 size-10 rounded-full border-4 border-background-secondary flex items-center justify-center shadow-sm 
                    ${step.status === 'completed' ? 'bg-accent text-white' : 'bg-white text-accent border-accent/20'}`}>
                    {step.status === 'completed' ? <CheckCircle2 className="size-5" /> : step.icon}
                  </div>
                </div>

   
                <div className="ml-16 md:ml-0 md:w-[45%] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <span className="text-accent font-bold text-sm tracking-wider">{step.date}</span>
                  <h4 className="text-xl font-bold text-slate-900 mt-1">{step.title}</h4>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}