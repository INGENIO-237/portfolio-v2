"use client";

import { getKey } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const projects = [
    {
      title: "Platform98",
      roles: ["Backend Developer"],
      description:
        "A platform that takes care of your administrative and legal affairs. It helps small and medium size businesses to outsouce their tedious and time-consuming workloads",
      link: "https://platform98.com/",
    },
    {
      title: "AWS Community Day Cameroon",
      roles: ["Backend Developer"],
      description:
        "The official website of the yearly AWS Community Day Cameroon event",
      link: "https://community-day.vercel.app/",
    },
    {
      title: "Toolbox",
      roles: ["Project Lead", "Developer"],
      description:
        "A toolkit for seamless multi-region payment and sms sending integrations built on top of Stripe, Pawapay and Twilio",
      link: "https://github.com/INGENIO-237/toolbox",
    },
    // {
    //   title: "Cameroon E-Sport",
    //   roles: ["Developer"],
    //   description:
    //     "A platform requested by the Cameroon E-Sport Federation, that will help them recruit and manage Gamers all around the country",
    //   link: "https://shorturl.at/xN7CR",
    // },
    // {
    //   title: "Latrice",
    //   roles: ["Project Lead", "Developer"],
    //   description:
    //     "A hair style service based in the US that connects hair style professionals and customers",
    //   link: "https://shorturl.at/e5oQf",
    // },
    {
      title: "YaFoot-FC",
      roles: ["Developer"],
      description:
        "A web platform for managing the internal activities of the Yaounde II FC (YaFoot). Supporters can buy member's cards, articles(jerseys, goodies, etc...), and make donations to the club.",
      link: "https://yafoot-fc.com",
    },
    // {
    //   title: "RACING FC",
    //   roles: ["Developer"],
    //   description:
    //     "A web platform for managing the internal activities of the RACING FC of  Bafoussam. Supporters can buy member's cards, articles(jerseys, goodies, etc...), and make donations to the club.",
    //   link: "https://shorturl.at/qSGKC",
    // },
    {
      title: "IME-SCHOOL",
      roles: ["Developer"],
      description:
        "Website of IME-SCHOOL, it presents the different programs and fields of study present there.",
      link: "https://www.ime-school.com/",
    },
    // {
    //   title: "First Event",
    //   roles: ["Project Lead", "Developer"],
    //   description:
    //     "Events management platform based in Canada for creating, managing and promoting local events",
    //   // link: "https://link.dev",
    // },
    // {
    //   title: "Pokedex",
    //   roles: ["Developer"],
    //   description:
    //     "A (hobby) mobile app that takes advantage of the pokeApi, to display a list of pokemons, filter/sort them, and get details on a given pokemon.",
    //   link: "https://link.dev",
    // },
    // {
    //   title: "MYWAY Voyage",
    //   roles: ["Developer"],
    //   description:
    //     "Website of the travelling agency MYWAY Voyage. It presents the different services offered by the agency, such as: Foreign study visa, Foreign work visa, etc...",
    //   link: "https://mw-voyage.vercel.app/",
    // },
    // {
    //   title: "Evenafro",
    //   roles: ["Developer"],
    //   description:
    //     "Events mobile platform based in Canada that aims to promote Black-African culture by allowing its users browse for local events.",
    //   link: "https://evenafro.com",
    // },
    // {
    //   title: "TV Box",
    //   roles: ["Developer"],
    //   description:
    //     "Website of a merchant based in Canada that sells TV Boxes. The website aims to presents its products and their features.",
    //   link: "https://link.dev",
    // },
  ];

  return (
    <>
      <div className="max-w-[500px] space-y-5">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
          A registry of the <span className="text-p_green">projects</span>{" "}
          I&apos;ve worked on this far
        </h1>
        <p>
          Trying to learn everyday, here is a list of most of the projects
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
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                className="text-p_green  hover:underline flex items-center gap-2 flex-1/3"
              >
                <LinkIcon size={15} /> <h1>{project.link}</h1>
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
}
