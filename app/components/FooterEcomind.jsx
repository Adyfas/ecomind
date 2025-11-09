import Link from "next/link";
import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Navitems } from "../global/data/datas";
import { usePathname } from "next/navigation";
import { Earth } from "lucide-react";

const FooterEcomind = () => {
  const router = usePathname();
  return (
    <footer className="relative z-50 w-full bg-neon-dark text-white py-20 md:py-28 mt-20 overflow-hidden rounded-t-3xl h-[104vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col space-y-12">
        <div>
          <h1 className="text-5xl md:text-6xl font-neonfuture text-emerald-400 mb-4">
            EcoMind
          </h1>
          <p className="text-gray-300 text-base leading-relaxed max-w-md">
            Empowering people to make sustainable choices through intelligent
            technology. Together, we can build a cleaner, smarter, and greener
            future — one scan at a time.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
          <div className="flex flex-col space-y-3">
            <h2 className="text-lg font-semibold text-emerald-400">Explore</h2>
            <nav className="flex flex-col space-y-2 text-gray-300 text-sm">
              {Navitems.map((item, idx) => {
                return (
                  <Link
                    href={item.link}
                    key={idx}
                    className={`hover:text-emerald-400 transition ${
                      router === item.link && "text-emerald-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            <button className="cursor-pointer mt-5 px-5 py-2 bg-emerald-500 hover:bg-emerald-600 transition rounded-full text-white font-semibold text-sm">
              <Link href={"/scan"}>Get Started</Link>
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold text-emerald-400">Connect</h2>
            <p className="text-gray-300 text-sm max-w-xs">
              Got feedback or want to collaborate? Let’s make the world cleaner
              together 🌿
            </p>
            <div className="flex space-x-6 text-2xl mt-2">
              <Link
                href="https://instagram.com/adyfas.ver"
                target="_blank"
                className="hover:text-emerald-400 transition transform hover:scale-110"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://github.com/Adyfas"
                target="_blank"
                className="hover:text-emerald-400 transition transform hover:scale-110"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://wa.me/6283182719413"
                target="_blank"
                className="hover:text-emerald-400 transition transform hover:scale-110"
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end justify-end">
            <p className="text-gray-500 text-sm text-right">
              Building awareness for a greener planet <Earth />
            </p>
          </div>
        </div>

        <div className="absolute bottom-15 w-full items-start flex justify-start pt-10 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-emerald-400 font-semibold">EcoMind</span> —
            Designed for a sustainable future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterEcomind;
