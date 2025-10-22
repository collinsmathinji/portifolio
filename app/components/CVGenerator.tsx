"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, FileText, User, Mail, Phone, MapPin, Github, Linkedin, Calendar, Award, Briefcase, Code } from "lucide-react"

interface CVData {
  personalInfo: {
    name: string
    title: string
    email: string
    phone: string
    location: string
    linkedin: string
    github: string
  }
  summary: string
  experience: Array<{
    company: string
    position: string
    period: string
    location: string
    achievements: string[]
  }>
  skills: {
    technical: string[]
    tools: string[]
  }
  projects: Array<{
    name: string
    description: string
    technologies: string[]
    impact: string
  }>
}

export default function CVGenerator() {
  const [isGenerating, setIsGenerating] = useState(false)

  const cvData: CVData = {
    personalInfo: {
      name: "Collins Macharia",
      title: "Full-stack Developer",
      email: "machariacollins79@gmail.com",
      phone: "+254 123 456 789",
      location: "Nairobi County, Kenya",
      linkedin: "linkedin.com/in/collins-macharia-05b527268",
      github: "github.com/collinsmathinji"
    },
    summary: "Passionate Full-stack Developer with 2+ years of experience building scalable web applications. Expert in MERN stack, React, Next.js, and TypeScript. Successfully delivered projects impacting 2M+ users across agricultural, non-profit, and enterprise sectors. Based in Nairobi, Kenya with remote work experience with US organizations.",
    experience: [
      {
        company: "Kevin Winter Foundation",
        position: "Junior Software Developer",
        period: "Sep 2024 - Present",
        location: "Remote (United States)",
        achievements: [
          "Building database system for Universal Peace Federation website's African branch",
          "Focusing on scalability and data integrity to support large user base",
          "Implementing secure data management practices",
          "Collaborating with international team members"
        ]
      },
      {
        company: "Tally",
        position: "Full-stack Developer (Apprenticeship)",
        period: "Jul 2024 - Aug 2024",
        location: "Remote (United States)",
        achievements: [
          "Migrated React application to Next.js for improved performance",
          "Utilized MERN stack alongside TypeScript for enhanced development",
          "Implemented modern frontend architecture and state management",
          "Contributed to performance optimization strategies"
        ]
      },
      {
        company: "Universal Peace Federation",
        position: "Web Developer Intern",
        period: "Mar 2024 - Jun 2024",
        location: "Remote (United States)",
        achievements: [
          "Developed web applications using MERN stack",
          "Created data visualization components using Chart.js and D3.js",
          "Implemented content management and activity approval system",
          "Managed large-scale database serving 13,000+ individuals"
        ]
      }
    ],
    skills: {
      technical: ["React", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "SQLite", "M-PESA API", "JWT Authentication", "RESTful APIs"],
      tools: ["Git", "Docker", "AWS", "Chart.js", "D3.js", "Tailwind CSS", "Framer Motion", "PostgreSQL", "Redis", "Stripe"]
    },
    projects: [
      {
        name: "FarmTrackAI Platform",
        description: "Comprehensive agricultural management platform serving 1,800+ Kenyan farmers",
        technologies: ["Next.js", "TypeScript", "SQLite", "M-PESA API", "Offline Sync"],
        impact: "1,800+ farmers served with offline capabilities and multi-role support"
      },
      {
        name: "AFFINA Association Management",
        description: "Enterprise-grade platform for managing 2M+ members across 10,000+ organizations",
        technologies: ["React", "Node.js", "MongoDB", "Payment Gateways", "Analytics"],
        impact: "2M+ members managed with event planning and donation systems"
      },
      {
        name: "Universal Peace Federation Database",
        description: "Large-scale database system managing 13,000+ individuals",
        technologies: ["MongoDB", "Express.js", "React", "Node.js", "Chart.js"],
        impact: "13,000+ individuals managed with content management system"
      }
    ]
  }

  const generatePDF = async () => {
    setIsGenerating(true)
    
    try {
      // Create a new window for PDF generation
      const printWindow = window.open('', '_blank')
      
      if (!printWindow) {
        alert('Please allow popups to generate PDF')
        return
      }

      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Collins Macharia - CV</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              background: #fff;
            }
            
            .cv-container {
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              background: #fff;
            }
            
            .header {
              display: flex;
              align-items: center;
              margin-bottom: 30px;
              padding-bottom: 20px;
              border-bottom: 3px solid #10b981;
            }
            
            .profile-image {
              width: 120px;
              height: 120px;
              border-radius: 50%;
              object-fit: cover;
              border: 4px solid #10b981;
              margin-right: 30px;
            }
            
            .header-info h1 {
              font-size: 2.5rem;
              color: #1f2937;
              margin-bottom: 5px;
              font-weight: 700;
            }
            
            .header-info .title {
              font-size: 1.2rem;
              color: #10b981;
              margin-bottom: 10px;
              font-weight: 600;
            }
            
            .contact-info {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 10px;
              font-size: 0.9rem;
              color: #6b7280;
            }
            
            .contact-item {
              display: flex;
              align-items: center;
              gap: 8px;
            }
            
            .section {
              margin-bottom: 30px;
            }
            
            .section-title {
              font-size: 1.4rem;
              color: #1f2937;
              margin-bottom: 15px;
              padding-bottom: 5px;
              border-bottom: 2px solid #e5e7eb;
              font-weight: 600;
            }
            
            .summary {
              background: #f9fafb;
              padding: 20px;
              border-radius: 8px;
              border-left: 4px solid #10b981;
              font-size: 1rem;
              line-height: 1.7;
            }
            
            .experience-item {
              margin-bottom: 25px;
              padding: 20px;
              background: #f8fafc;
              border-radius: 8px;
              border-left: 4px solid #3b82f6;
            }
            
            .experience-header {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              margin-bottom: 10px;
            }
            
            .company-info h3 {
              font-size: 1.1rem;
              color: #1f2937;
              margin-bottom: 5px;
            }
            
            .position {
              color: #10b981;
              font-weight: 600;
              margin-bottom: 5px;
            }
            
            .period-location {
              color: #6b7280;
              font-size: 0.9rem;
            }
            
            .achievements {
              margin-top: 15px;
            }
            
            .achievements ul {
              list-style: none;
              padding-left: 0;
            }
            
            .achievements li {
              margin-bottom: 8px;
              padding-left: 20px;
              position: relative;
            }
            
            .achievements li:before {
              content: "▶";
              position: absolute;
              left: 0;
              color: #10b981;
              font-size: 0.8rem;
            }
            
            .skills-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
            }
            
            .skill-category h4 {
              color: #1f2937;
              margin-bottom: 10px;
              font-size: 1rem;
            }
            
            .skill-tags {
              display: flex;
              flex-wrap: wrap;
              gap: 8px;
            }
            
            .skill-tag {
              background: #10b981;
              color: white;
              padding: 4px 12px;
              border-radius: 20px;
              font-size: 0.8rem;
              font-weight: 500;
            }
            
            .project-item {
              margin-bottom: 20px;
              padding: 15px;
              background: #f0f9ff;
              border-radius: 8px;
              border-left: 4px solid #0ea5e9;
            }
            
            .project-name {
              font-size: 1.1rem;
              color: #1f2937;
              margin-bottom: 5px;
              font-weight: 600;
            }
            
            .project-description {
              color: #6b7280;
              margin-bottom: 10px;
            }
            
            .project-tech {
              display: flex;
              flex-wrap: wrap;
              gap: 6px;
              margin-bottom: 8px;
            }
            
            .tech-tag {
              background: #0ea5e9;
              color: white;
              padding: 2px 8px;
              border-radius: 12px;
              font-size: 0.7rem;
            }
            
            .project-impact {
              color: #059669;
              font-size: 0.9rem;
              font-weight: 500;
            }
            
            .stats-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 15px;
              margin-bottom: 30px;
            }
            
            .stat-item {
              text-align: center;
              padding: 15px;
              background: linear-gradient(135deg, #10b981, #059669);
              color: white;
              border-radius: 8px;
            }
            
            .stat-number {
              font-size: 1.5rem;
              font-weight: 700;
              margin-bottom: 5px;
            }
            
            .stat-label {
              font-size: 0.8rem;
              opacity: 0.9;
            }
            
            @media print {
              body { -webkit-print-color-adjust: exact; }
              .cv-container { max-width: none; margin: 0; padding: 0; }
            }
          </style>
        </head>
        <body>
          <div class="cv-container">
            <!-- Header -->
            <div class="header">
              <img src="/collins.jpg" alt="Collins Macharia" class="profile-image">
              <div class="header-info">
                <h1>${cvData.personalInfo.name}</h1>
                <div class="title">${cvData.personalInfo.title}</div>
                <div class="contact-info">
                  <div class="contact-item">
                    <span>📧</span>
                    <span>${cvData.personalInfo.email}</span>
                  </div>
                  <div class="contact-item">
                    <span>📱</span>
                    <span>${cvData.personalInfo.phone}</span>
                  </div>
                  <div class="contact-item">
                    <span>📍</span>
                    <span>${cvData.personalInfo.location}</span>
                  </div>
                  <div class="contact-item">
                    <span>💼</span>
                    <span>${cvData.personalInfo.linkedin}</span>
                  </div>
                  <div class="contact-item">
                    <span>💻</span>
                    <span>${cvData.personalInfo.github}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Impact Stats -->
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-number">2M+</div>
                <div class="stat-label">Users Impacted</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">7+</div>
                <div class="stat-label">Projects Delivered</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">2+</div>
                <div class="stat-label">Years Experience</div>
              </div>
            </div>

            <!-- Professional Summary -->
            <div class="section">
              <h2 class="section-title">Professional Summary</h2>
              <div class="summary">
                ${cvData.summary}
              </div>
            </div>

            <!-- Experience -->
            <div class="section">
              <h2 class="section-title">Professional Experience</h2>
              ${cvData.experience.map(exp => `
                <div class="experience-item">
                  <div class="experience-header">
                    <div class="company-info">
                      <h3>${exp.company}</h3>
                      <div class="position">${exp.position}</div>
                    </div>
                    <div class="period-location">
                      <div>${exp.period}</div>
                      <div>${exp.location}</div>
                    </div>
                  </div>
                  <div class="achievements">
                    <ul>
                      ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Skills -->
            <div class="section">
              <h2 class="section-title">Technical Skills</h2>
              <div class="skills-grid">
                <div class="skill-category">
                  <h4>Frontend & Backend</h4>
                  <div class="skill-tags">
                    ${cvData.skills.technical.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                  </div>
                </div>
                <div class="skill-category">
                  <h4>Tools & Technologies</h4>
                  <div class="skill-tags">
                    ${cvData.skills.tools.map(tool => `<span class="skill-tag">${tool}</span>`).join('')}
                  </div>
                </div>
              </div>
            </div>

            <!-- Key Projects -->
            <div class="section">
              <h2 class="section-title">Key Projects</h2>
              ${cvData.projects.map(project => `
                <div class="project-item">
                  <div class="project-name">${project.name}</div>
                  <div class="project-description">${project.description}</div>
                  <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                  </div>
                  <div class="project-impact">Impact: ${project.impact}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </body>
        </html>
      `

      printWindow.document.write(htmlContent)
      printWindow.document.close()
      
      // Wait for image to load, then print
      setTimeout(() => {
        printWindow.print()
        printWindow.close()
      }, 1000)
      
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error generating PDF. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 p-6 rounded-lg border border-gray-700"
    >
      <div className="flex items-center space-x-3 mb-4">
        <FileText className="w-6 h-6 text-blue-400" />
        <h3 className="text-green-400 text-lg font-semibold">CV Generator</h3>
      </div>
      
      <p className="text-gray-300 text-sm mb-4">
        Generate a professional PDF CV with your image and all your experience details.
      </p>
      
      <motion.button
        onClick={generatePDF}
        disabled={isGenerating}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isGenerating ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Generating PDF...</span>
          </>
        ) : (
          <>
            <Download className="w-4 h-4" />
            <span>Generate CV PDF</span>
          </>
        )}
      </motion.button>
      
      <div className="mt-3 text-xs text-gray-400">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <User className="w-3 h-3" />
            <span>Professional Design</span>
          </span>
          <span className="flex items-center space-x-1">
            <Award className="w-3 h-3" />
            <span>Impact Stats</span>
          </span>
          <span className="flex items-center space-x-1">
            <Code className="w-3 h-3" />
            <span>Tech Stack</span>
          </span>
        </div>
      </div>
    </motion.div>
  )
}
