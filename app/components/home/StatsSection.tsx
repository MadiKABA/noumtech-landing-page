"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  IconUsers,
  IconBriefcase,
  IconMoodSmile,
  IconCalendar,
} from "@tabler/icons-react";

const stats = [
  {
    id: 1,
    title: "Membres de l'équipe",
    value: 50,
    suffix: "+",
    icon: <IconUsers />,
  },
  {
    id: 2,
    title: "Total des projets",
    value: 200,
    suffix: "+",
    icon: <IconBriefcase />,
  },
  {
    id: 3,
    title: "Clients satisfaits",
    value: 95,
    suffix: "%",
    icon: <IconMoodSmile />,
  },
  {
    id: 4,
    title: "Années d'expérience",
    value: 10,
    suffix: "+",
    icon: <IconCalendar />,
  },
];

const AnimatedNumber = ({
  value,
  suffix,
}: {
  value: number;
  suffix?: string;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div ref={ref} className="text-lg font-extrabold text-white">
      {inView && <CountUp end={value} duration={2} suffix={suffix} />}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="relative py-8 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 5 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="glass-card p-3 rounded-sm backdrop-blur-md hover:scale-105 transition-transform duration-300 flex flex-col items-center"
            >
              <div className="text-6xl text-white mb-2">{stat.icon}</div>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-gray-300 mt-1">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
