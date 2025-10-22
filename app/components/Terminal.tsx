"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Zap } from "lucide-react"

interface Command {
  command: string
  output: string | JSX.Element
  delay?: number
}

interface Project {
  name: string
  description: string
  tech: string[]
  link?: string
  github?: string
}

export default function Terminal() {
  const [currentLine, setCurrentLine] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [outputHistory, setOutputHistory] = useState<(string | JSX.Element)[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const terminalRef = useRef<HTMLDivElement>(null)

  const projects: Project[] = [
    {
      name: "FarmTrackAI Platform",
      description: "Comprehensive agricultural management platform serving 1,800+ Kenyan farmers with offline capabilities, M-PESA integration, and multi-role support",
      tech: ["Next.js", "TypeScript", "SQLite", "M-PESA API", "Offline Sync", "React Native"],
      link: "https://vet-entry-ai.vercel.app/"
    },
    {
      name: "AFFINA Association Management",
      description: "Enterprise-grade platform for managing 2M+ members across 10,000+ organizations with event management, donations, and analytics",
      tech: ["React", "Node.js", "MongoDB", "Payment Gateways", "Analytics", "Email Marketing"],
      link: "https://staging.affina.kwf-labs.com/en"
    },
    {
      name: "Universal Peace Federation Database",
      description: "Large-scale database system managing 13,000+ individuals with content management and activity approval system",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Chart.js", "D3.js"],
      link: "https://upf.org"
    },
    {
      name: "Tally Migration Project",
      description: "Migrated React application to Next.js for improved performance and scalability",
      tech: ["Next.js", "TypeScript", "React", "MongoDB", "Express"],
      github: "https://github.com/collinsmathinji"
    },
    {
      name: "Kevin Winter Foundation Platform",
      description: "Non-profit web application with secure data management and user authentication",
      tech: ["MERN Stack", "JWT", "MongoDB", "React", "Node.js"],
      link: "https://kevinwinterfoundation.org"
    },
    {
      name: "Lamwa Vetcare Platform",
      description: "Veterinary services platform connecting farmers with professional veterinary care",
      tech: ["React", "Node.js", "MongoDB", "Payment Integration", "Real-time Chat"],
      link: "https://www.lamwavetcare.co.ke/"
    },
    {
      name: "Portfolio Terminal Interface",
      description: "Interactive Linux-style portfolio with animated terminal commands",
      tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/collinsmathinji"
    }
  ]

  const commands: Command[] = [
    {
      command: "whoami",
      output: "collins-macharia",
      delay: 1000
    },
    {
      command: "pwd",
      output: "/home/collins/portfolio",
      delay: 800
    },
    {
      command: "ls -la",
      output: (
        <div className="text-green-400">
          <div>drwxr-xr-x 2 collins collins 4096 Dec 15 10:30 <span className="text-blue-400">experience/</span></div>
          <div>drwxr-xr-x 2 collins collins 4096 Dec 15 10:30 <span className="text-blue-400">projects/</span></div>
          <div>drwxr-xr-x 2 collins collins 4096 Dec 15 10:30 <span className="text-blue-400">skills/</span></div>
          <div>drwxr-xr-x 2 collins collins 4096 Dec 15 10:30 <span className="text-blue-400">contact/</span></div>
          <div>-rw-r--r-- 1 collins collins 2048 Dec 15 10:30 <span className="text-yellow-400">README.md</span></div>
        </div>
      ),
      delay: 1200
    },
    {
      command: "cat README.md",
      output: (
        <div className="text-gray-300">
          <div className="text-green-400"># Collins Macharia - Full-stack Developer</div>
          <div className="text-blue-400">## About</div>
          <div>Passionate Full-stack Developer exploring Web3 while building robust Web2 solutions.</div>
          <div>Based in Nairobi County, Kenya. Remote work experience with US organizations.</div>
          <div className="text-blue-400">## Current Role</div>
          <div>Junior Software Developer at Kevin Winter Foundation</div>
          <div>Building scalable database systems for Universal Peace Federation</div>
          <div className="text-blue-400">## Tech Stack</div>
          <div>Frontend: React, Next.js, TypeScript, Tailwind CSS</div>
          <div>Backend: Node.js, Express.js, MongoDB</div>
          <div>Web3: Blockchain, Smart Contracts</div>
          <div>Tools: Git, Docker, AWS, Chart.js, D3.js</div>
        </div>
      ),
      delay: 1500
    },
    {
      command: "cd experience && ls",
      output: (
        <div className="text-green-400">
          <div>kevin-winter-foundation-junior-dev.txt</div>
          <div>baret-scholars-ambassador.txt</div>
          <div>tally-fullstack-apprentice.txt</div>
          <div>upf-web-developer-intern.txt</div>
          <div>kwf-web-developer-intern.txt</div>
        </div>
      ),
      delay: 1000
    },
    {
      command: "cat kevin-winter-foundation-junior-dev.txt",
      output: (
        <div className="text-gray-300">
          <div className="text-green-400">Company:</div> Kevin Winter Foundation
          <div className="text-green-400">Role:</div> Junior Software Developer
          <div className="text-green-400">Period:</div> Sep 2024 - Present
          <div className="text-green-400">Location:</div> Remote (United States)
          <div className="text-green-400">Responsibilities:</div>
          <div>• Building database system for Universal Peace Federation website</div>
          <div>• Focusing on scalability and data integrity</div>
          <div>• Implementing secure data management practices</div>
          <div>• Collaborating with international team members</div>
          <div>• Utilizing MERN stack technologies</div>
        </div>
      ),
      delay: 2000
    },
    {
      command: "cd ../projects && ls -la",
      output: (
        <div className="text-green-400">
          {projects.map((project, index) => (
            <div key={index}>
              <div>drwxr-xr-x 2 collins collins 4096 Dec 15 10:30 <span className="text-blue-400">{project.name.toLowerCase().replace(/\s+/g, '-')}/</span></div>
            </div>
          ))}
        </div>
      ),
      delay: 1000
    },
    {
      command: "cat farmtrackai-platform.txt",
      output: (
        <div className="text-gray-300">
          <div className="text-green-400">Project:</div> FarmTrackAI Agricultural Platform
          <div className="text-green-400">Description:</div> Comprehensive platform serving 1,800+ Kenyan farmers
          <div className="text-green-400">Technologies:</div> Next.js, TypeScript, SQLite, M-PESA API, Offline Sync
          <div className="text-green-400">Key Features:</div>
          <div>• Offline-first architecture for rural connectivity</div>
          <div>• M-PESA payment integration</div>
          <div>• Multi-role support (Farmers, Veterinarians, Workers)</div>
          <div>• Real-time data synchronization</div>
          <div>• English & Swahili language support</div>
          <div className="text-green-400">Impact:</div> <span className="text-green-400">1,800+ active farmers</span>
          <div className="text-green-400">Status:</div> <span className="text-green-400">Production</span>
          <div className="text-green-400">URL:</div> <span className="text-blue-400">https://vet-entry-ai.vercel.app/</span>
        </div>
      ),
      delay: 2500
    },
    {
      command: "cat affina-management.txt",
      output: (
        <div className="text-gray-300">
          <div className="text-green-400">Project:</div> AFFINA Association Management System
          <div className="text-green-400">Description:</div> Enterprise platform managing 2M+ members across 10,000+ organizations
          <div className="text-green-400">Technologies:</div> React, Node.js, MongoDB, Payment Gateways, Analytics
          <div className="text-green-400">Key Features:</div>
          <div>• Member management with custom types</div>
          <div>• Event planning and ticketing</div>
          <div>• Donation and fundraising campaigns</div>
          <div>• Advanced analytics and reporting</div>
          <div>• Email marketing automation</div>
          <div className="text-green-400">Scale:</div> <span className="text-green-400">2M+ members, 10,000+ organizations</span>
          <div className="text-green-400">Status:</div> <span className="text-green-400">Production</span>
          <div className="text-green-400">URL:</div> <span className="text-blue-400">https://staging.affina.kwf-labs.com/en</span>
        </div>
      ),
      delay: 2500
    },
    {
      command: "cat upf-database-system.txt",
      output: (
        <div className="text-gray-300">
          <div className="text-green-400">Project:</div> Universal Peace Federation Database System
          <div className="text-green-400">Description:</div> Large-scale database system managing 13,000+ individuals
          <div className="text-green-400">Technologies:</div> MongoDB, Express.js, React, Node.js, Chart.js, D3.js
          <div className="text-green-400">Features:</div>
          <div>• Content management system</div>
          <div>• Activity approval workflow</div>
          <div>• Data visualization dashboards</div>
          <div>• User authentication and authorization</div>
          <div className="text-green-400">Status:</div> <span className="text-green-400">Production</span>
        </div>
      ),
      delay: 2000
    },
    {
      command: "cd ../skills && ls",
      output: (
        <div className="text-green-400">
          <div>frontend-skills.txt</div>
          <div>backend-skills.txt</div>
          <div>web3-skills.txt</div>
          <div>tools-skills.txt</div>
        </div>
      ),
      delay: 800
    },
    {
      command: "cat frontend-skills.txt",
      output: (
        <div className="text-gray-300">
          <div className="text-green-400">Frontend Technologies:</div>
          <div>• React.js - Advanced</div>
          <div>• Next.js - Advanced</div>
          <div>• TypeScript - Advanced</div>
          <div>• Tailwind CSS - Advanced</div>
          <div>• HTML5/CSS3 - Expert</div>
          <div>• JavaScript (ES6+) - Expert</div>
          <div>• Chart.js - Intermediate</div>
          <div>• D3.js - Intermediate</div>
        </div>
      ),
      delay: 1500
    },
    {
      command: "cat backend-skills.txt",
      output: (
        <div className="text-gray-300">
          <div className="text-green-400">Backend Technologies:</div>
          <div>• Node.js - Advanced</div>
          <div>• Express.js - Advanced</div>
          <div>• MongoDB - Advanced</div>
          <div>• RESTful APIs - Advanced</div>
          <div>• JWT Authentication - Advanced</div>
          <div>• Database Design - Intermediate</div>
          <div>• API Integration - Advanced</div>
        </div>
      ),
      delay: 1500
    },
    {
      command: "cd ../contact && ls",
      output: (
        <div className="text-green-400">
          <div>email.txt</div>
          <div>linkedin.txt</div>
          <div>github.txt</div>
          <div>location.txt</div>
        </div>
      ),
      delay: 800
    },
    {
      command: "cat email.txt && cat linkedin.txt && cat github.txt && cat location.txt",
      output: (
        <div className="text-gray-300">
          <div className="text-green-400">Email:</div> machariacollins79@gmail.com
          <div className="text-green-400">LinkedIn:</div> linkedin.com/in/collins-macharia-05b527268
          <div className="text-green-400">GitHub:</div> github.com/collinsmathinji
          <div className="text-green-400">Location:</div> Nairobi County, Kenya
        </div>
      ),
      delay: 2000
    },
    {
      command: "git log --oneline -5",
      output: (
        <div className="text-gray-300">
          <div className="text-yellow-400">a1b2c3d</div> feat: Add terminal portfolio interface
          <div className="text-yellow-400">b2c3d4e</div> feat: Implement animated command sequences
          <div className="text-yellow-400">c3d4e5f</div> feat: Add project showcase with interactive elements
          <div className="text-yellow-400">d4e5f6g</div> feat: Integrate LinkedIn and GitHub data
          <div className="text-yellow-400">e5f6g7h</div> feat: Add responsive design and animations
        </div>
      ),
      delay: 1500
    },
    {
      command: "npm run dev",
      output: (
        <div className="text-gray-300">
          <div className="text-green-400">✓</div> Next.js development server started
          <div className="text-green-400">✓</div> Terminal portfolio loaded successfully
          <div className="text-green-400">✓</div> All animations initialized
          <div className="text-blue-400">→</div> Ready for interaction at localhost:3000
        </div>
      ),
      delay: 1200
    },
    {
      command: "uname -a",
      output: (
        <div className="text-gray-300">
          <div>Linux portfolio-terminal 6.1.0-generic #1 SMP PREEMPT_DYNAMIC</div>
          <div>x86_64 x86_64 x86_64 GNU/Linux</div>
          <div className="text-green-400">System:</div> Collins Macharia Portfolio Terminal v2.0
          <div className="text-green-400">Kernel:</div> Next.js 15.2.1 with TypeScript
          <div className="text-green-400">Architecture:</div> Full-stack Developer
        </div>
      ),
      delay: 1200
    },
    {
      command: "ps aux | grep collins",
      output: (
        <div className="text-gray-300">
          <div className="text-green-400">USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND</div>
          <div>collins    1234  0.1  0.2  12345  6789 pts/0    S+   10:30   0:01 /usr/bin/portfolio-terminal</div>
          <div>collins    1235  0.0  0.1   9876  5432 pts/0    S+   10:30   0:00 /usr/bin/nextjs-dev-server</div>
          <div>collins    1236  0.2  0.3  11111  2222 pts/0    S+   10:30   0:02 /usr/bin/typescript-compiler</div>
          <div>collins    1237  0.0  0.1   5555  3333 pts/0    S+   10:30   0:00 /usr/bin/framer-motion</div>
        </div>
      ),
      delay: 1000
    },
    {
      command: "cat project-stats.txt",
      output: (
        <div className="text-gray-300">
          <div className="text-green-400">Project Impact Statistics:</div>
          <div className="text-blue-400">FarmTrackAI:</div> 1,800+ farmers served
          <div className="text-blue-400">AFFINA:</div> 2M+ members, 10,000+ organizations
          <div className="text-blue-400">UPF Database:</div> 13,000+ individuals managed
          <div className="text-blue-400">Total Users Impacted:</div> <span className="text-yellow-400">2M+ users</span>
          <div className="text-green-400">Technologies Mastered:</div>
          <div>• Frontend: React, Next.js, TypeScript, Tailwind CSS</div>
          <div>• Backend: Node.js, Express.js, MongoDB, SQLite</div>
          <div>• Mobile: React Native, Offline Sync</div>
          <div>• Payments: M-PESA API, Stripe, PayPal</div>
          <div>• Analytics: Chart.js, D3.js, Custom Dashboards</div>
        </div>
      ),
      delay: 2000
    },
    {
      command: "echo 'Thank you for visiting my portfolio!'",
      output: "Thank you for visiting my portfolio!",
      delay: 1000
    }
  ]

  useEffect(() => {
    const runCommands = async () => {
      setIsTyping(true)
      
      for (let i = 0; i < commands.length; i++) {
        // Add command to history
        setCommandHistory(prev => [...prev, commands[i].command])
        
        // Type command character by character
        let typedCommand = ""
        for (let j = 0; j < commands[i].command.length; j++) {
          typedCommand += commands[i].command[j]
          setCurrentLine(typedCommand)
          await new Promise(resolve => setTimeout(resolve, 50))
        }
        
        // Wait a bit before showing output
        await new Promise(resolve => setTimeout(resolve, 500))
        
        // Clear current line and add output
        setCurrentLine("")
        setOutputHistory(prev => [...prev, commands[i].output])
        
        // Wait before next command
        await new Promise(resolve => setTimeout(resolve, commands[i].delay || 1000))
      }
      
      setIsTyping(false)
    }

    const timer = setTimeout(runCommands, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commandHistory, outputHistory])

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex">
      {/* Left Sidebar - Personal Info */}
      <div className="w-1/4 bg-gray-900 border-r border-gray-700 flex flex-col">
        {/* Profile Section */}
        <div className="p-6 border-b border-gray-700">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-400">
              <img
                src="/collins.jpg"
                alt="Collins Macharia"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-xl font-bold text-white mb-2">Collins Macharia</h1>
            <p className="text-green-400 text-sm mb-1">Full-stack Developer</p>
            <p className="text-gray-400 text-xs">Nairobi County, Kenya</p>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-green-400 text-sm font-semibold mb-3">Impact Stats</h3>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-400">Users Impacted:</span>
              <span className="text-yellow-400 font-bold">2M+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Projects:</span>
              <span className="text-blue-400 font-bold">7+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Experience:</span>
              <span className="text-green-400 font-bold">2+ years</span>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-green-400 text-sm font-semibold mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-1">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'M-PESA API'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Contact Links */}
        <div className="p-6 flex-1">
          <h3 className="text-green-400 text-sm font-semibold mb-3">Connect</h3>
          <div className="space-y-3">
            <motion.a
              href="mailto:machariacollins79@gmail.com"
              className="flex items-center space-x-2 text-xs text-gray-300 hover:text-white transition-colors"
              whileHover={{ x: 5 }}
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Email</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/collins-macharia-05b527268"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs text-gray-300 hover:text-white transition-colors"
              whileHover={{ x: 5 }}
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com/collinsmathinji"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs text-gray-300 hover:text-white transition-colors"
              whileHover={{ x: 5 }}
            >
              <Github className="w-4 h-4 text-blue-400" />
              <span>GitHub</span>
            </motion.a>
          </div>
          
          {/* Restart Terminal Button */}
          <div className="mt-6">
            <motion.button
              onClick={() => window.location.reload()}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-xs py-2 px-3 rounded transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              🔄 Restart Terminal
            </motion.button>
          </div>
        </div>
      </div>

      {/* Right Side - Terminal */}
      <div className="flex-1 flex flex-col">
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="ml-4 text-gray-300 text-sm">collins@portfolio:~$</div>
          </div>
          <div className="text-gray-400 text-xs">
            <span className="text-green-400">●</span> Online | 
            <span className="text-blue-400 ml-2">●</span> Portfolio Terminal |
            <span className="text-yellow-400 ml-2">●</span> {isTyping ? 'Running...' : 'Ready'}
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          ref={terminalRef}
          className="p-4 flex-1 overflow-y-auto terminal-scrollbar"
        >
        <div className="space-y-2">
          {/* Welcome Message */}
          <div className="text-green-400 mb-4">
            <div className="text-xl font-bold text-blue-400">Welcome to Collins Macharia's Portfolio Terminal</div>
            <div className="text-gray-300 mt-2">Interactive Linux-style portfolio showcasing my development journey</div>
            <div className="text-gray-500 mt-2">Type 'help' for available commands or wait for the demo...</div>
            <div className="text-gray-500">---</div>
          </div>

          {/* Command History */}
          {commandHistory.map((command, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center">
                <span className="text-blue-400">collins@portfolio:~$</span>
                <span className="ml-2">{command}</span>
              </div>
              <AnimatePresence>
                {outputHistory[index] && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4"
                  >
                    {outputHistory[index]}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Current Line */}
          {isTyping && (
            <div className="flex items-center">
              <span className="text-blue-400">collins@portfolio:~$</span>
              <motion.span 
                className="ml-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                {currentLine}
                <span className="text-green-400">|</span>
              </motion.span>
            </div>
          )}

          {/* Help Command Display */}
          {!isTyping && (
            <div className="mt-8">
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                <div className="text-green-400 mb-2">Available Commands:</div>
                <div className="text-gray-300 space-y-1 text-sm">
                  <div><span className="text-blue-400">help</span> - Show this help message</div>
                  <div><span className="text-blue-400">whoami</span> - Display current user</div>
                  <div><span className="text-blue-400">ls</span> - List directory contents</div>
                  <div><span className="text-blue-400">cat [file]</span> - Display file contents</div>
                  <div><span className="text-blue-400">cd [directory]</span> - Change directory</div>
                  <div><span className="text-blue-400">pwd</span> - Print working directory</div>
                  <div><span className="text-blue-400">clear</span> - Clear terminal</div>
                </div>
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  )
}
