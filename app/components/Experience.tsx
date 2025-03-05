"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Experience() {
  const experiences = [
    {
      company: "Kevin Winter Foundation",
      location: "Remote (United States)",
      period: "Sep 2024 - Present",
      role: "Junior Software Developer",
      responsibilities: [
        "Building a database system for the Universal Peace Federation website's African branch",
        "Focusing on scalability and data integrity to support a large user base",
        "Implementing best practices for secure data management",
        "Collaborating with international team members",
        "Utilizing MERN stack technologies for robust application development",
      ],
    },
    {
      company: "Baret Scholars",
      location: "Remote (United States)",
      period: "Sep 2024 - Oct 2024",
      role: "Campus Ambassador",
      responsibilities: [
        "Represented Baret Scholars on campus and facilitated engagement",
        "Leveraged social networks to help secure job opportunities",
        "Organized events and workshops to promote the organization",
        "Developed leadership and communication skills",
        "Built relationships with students and faculty",
      ],
    },
    {
      company: "Tally",
      location: "Remote (United States)",
      period: "Jul 2024 - Aug 2024",
      role: "Full-stack Developer (Apprenticeship)",
      responsibilities: [
        "Migrated the application from React to Next.js to improve performance and scalability",
        "Utilized the MERN stack alongside TypeScript for enhanced development practices",
        "Implemented modern frontend architecture and state management",
        "Collaborated with senior developers on code reviews and best practices",
        "Contributed to performance optimization strategies",
      ],
    },
    {
      company: "Universal Peace Federation",
      location: "Remote (United States)",
      period: "Mar 2024 - Jun 2024",
      role: "Web Developer Intern",
      responsibilities: [
        "Developed and maintained web applications using the MERN stack",
        "Created data visualization components using Chart.js and D3.js",
        "Implemented a content management and activity approval system",
        "Improved application performance and security by adopting best practices",
        "Managed a large-scale database serving over 13,000 individuals",
      ],
    },
    {
      company: "Kevin Winter Foundation",
      location: "Remote (United States)",
      period: "Dec 2023 - Apr 2024",
      role: "Web Developer Intern",
      responsibilities: [
        "Enhanced MERN stack capabilities and familiarized with newer frontend technologies",
        "Worked with React.js and other modern frameworks to deliver a responsive user experience",
        "Developed and maintained web applications for non-profit initiatives",
        "Collaborated with cross-functional teams to implement new features",
        "Participated in code reviews and quality assurance processes",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">{exp.company}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

