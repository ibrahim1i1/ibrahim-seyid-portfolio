
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>('#home');
  const [activeLang, setActiveLang] = useState<string>('EN');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const languages = ['EN', 'TR'];

  useEffect(() => {

    const handleScroll = () => {

      const scrollPosition = window.scrollY + 150;

      for (const link of navLinks) {
        const sectionId = link.href.replace('#', '');
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveLink(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)

  }, [])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/80 px-4 py-2.5 sm:px-8 sm:py-3 backdrop-blur-md ">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/*logo*/}
        <div>
          <img
            src="/images/logo-white.png"
            alt="logo"
            className="h-20 w-auto object-contain"
          />
        </div>

        <div className="flex items-center gap-8">

          {/* روابط التنقل */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6 text-sm text-slate-400">
              {navLinks.map((link) => {
                const isActive = activeLink === link.href;
                return (
                  <li key={link.href}>

                    <a href={link.href}
                      onClick={() => setActiveLink(link.href)}
                      className={`py-1 transition-colors ${isActive
                        ? 'text-white font-semibold'
                        : 'text-zinc-400 hover:text-zinc-100'
                        }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* كبسولة أزرار اللغات */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-xs">
              {languages.map((lang) => {
                const isSelect = activeLang === lang;
                return (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`rounded-full px-2.5 py-1 text-xs transition-all font-semibold ${isSelect
                      ? 'bg-white/20 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                      }`}>
                    {lang}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex md:hidden flex-col gap-1.5"
              aria-label="Menu">
              <span
                className={`w-7 h-0.5 bg-current rounded-full transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`w-7 h-0.5 bg-current rounded-full transition-transform duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`w-7 h-0.5 bg-current rounded-full transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mt-3 w-full rounded-2xl py-8 bg-black/80 shadow-2xl backdrop-blur-2xl md:hidden">
          <ul className="flex flex-col gap-2 w-full">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <li key={link.href}>

                  <a href={link.href}
                    onClick={() => {
                      setActiveLink(link.href)
                      setIsMenuOpen(false)
                    }}
                    className={`rounded-xl w-full block px-4 py-2.5  text-sm font-medium transition-all text-center ${isActive
                      ? 'bg-white/15 text-white font-semibold border border-white/20 shadow-sm'
                      : 'text-zinc-400 hover:bg-white/10 hover:text-white'
                      }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}

    </header >
  );
}