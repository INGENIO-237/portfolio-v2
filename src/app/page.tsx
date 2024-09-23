"use client";

import Image from "next/image";
import Avatar from "@/public/images/avatar.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
// import { Linkedin } from "lucide-react";
// import { getKey } from "@/lib/utils";

// Technologies
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiKubernetes,
  SiGitlab,
  SiTerraform,
  SiAnsible,
  SiPython,
  SiVisualstudiocode,
  SiLinux,
} from "react-icons/si";
import { useRef } from "react";
import { FaAws } from "react-icons/fa6";

export default function Home() {
  // const socials = [
  //   {
  //     icon: <Linkedin size={25} />,
  //     link: "https://www.linkedin.com/in/ben-hamadou-abdel-kalif-671111228",
  //   },
  // ];

  const techsRef = useRef(null);
  const techsInView = useInView(techsRef);
  const toolsRef = useRef(null);
  const toolsInView = useInView(toolsRef);

  return (
    <>
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, translateY: 30 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        className="w-full flex flex-col items-center justify-center"
      >
        <Image
          src={Avatar}
          alt="Avatar"
          width={150}
          height={150}
          className="rounded-full pointer-events-none"
        />
        <div className="text-center mt-5 space-y-3 md:max-w-[500px] lg:max-w-[580px]">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            Hey, I&apos;m Ben Hamadou (INGENIO)
          </h1>
          <p className="text-lg">
            I am a full-stack software engineer with over{" "}
            <span className="text-p_green">
              3 years of professional experience
            </span>
            , specializing in <span className="text-p_green">backend</span>{" "}
            development, and a <span className="text-p_green">DevOps</span> enthusiast. My expertise lies in crafting robust and scalable
            systems that meet the customers&apos; needs.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
          className="my-5 flex gap-3 items-center flex-col md:flex-row"
        >
          {/* Socials */}
          {/* <div className="flex items-center">
            {socials.map((social) => (
              <Link
                key={getKey()}
                href={social.link}
                target="_blank"
                className="p-2"
              >
                {social.icon}
              </Link>
            ))}
          </div> */}
          {/* Buttons */}
          <div className="flex gap-3">
            <Link href="/contact">
              <Button>Get In Touch</Button>
            </Link>
            <Button className="p-2 bg-p_green text-white hover:bg-white hover:text-p_green transition duration-500">
              Download CV
            </Button>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.2, ease: "easeInOut" }}
        ref={techsRef}
        className="my-10 space-y-5 flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <div className="md:max-w-[450px]">
          <h1 className="text-3xl font-bold">What I speak</h1>
          <p>
            Can&apos;t say that am a native speaker, but, am kinda fluent and
            at my ease.
          </p>
        </div>
        {techsInView && (
          <motion.div
            initial={{ opacity: 0, translateX: 50 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-around gap-5"
          >
            <SiJavascript
              size={50}
              title="JavaScript"
              className="hover:text-yellow-500 transition duration-500"
            />
            <SiTypescript
              size={50}
              title="Typescript"
              className="hover:text-blue-500 transition duration-500"
            />
            <SiNodedotjs
              size={50}
              title="NodeJS"
              className="hover:text-green-600 transition duration-500"
            />
            <SiExpress
              size={50}
              title="Express"
              className="hover:text-gray-500 transition duration-500"
            />
            <SiMongodb
              size={50}
              title="MongoDB"
              className="hover:text-green-500 transition duration-500"
            />
            <SiPython
              size={50}
              title="Python"
              className="hover:text-yellow-500 transition duration-500"
            />
            <SiReact
              size={50}
              title="React"
              className="hover:text-blue-400 transition duration-500"
            />
            <SiNextdotjs size={50} title="NextJS" />
            <SiTailwindcss
              size={50}
              title="TailwindCSS"
              className="hover:text-blue-500 transition duration-500"
            />
          </motion.div>
        )}
      </motion.div>
      <motion.div
        ref={toolsRef}
        className="my-10 space-y-5 flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <div className="md:max-w-[450px]">
          <h1 className="text-3xl font-bold">What I use</h1>
          <p>
            Harry Potter without a wand is just a boy trying to be a wizard. Fortunately, I have many wands that help me do the job.
          </p>
        </div>
        {toolsInView && (
          <motion.div
            initial={{ opacity: 0, translateX: 50 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-around gap-5"
          >
            <SiVisualstudiocode
              size={50}
              title="VSCode"
              className="hover:text-blue-500 transition duration-500"
            />
            <FaAws
              size={50}
              title="AWS"
              className="hover:text-orange-500 transition duration-500"
            />
            <SiDocker
              size={50}
              title="Docker"
              className="hover:text-blue-500 transition duration-500"
            />
            <SiGit
              size={50}
              title="Git"
              className="hover:text-orange-600 transition duration-500"
            />
            <SiGithub size={50} title="Github" />
            <SiPostman
              size={50}
              title="Postman"
              className="hover:text-orange-500 transition duration-500"
            />
            <SiKubernetes
              size={50}
              title="Kubernetes"
              className="hover:text-blue-600 transition duration-500"
            />
            <SiLinux size={50} title="Linux" />
            <SiGitlab
              size={50}
              title="Gitlab"
              className="hover:text-orange-500 transition duration-500"
            />
            <SiTerraform
              size={50}
              title="Terraform"
              className="hover:text-violet-600 transition duration-500"
            />
            <SiAnsible size={50} title="Ansible" />
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
