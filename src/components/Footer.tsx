import { quickLinks, socialLinks } from "@/constants";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-400 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-2">
              Biswajit Sahoo
            </h3>
            <p className="text-sm">
              A Fullstack Developer passionate about building modern web
              applications and creating seamless user experiences.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide">
              Connect With Me
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:text-sky-400 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Email */}
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide">
              Contact
            </h4>
            <a
              href="mailto:biswajitsahoo1424@gmail.com"
              className="flex items-center gap-2 hover:text-sky-400 transition-colors"
            >
              <Mail size={20} />
              <span className="text-sm">biswajitsahoo1424@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="border-t border-slate-700 pt-6 text-center text-sm lg:py-3">
          <p>&copy; {currentYear} Biswajit Sahoo. All Rights Reserved.</p>
          <p className="mt-2 text-xs text-slate-500">
            Built with a little help from Magic UI and Aceternity UI.
          </p>
        </div>
      </div>
    </footer>
  );
}
