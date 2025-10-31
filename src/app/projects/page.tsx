"use client";

import { getKey } from "@/lib/utils";
import { motion } from "framer-motion";
import { Code, ExternalLink, Users } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const projects = [
    {
      title: "Platform98",
      roles: ["Backend Developer"],
      description:
        "A comprehensive business services platform built with NestJS, providing digital solutions for company registration, document processing, and business management services in Cameroon and beyond.",
      link: "https://platform98.com/",
      tech: ["NestJS", "TypeScript", "MongoDB", "Pawapay", "Twilio"],
      category: "Business Platform"
    },
    {
      title: "AWS Community Day Cameroon",
      roles: ["Frontend Developer"],
      description:
        "The official website of the yearly AWS Community Day Cameroon event",
      link: "https://communityday.awscmr.com/",
      tech: ["Vue", "Nuxt", "Amplify"],
      category: "Event Website"
    },
    {
      title: "Toolbox",
      roles: ["Project Lead", "Developer"],
      description:
        "A toolkit for seamless multi-region payment and sms sending integrations built on top of Stripe, Pawapay and Twilio",
      link: "https://github.com/INGENIO-237/toolbox",
      tech: ["Node.js", "Stripe API", "Twilio"],
      category: "Developer Tool"
    },
    {
      title: "YaFoot-FC",
      roles: ["Developer"],
      description:
        "A web platform for managing the internal activities of the Yaounde II FC (YaFoot). Supporters can buy member's cards, articles(jerseys, goodies, etc...), and make donations to the club.",
      link: "https://yafoot-fc.com",
      tech: ["React", "Node.js", "MySQL"],
      category: "Sports Platform"
    },
    {
      title: "IME-SCHOOL",
      roles: ["Developer"],
      description:
        "Website of IME-SCHOOL, it presents the different programs and fields of study present there.",
      link: "https://www.ime-school.com/",
      tech: ["Next.js", "React", "TailwindCSS"],
      category: "Educational Website"
    },
  ];

  return (
    <div className="min-h-screen px-4 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 text-4xl opacity-5">💼</div>
        <div className="absolute top-40 right-20 text-3xl opacity-5">🚀</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-5">⚡</div>
        <div className="absolute bottom-20 right-10 text-2xl opacity-5">💻</div>
        <div className="absolute top-1/2 left-5 text-3xl opacity-5">🎯</div>
        <div className="absolute top-1/3 right-5 text-4xl opacity-5">🔧</div>
      </div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-p_green/10 text-p_green rounded-full border border-p_green/20 text-sm font-medium mb-6"
        >
          <span>💼</span>
          <span>Portfolio Showcase</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        >
          Featured <span className="text-p_green">Projects</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          A curated collection of projects showcasing my expertise in backend development,
          <br className="hidden md:block" />
          full-stack solutions, and collaborative development. 🚀
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={getKey()}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-p_green/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-zinc-900/50 dark:bg-zinc-900/50 bg-white/80 backdrop-blur-sm border border-white/10 dark:border-white/10 border-gray-200 rounded-2xl p-6 h-full hover:border-p_green/30 transition-all duration-500">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-p_green/20 text-p_green text-xs rounded-full border border-p_green/30">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Users size={14} />
                    <span className="text-xs">{project.roles.length} role{project.roles.length > 1 ? 's' : ''}</span>
                  </div>
                </div>

                {/* Project Title */}
                <h2 className="font-bold text-2xl mb-3 text-white dark:text-white text-gray-900 group-hover:text-p_green transition-colors duration-300">
                  {project.title}
                </h2>

                {/* Roles */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.roles.map((role) => (
                    <span
                      key={role}
                      className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md border border-blue-500/20"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-300 dark:text-gray-300 text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Code size={14} className="text-p_green" />
                    <span className="text-xs font-medium text-gray-400 dark:text-gray-400 text-gray-500">Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700/50 dark:bg-gray-700/50 bg-gray-100 text-gray-300 dark:text-gray-300 text-gray-700 text-xs rounded border border-gray-600/50 dark:border-gray-600/50 border-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Link */}
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-p_green hover:text-p_green/80 transition-colors duration-300 group/link"
                  >
                    <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                    <span className="text-sm font-medium">View Project</span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-center mt-20"
      >
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Interested in collaborating? 🤝
          </h3>
          <p className="text-gray-300 mb-6">
            I&apos;m always open to discussing new opportunities and exciting projects.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-p_green text-white rounded-lg hover:bg-p_green/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-p_green/25"
          >
            💬 Let&apos;s Connect
          </Link>
        </div>
      </motion.div>
    </div>
  );
}