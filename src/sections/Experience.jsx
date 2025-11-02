import React, { useState } from "react";
import { motion } from "framer-motion";

// Mock data - replace with your experiences import
const experiences = [
  {
    title: "Senior Frontend Developer",
    company_name: "Tech Corp",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=tech",
    iconBg: "#3b82f6",
    date: "Oct 2025 - Present",
    points: [
      "Led development of responsive web applications using React.js and modern frameworks",
      "Collaborated with cross-functional teams including designers and product managers",
      "Implemented complex UI/UX designs with focus on performance optimization",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "GNCIPL",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=startup",
    iconBg: "#8b5cf6",
    date: "Aug 2025 - Oct 2025",
    points: [
      "Developed and maintained web applications using React, Node.js, and MongoDB",
      "Designed and implemented RESTful APIs and microservices architecture",
      "Integrated third-party services and payment gateways",
      "Improved application performance by 40% through optimization techniques",
    ],
  },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Digital Agency",
  //   icon: "https://api.dicebear.com/7.x/shapes/svg?seed=agency",
  //   iconBg: "#ec4899",
  //   date: "Jun 2020 - Dec 2021",
  //   points: [
  //     "Built responsive websites and landing pages for various clients",
  //     "Worked with design team to implement pixel-perfect interfaces",
  //     "Optimized website performance and SEO rankings",
  //     "Managed version control using Git and collaborated via GitHub",
  //   ],
  // },
];

const ExperienceCard = ({ experience, index, isActive, setActive }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex ${isLeft ? "justify-start" : "justify-end"} mb-8 w-full`}
    >
      <div
        className={`flex items-center w-full ${
          isLeft ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Card */}
        <motion.div
          whileHover={{ scale: 1.02, rotateY: isLeft ? 3 : -3 }}
          onClick={() => setActive(index)}
          className={`group relative w-5/12 bg-gradient-to-br from-gray-900 via-gray-900 to-black border-2 ${
            isActive === index ? "border-blue-500" : "border-gray-800"
          } rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Glow effect */}
          <div
            className={`absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 ${
              isActive === index ? "opacity-20" : "group-hover:opacity-10"
            } blur-xl transition-opacity duration-500`}
          ></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {experience.title}
                </h3>
                <p className="text-gray-400 font-semibold flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                  {experience.company_name}
                </p>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 mb-4 text-sm">
              <svg
                className="w-4 h-4 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-purple-400 font-medium">
                {experience.date}
              </span>
            </div>

            {/* Points */}
            <motion.ul
              initial={false}
              animate={{
                height: isActive === index ? "auto" : 0,
                opacity: isActive === index ? 1 : 0,
              }}
              className="space-y-3 overflow-hidden"
            >
              {experience.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: isActive === index ? 1 : 0,
                    x: isActive === index ? 0 : -10,
                  }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                >
                  <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Expand indicator */}
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 group-hover:text-blue-400 transition-colors">
              <span>
                {isActive === index ? "Click to collapse" : "Click to expand"}
              </span>
              <motion.svg
                animate={{ rotate: isActive === index ? 180 : 0 }}
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </div>
          </div>

          {/* Corner decoration */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-2xl pointer-events-none"></div>
        </motion.div>

        {/* Timeline center icon */}
        <div className="relative flex items-center justify-center mx-8 z-10">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Pulsing ring */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full"
              style={{ background: experience.iconBg }}
            ></motion.div>

            {/* Icon container */}
            <div
              className="relative w-16 h-16 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-xl overflow-hidden"
              style={{ background: experience.iconBg }}
            >
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-10 h-10 object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Empty space for alternating layout */}
        <div className="w-5/12"></div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="relative bg-black py-20 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-gray-400 text-lg mb-2 uppercase tracking-wider">
            My Journey
          </p>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline line */}
        <div className="absolute left-1/2 top-48 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30 transform -translate-x-1/2"></div>

        {/* Experience cards */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
              isActive={activeCard}
              setActive={setActiveCard}
            />
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-2xl shadow-blue-500/50">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
