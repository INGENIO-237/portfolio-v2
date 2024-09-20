import Image from "next/image";
import Logo from "@/public/images/ingenio-logo.png";
import MobNavbar from "./partials/MobNavbar";
import Navbar from "./partials/Navbar";

export default function Header() {
  return (
    <div className="py-2 md:py-5 flex items-center justify-between container">
      <Image src={Logo} width={80} height={80} alt="Logo" priority className="-ml-2" />

      {/* Nav */}
      <MobNavbar />
      <Navbar />
    </div>
  );
}
