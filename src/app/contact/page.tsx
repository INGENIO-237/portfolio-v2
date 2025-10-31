"use client";

import { getKey } from "@/lib/utils";
import { motion } from "framer-motion";
import { Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import { SiGithub, SiWakatime } from "react-icons/si";

export default function Page() {
  const socials = [
    {
      icon: <Mail size={24} />,
      link: "mailto:ingeniokhalif@gmail.com",
      text: "ingeniokhalif@gmail.com",
      label: "Email",
      description: "Drop me a line anytime",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Linkedin size={24} />,
      link: "https://www.linkedin.com/in/ben-hamadou-abdel-kalif-671111228",
      text: "BEN HAMADOU ABDEL-KALIF",
      label: "LinkedIn",
      description: "Let's connect professionally",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <SiGithub size={24} />,
      link: "https://github.com/INGENIO-237/",
      text: "INGENIO-237",
      label: "GitHub",
      description: "Check out my repositories",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: <SiWakatime size={24} />,
      link: "https://wakatime.com/@d96fcc68-a326-41b9-a36f-c9eeb317a3b6",
      text: "INGENIO",
      label: "WakaTime",
      description: "View my coding activity",
      color: "from-purple-500 to-indigo-600"
    },
  ];

  return (
    <div className="min-h-screen px-4 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 text-4xl opacity-5">📧</div>
        <div className="absolute top-40 right-20 text-3xl opacity-5">🤝</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-5">💬</div>
        <div className="absolute bottom-20 right-10 text-2xl opacity-5">🌐</div>
        <div className="absolute top-1/2 left-5 text-3xl opacity-5">📱</div>
        <div className="absolute top-1/3 right-5 text-4xl opacity-5">✨</div>
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
          <span>📞</span>
          <span>Get In Touch</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white dark:from-white from-gray-900 to-gray-300 dark:to-gray-300 to-gray-600 bg-clip-text text-transparent"
        >
          Let's <span className="text-p_green">Connect</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 dark:text-gray-300 text-gray-600 leading-relaxed"
        >
          I'm always excited to discuss new opportunities, collaborate on projects,
          <br className="hidden md:block" />
          or simply have a conversation about technology and innovation. 🚀
        </motion.p>
      </motion.div>

      {/* Contact Cards */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socials.map((social, index) => (
            <motion.div
              key={getKey()}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <Link
                href={social.link}
                target="_blank"
                className="relative block bg-zinc-900/50 dark:bg-zinc-900/50 bg-white/80 backdrop-blur-sm border border-white/10 dark:border-white/10 border-gray-200 rounded-2xl p-6 hover:border-p_green/30 transition-all duration-500 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${social.color} text-white`}>
                    {social.icon}
                  </div>
                  <ExternalLink size={16} className="text-gray-400 dark:text-gray-400 text-gray-500 group-hover:text-p_green transition-colors duration-300" />
                </div>
                
                <h3 className="font-bold text-xl mb-2 text-white dark:text-white text-gray-900 group-hover:text-p_green transition-colors duration-300">
                  {social.label}
                </h3>
                
                <p className="text-gray-300 dark:text-gray-300 text-gray-600 text-sm mb-3">
                  {social.description}
                </p>
                
                <p className="text-p_green text-sm font-medium truncate">
                  {social.text}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-20 max-w-2xl mx-auto"
      >
        <div className="bg-zinc-900/30 dark:bg-zinc-900/30 bg-white/90 backdrop-blur-sm border border-white/10 dark:border-white/10 border-gray-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-white dark:text-white text-gray-900">
            Ready to start something amazing? ✨
          </h3>
          <p className="text-gray-300 dark:text-gray-300 text-gray-600 mb-6">
            Whether you have a project in mind, want to discuss opportunities, or just want to say hello,
            I'd love to hear from you. Let's build something great together!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-p_green/10 text-p_green rounded-full border border-p_green/20 text-sm">
              💼 Open to opportunities
            </span>
            <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 text-sm">
              🤝 Available for collaboration
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}