const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Addressals", href: "#addressals" },
  { label: "Registration", href: "#registration" },
  { label: "Schedule", href: "#schedule" },
  { label: "Committees", href: "#committees" },
  { label: "Conference Details", href: "#conference-details" },
  { label: "Photo Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed w-full px-[8%] py-5 flex justify-between items-center bg-background/95 backdrop-blur-sm z-[100]">
      <div className="font-display text-2xl font-bold text-primary cursor-none">WELMUN</div>
      <ul className="hidden md:flex gap-7 flex-wrap list-none">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="relative text-primary no-underline cursor-none text-sm after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
