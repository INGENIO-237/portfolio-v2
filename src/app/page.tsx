"use client";

import { Button } from "@/components/ui/button";
import Avatar from "@/public/images/avatar.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { FaAws, FaJava } from "react-icons/fa6";
import {
  SiAnsible,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiJest,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSpring,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVisualstudiocode
} from "react-icons/si";

export default function Home() {
  const [isBackendHovered, setIsBackendHovered] = useState(false);
  const [isDevopsHovered, setIsDevopsHovered] = useState(false);

  function handleDownloadResume() {
    const a = document.createElement("a");
    a.href = "https://cvdesignr.com/p/671444ff85525";
    a.download = "Ben_Hamadou_Resume.pdf";
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
  }

  return (
    <>
      {/* Hero Section */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 text-6xl opacity-10">💻</div>
          <div className="absolute top-40 right-20 text-4xl opacity-10">⚡</div>
          <div className="absolute bottom-40 left-20 text-5xl opacity-10">🚀</div>
          <div className="absolute bottom-20 right-10 text-3xl opacity-10">☁️</div>
          <div className="absolute top-1/2 left-5 text-2xl opacity-10">🔧</div>
          <div className="absolute top-1/3 right-5 text-3xl opacity-10">📱</div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-6"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-p_green/20 to-blue-500/20 rounded-full blur-xl"></div>
          <Image
            src={Avatar}
            alt="Avatar"
            width={180}
            height={180}
            className="rounded-full pointer-events-none relative z-10 border-4 border-white/10"
          />
          <div className="absolute -top-2 -right-2 text-2xl animate-bounce">👋</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center space-y-6 max-w-4xl"
        >
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm font-medium text-p_green mb-2"
            >
              🌟 Welcome to my digital space
            </motion.div>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Hey, I'm Ben Hamadou
              <br />
              <span className="text-p_green text-3xl md:text-4xl lg:text-5xl">(INGENIO)</span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-2 text-sm"
          >
            <span className="px-3 py-1 bg-p_green/10 text-p_green rounded-full border border-p_green/20">🔧 Backend Engineer</span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">☁️ DevOps Enthusiast</span>
            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">🏗️ Solution Architect</span>
            <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">👨🏫 Mentor</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-lg md:text-xl leading-relaxed text-gray-300"
          >
            Backend Engineer with{" "}
            <span className="text-p_green font-semibold">3+ years of experience</span>{" "}
            crafting robust, scalable server-side applications. 🚀
            <br className="hidden md:block" />
            Passionate about{" "}
            <span className="text-p_green font-semibold">clean code</span>,{" "}
            <span className="text-p_green font-semibold">cloud infrastructure</span>, and{" "}
            <span className="text-p_green font-semibold">mentoring developers</span>.
            <br />
            💡 <em>"Giving back to the community is the key."</em>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
          >
            <div className="flex items-center gap-1">
              <span>📍</span>
              <span>Cameroon</span>
            </div>
            <div className="flex items-center gap-1">
              <span>💼</span>
              <span>Available for opportunities</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🌐</span>
              <span>Remote-friendly</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="mt-8 flex gap-4 items-center flex-col sm:flex-row"
        >
          <Link href="/contact">
            <Button className="px-8 py-3 bg-p_green text-white hover:bg-p_green/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-p_green/25">
              💬 Get In Touch
            </Button>
          </Link>
          <Button
            className="px-8 py-3 bg-transparent border-2 border-p_green text-p_green hover:bg-p_green hover:text-white transition-all duration-300 hover:scale-105"
            onClick={handleDownloadResume}
          >
            📄 Download CV
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 text-center"
        >
          <div className="text-sm text-gray-500 mb-2">Scroll to explore my tech stack</div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-2xl"
          >
            ⬇️
          </motion.div>
        </motion.div>
      </div>
      {/* Backend Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="my-32 px-4 relative"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 text-4xl opacity-5">⚙️</div>
          <div className="absolute top-20 right-20 text-3xl opacity-5">🔧</div>
          <div className="absolute bottom-10 left-20 text-5xl opacity-5">💻</div>
          <div className="absolute bottom-20 right-10 text-2xl opacity-5">🚀</div>
        </div>

        <div className="text-center space-y-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-p_green/10 text-p_green rounded-full border border-p_green/20 text-sm font-medium"
          >
            <span>🔧</span>
            <span>Backend Development</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-p_green to-green-400 bg-clip-text text-transparent"
          >
            Server-Side Mastery
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed"
          >
            Building robust, scalable server-side applications with modern frameworks and databases. 
            <br className="hidden md:block" />
            From APIs to microservices, I craft solutions that power digital experiences. 💪
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-3 text-sm"
          >
            <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">🌐 RESTful APIs</span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">🔄 Microservices</span>
            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">🗄️ Database Design</span>
            <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">🧪 Testing</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-p_green/5 via-transparent to-p_green/5 rounded-2xl"></div>
          <div 
            className="overflow-hidden py-8 rounded-2xl border border-white/5"
            onMouseEnter={() => setIsBackendHovered(true)}
            onMouseLeave={() => setIsBackendHovered(false)}
          >
            <div
              className="flex gap-12 w-max"
              style={{
                animation: 'scrollLeft 25s linear infinite',
                animationPlayState: isBackendHovered ? 'paused' : 'running'
              }}
            >
              <SiNodedotjs
                size={70}
                title="NodeJS"
                className="hover:text-green-600 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiNestjs
                size={70}
                title="NestJS"
                className="hover:text-red-600 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiTypescript
                size={70}
                title="TypeScript"
                className="hover:text-blue-500 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiExpress
                size={70}
                title="Express"
                className="hover:text-gray-400 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <FaJava
                size={70}
                title="Java"
                className="hover:text-red-500 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiSpring
                size={70}
                title="Spring Boot"
                className="hover:text-green-500 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiPython
                size={70}
                title="Python"
                className="hover:text-yellow-500 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiFastapi
                size={70}
                title="FastAPI"
                className="hover:text-green-500 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiPostgresql
                size={70}
                title="PostgreSQL"
                className="hover:text-blue-500 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiMongodb
                size={70}
                title="MongoDB"
                className="hover:text-green-500 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiJest
                size={70}
                title="Testing"
                className="hover:text-red-500 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiReact
                size={70}
                title="React"
                className="hover:text-blue-400 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiNextdotjs size={70} title="NextJS" className="flex-shrink-0 hover:scale-110 transition-all duration-500 drop-shadow-lg" />
              <SiTailwindcss
                size={70}
                title="TailwindCSS"
                className="hover:text-blue-500 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              {/* Duplicate for seamless loop */}
              <SiNodedotjs
                size={70}
                title="NodeJS"
                className="hover:text-green-600 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiNestjs
                size={70}
                title="NestJS"
                className="hover:text-red-600 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiTypescript
                size={70}
                title="TypeScript"
                className="hover:text-blue-500 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiExpress
                size={70}
                title="Express"
                className="hover:text-gray-400 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Cloud & DevOps Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="my-32 px-4 relative"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 right-10 text-4xl opacity-5">☁️</div>
          <div className="absolute top-20 left-20 text-3xl opacity-5">🐳</div>
          <div className="absolute bottom-10 right-20 text-5xl opacity-5">⚙️</div>
          <div className="absolute bottom-20 left-10 text-2xl opacity-5">🚀</div>
        </div>

        <div className="text-center space-y-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 text-sm font-medium"
          >
            <span>☁️</span>
            <span>Cloud & DevOps</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Infrastructure Excellence
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed"
          >
            Infrastructure automation, containerization, and cloud deployment tools for reliable software delivery.
            <br className="hidden md:block" />
            Scaling applications with confidence in the cloud. 🌩️
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-3 text-sm"
          >
            <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">☁️ Cloud Architecture</span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">🐳 Containerization</span>
            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">🔄 CI/CD Pipelines</span>
            <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">📊 Monitoring</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 rounded-2xl"></div>
          <div 
            className="overflow-hidden py-8 rounded-2xl border border-white/5"
            onMouseEnter={() => setIsDevopsHovered(true)}
            onMouseLeave={() => setIsDevopsHovered(false)}
          >
            <div
              className="flex gap-12 w-max"
              style={{
                animation: 'scrollRight 30s linear infinite',
                animationPlayState: isDevopsHovered ? 'paused' : 'running'
              }}
            >
              <FaAws
                size={70}
                title="AWS"
                className="hover:text-orange-500 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiDocker
                size={70}
                title="Docker"
                className="hover:text-blue-500 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiKubernetes
                size={70}
                title="Kubernetes"
                className="hover:text-blue-600 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiTerraform
                size={70}
                title="Terraform"
                className="hover:text-violet-600 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiAnsible
                size={70}
                title="Ansible"
                className="hover:text-red-500 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiGithubactions
                size={70}
                title="GitHub Actions"
                className="hover:text-blue-500 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiGit
                size={70}
                title="Git"
                className="hover:text-orange-600 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiGithub size={70} title="GitHub" className="flex-shrink-0 hover:scale-110 transition-all duration-500 drop-shadow-lg" />
              <SiGitlab
                size={70}
                title="GitLab"
                className="hover:text-orange-500 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiLinux size={70} title="Linux" className="flex-shrink-0 hover:scale-110 transition-all duration-500 drop-shadow-lg" />
              <SiVisualstudiocode
                size={70}
                title="VSCode"
                className="hover:text-blue-500 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiPostman
                size={70}
                title="Postman"
                className="hover:text-orange-500 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              {/* Duplicate for seamless loop */}
              <FaAws
                size={70}
                title="AWS"
                className="hover:text-orange-500 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiDocker
                size={70}
                title="Docker"
                className="hover:text-blue-500 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiKubernetes
                size={70}
                title="Kubernetes"
                className="hover:text-blue-600 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
              <SiTerraform
                size={70}
                title="Terraform"
                className="hover:text-violet-600 transition-all duration-500 flex-shrink-0 hover:scale-110 drop-shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}