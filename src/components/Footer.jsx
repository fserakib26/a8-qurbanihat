import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative mt-24">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Subtle Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="pixgen logo"
                width={32}
                height={32}
                className="dark:brightness-200"
              />
              <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                QurbaniHat
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
              A Qurbani Hat is a temporary livestock market held during Eid al-Adha for buying and selling animals for sacrifice.
It serves as both a marketplace and a significant religious and social gathering.
            </p>
          </div>

          {/* Company */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
             
            </ul>
          </div>

          {/* CTA Block */}
          <div className="space-y-4 flex items-end flex-col">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Social Links
            </h3>
            <ul className="flex items-left gap-5 text-sm flex-col">
                <li>
                    <Link href={"/facebook"}> <span>Facebook</span></Link>
                </li>
                <li>
                    <Link href={"/twiter"}> <span>Twiter</span></Link>
                </li>
                <li>
                    <Link href={"/linkedin"}> <span>LinkedIn</span></Link>
                </li>
                <li>
                    <Link href={"/youtube"}> <span>Youtube</span></Link>
                </li>
            </ul>
            
           
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />
              
      </div>
    </footer>
  );
};

export default Footer;