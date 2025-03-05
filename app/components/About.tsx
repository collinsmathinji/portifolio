"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Zap } from "lucide-react"
import Image from "next/image"

export default function About() {
  const skills = [
    { icon: <Code className="w-8 h-8 text-blue-500" />, title: "Frontend", description: "React, Next.js, TypeScript" },
    { icon: <Server className="w-8 h-8 text-green-500" />, title: "Backend", description: "Node.js, Express, MongoDB" },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: "Web3",
      description: "Blockchain, Smart Contracts",
    },
    { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: "Data Viz", description: "Chart.js, D3.js" },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm an enthusiastic Full-stack Developer passionate about bridging emerging Web3 innovations with robust
              Web2 solutions. With hands-on experience in the MERN stack, React, Next.js, and TypeScript, I have
              contributed to impactful projects across non-profits and tech startups.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Based in Nairobi County, Kenya, I've worked remotely with organizations in the United States, developing
              scalable applications and managing large databases. I believe in steady progress—one step at a time—and am
              eager to bring my technical expertise and problem-solving skills to challenging roles.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

