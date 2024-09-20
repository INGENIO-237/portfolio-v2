"use client";

import { getKey } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const projects = [
    {
      title: "Project 1",
      roles: ["Project Lead", "Developer"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem adipisci optio cumque suscipit quae nostrum nihil, consectetur aut nemo ex!",
      link: "https://link.dev",
    },
    {
      title: "Project 2",
      roles: ["Developer"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem adipisci optio cumque suscipit quae nostrum nihil, consectetur aut nemo ex!",
      link: "https://link.dev",
    },
    {
      title: "Project 3",
      roles: ["Developer"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem adipisci optio cumque suscipit quae nostrum nihil, consectetur aut nemo ex!",
      link: "https://link.dev",
    },
    {
      title: "Project 4",
      roles: ["Developer"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem adipisci optio cumque suscipit quae nostrum nihil, consectetur aut nemo ex!",
      link: "https://link.dev",
    },
    {
      title: "Project 5",
      roles: ["Developer"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem adipisci optio cumque suscipit quae nostrum nihil, consectetur aut nemo ex!",
      link: "https://link.dev",
    },
    // Add more projects as needed
  ];

  return (
    <>
      <div className="max-w-[500px] space-y-5">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
          A registry of the projects I&apos;ve worked on this far
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          adipisci optio cumque suscipit quae nostrum nihil, consectetur aut
          nemo ex!
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-wrap md:flex-row md:justify-around mt-5">
        {projects.map((project) => (
          <motion.div
            initial={{ opacity: 0, translateX: 30 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            key={getKey()}
            className="w-full md:w-[40%] lg:w-[30%] my-5 p-3 space-y-2 hover:bg-zinc-100 transition-colors duration-300"
          >
            <h2 className="font-bold text-2xl">{project.title}</h2>
            <p className="text-md">{project.description}</p>
            <Link
              href={project.link}
              target="_blank"
              className="text-[#2a9d8f]  hover:underline flex items-center gap-2"
            >
              <LinkIcon size={15} /> <h1>{project.link}</h1>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
}
