import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12 px-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <p className="font-serif text-xl">Calcutta Bakery & Café</p>
        <p className="text-primary-foreground/60 text-sm mt-1">Where every visit feels like a sweet escape</p>
      </div>

      <div className="flex items-center gap-6">
        <a
          href="https://www.instagram.com/calcuttabakerycafe/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-foreground/70 hover:text-accent transition-colors"
        >
          <Instagram size={22} />
        </a>
      </div>

      <p className="text-primary-foreground/40 text-xs">
        © {new Date().getFullYear()} Calcutta Bakery & Café. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
