"use client";

import { getKey } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const projects = [
    {
      title: "Toolbox",
      roles: ["Project Lead", "Developer"],
      description:
        "A multi-region payment aggregator for seamless integration of online payments(Stripe & Mobile payments) and SMS(Twilio) sending features, that aims to reduce internal projects development time, and increase developers' productivity.",
      link: "https://link.dev",
    },
    {
      title: "First Event",
      roles: ["Project Lead", "Developer"],
      description:
        "Events management and ticketing platform based in Canada. The service enables users to search for, create and promote local events.",
      link: "https://link.dev",
    },
    {
      title: "YaFoot-FC",
      roles: ["Developer"],
      description:
        "A web platform for managing the internal activities of the Yaounde II FC (YaFoot). Supporters can buy member's cards, articles(jerseys, goodies, etc...), and make donations to the club.",
      link: "https://link.dev",
    },
    {
      title: "Pokedex",
      roles: ["Developer"],
      description:
        "A (hobby) mobile app that takes advantage of the pokeApi, to display a list of pokemons, filter/sort them, and get details on a given pokemon.",
      link: "https://link.dev",
    },
    {
      title: "MYWAY Voyage",
      roles: ["Developer"],
      description:
        "Website of the travelling agency MYWAY Voyage. It presents the different services offered by the agency, such as: Foreign study visa, Foreign work visa, etc...",
      link: "https://link.dev",
    },
    {
      title: "Evenafro",
      roles: ["Developer"],
      description:
        "Events mobile platform based in Canada that aims to promote Black-African culture by allowing its users browse for local events.",
      link: "https://link.dev",
    },
    {
      title: "TV Box",
      roles: ["Developer"],
      description:
        "Website of a merchant based in Canada that sells TV Boxes. The website aims to presents its products and their features.",
      link: "https://link.dev",
    },
    // Add more projects as needed
  ];

  return (
    <>
      <div className="max-w-[500px] space-y-5">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
          A registry of the <span className="text-[#2a9d8f]">projects</span>{" "}
          I&apos;ve worked on this far
        </h1>
        <p>
          Trying to learn everyday, here is a list of most of the project
          I&apos;ve worked on so far.
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
            className="w-full md:w-[40%] lg:w-[30%] my-5 p-3 space-y-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-300"
          >
            <h2 className="font-bold text-2xl">{project.title}</h2>
            <p className="text-md">{project.description}</p>
            <Link
              href={project.link}
              target="_blank"
              className="text-[#2a9d8f]  hover:underline flex items-center gap-2 flex-1/3"
            >
              <LinkIcon size={15} /> <h1>{project.link}</h1>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
}
