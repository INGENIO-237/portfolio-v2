"use client";

import Image from "next/image";
import Avatar from "@/public/images/avatar.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { getKey } from "@/lib/utils";

export default function Home() {
  const socials = [
    {
      icon: <Linkedin size={25} />,
      link: "https://www.linkedin.com/in/ben-hamadou-abdel-kalif-671111228",
    },
  ];

  return (
    <div className="flex-1">
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
            I am a full-stack software engineer with over 3 years of
            professional experience, specializing in backend development. My
            expertise lies in crafting robust and scalable SaaS-based
            architectures on the Amazon AWS platform.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
          className="my-5 flex gap-3 items-center flex-col md:flex-row"
        >
          {/* Socials */}
          <div className="flex items-center">
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
          </div>
          {/* Buttons */}
          <div className="flex gap-3">
            <Link href="/contact">
              <Button>Get In Touch</Button>
            </Link>
            < Button variant="outline" className="p-2">
              Download CV
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
