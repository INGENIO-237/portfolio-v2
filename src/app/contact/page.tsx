import { Linkedin } from "lucide-react";
import { getKey } from "@/lib/utils";
import Link from "next/link";
import { SiGithub, SiGmail, SiWakatime } from "react-icons/si";

export default function Page() {
  const socials = [
    {
      icon: <SiGmail size={25} />,
      link: "mailto:ingeniokhalif@gmail.com",
      text: "BEN HAMADOU ABDEL-KALIF",
    },
    {
      icon: <Linkedin size={25} />,
      link: "https://www.linkedin.com/in/ben-hamadou-abdel-kalif-671111228",
      text: "BEN HAMADOU ABDEL-KALIF",
    },
    {
      icon: <SiGithub size={25} />,
      link: "https://github.com/INGENIO-237/",
      text: "INGENIO-237",
    },
    {
      icon: <SiWakatime size={25} />,
      link: "https://wakatime.com/@d96fcc68-a326-41b9-a36f-c9eeb317a3b6",
      text: "INGENIO",
    },
  ];

  return (
    <div className="min-h-[85vh]">
      <div className="max-w-[500px] space-y-5 my-5">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
          Let&apos; <span className="text-p_green">connect</span>
        </h1>
        <p>
          Let me hear from you and <span className="text-p_green">learn</span>{" "}
          from each other.
        </p>
      </div>
      {/* Socials */}
      <div className="flex flex-col justify-center">
        {socials.map((social) => (
          <Link
            key={getKey()}
            href={social.link}
            target="_blank"
            className="p-2"
          >
            <div className="flex">
              <div className="flex gap-2 items-center">
                {social.icon}
                {social.text}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
