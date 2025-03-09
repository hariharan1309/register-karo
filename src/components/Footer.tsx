import React from "react";
// import { Facebook, Instagram } from "react-feather";

interface FooterLinkProps {
  title: string;
  links: string[];
}

const FooterLinkSection: React.FC<FooterLinkProps> = ({ title, links }) => {
  return (
    <div className="mb-8 md:mb-0">
      <h3 className="text-amber-500 font-bold mb-4">{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <a
              href="#"
              className="text-white hover:text-amber-300 transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "START A BUSINESS",
      links: [
        "Features",
        "Solutions",
        "Integrations",
        "Enterprise",
        "Solutions",
      ],
    },
    {
      title: "GOVERNMENT REGISTRATION",
      links: ["Partners", "Community", "Developers", "App", "Blog"],
    },
    {
      title: "COMPLIANCE & TAX",
      links: ["Channels", "Scale", "Watch the Demo", "Our Competition"],
    },
    {
      title: "BIS & CDSCO",
      links: ["About Us", "News", "Leadership", "Media Kit"],
    },
  ];

  return (
    <footer className="bg-[#00205C] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <div className="mb-6">
              <p className="text-white mb-4">
                Design outstanding interfaces with advanced Figma features in a
                matter of minutes.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-amber-300">
                  {/* <Facebook /> */}
                </a>
                <a href="#" className="text-white hover:text-amber-300">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    fill="none"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.603-3.369-1.338-3.369-1.338-.455-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.09-.647.349-1.086.634-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.022A9.578 9.578 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.291 2.747-1.022 2.747-1.022.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-amber-300">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    fill="none"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-amber-300">
                  {/* <Instagram /> */}
                </a>
              </div>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <FooterLinkSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 Registerkaro. All Rights Reserved.
          </p>
          <a
            href="#"
            className="bg-amber-500 p-3 rounded-full hover:bg-amber-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
