"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    date: "September 2023 - Present",
    role: "Lead DevOps Engineer",
    company: "Cilondis",
    description:
      "MoonaStudio is a product design and development studio focused on building clean, user-centered digital experiences for startups and growing businesses. The studio blends strong design thinking with engineering to deliver scalable and visually refined products.",
    points: [
      "Founded and led MoonaStudio, overseeing product design and development initiatives",
      "Designed end-to-end user experiences for web and mobile applications",
      "Translated business requirements into functional and aesthetic product solutions",
      "Built responsive interfaces using modern frontend technologies",
      "Collaborated with clients to refine product vision and improve usability",
      "Established design systems and reusable UI components",
      "Managed project timelines, delivery, and client communication",
    ],
    logo: "/cilondis.jpeg", // Add path if available
  },
  {
    date: "June 2025 - Present",
    role: "Technical Head",
    company: "NSDA Association",
    description:
      "NSDA Association is a professional organization focused on technology education, skill development, and community-driven initiatives aimed at empowering students and young professionals in the tech ecosystem.",
    points: [
      "Led the technical department and supervised development-related activities",
      "Planned and executed technical training sessions and workshops",
      "Managed internal platforms and digital tools used by the association",
      "Provided technical guidance to members and project teams",
      "Coordinated with leadership to align technical strategy with organizational goals",
      "Reviewed and maintained codebases for association-led projects",
      "Supported community initiatives through technology-driven solutions",
    ],
    logo: "/zayride.png", // Add path if available
  },
  {
    date: "October 2023 - Present",
    role: "Operation Support Officer",
    company: "Oromia Bank",
    description:
      "Oromia Bank is one of the leading financial institutions in Ethiopia, providing a wide range of banking services across districts and branches nationwide.",
    points: [
      "Provided operational and technical support to bank branches and district offices",
      "Resolved daily operational issues related to banking systems and processes",
      "Supported core banking applications and IT-related services",
      "Assisted branch staff with system usage, troubleshooting, and reporting",
      "Coordinated with IT teams to escalate and resolve complex technical issues",
      "Ensured continuity of banking operations and minimal service disruption",
      "Participated in system updates, testing, and operational improvements",
    ],
    logo: "/ausc.jpeg", // Replace with your image
  },
];

export default function ExperienceTree() {
  return (
    <section className="max-w-3xl py-12 px-10 sm:px-0">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-12">
        Experience
      </h2>

      <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 md:ml-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16 relative pl-8"
          >
            {/* The Date Pill */}
            <div className="absolute -left-[54px] -top-8">
              <span className="bg-black dark:bg-[#1A1A1A] text-white text-[10px] font-medium px-3 py-1 rounded-full border border-gray-700">
                {exp.date}
              </span>
            </div>

            {/* Company Logo/Icon */}
            {exp.logo && (
              <div className="mb-4">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={40}
                  height={40}
                  className="rounded-md invert dark:invert-0"
                />
              </div>
            )}

            <div className="space-y-2">
              <h3 className="font-bold text-lg leading-tight">
                {exp.role}, {exp.company}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {/* <span className="text-white font-medium">{exp.company}</span> is{" "} */}
                {exp.description}
              </p>

              <ul className="space-y-1">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-400"
                  >
                    <span className="mt-1 text-gray-600 text-[10px]">
                      {"•"}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
