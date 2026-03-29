"use client";

import Link from 'next/link';
import Logo from './Logo';
import NavItems from './NavItems';
import Toolbar from './Toolbar';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 left-0 z-[999] px-8 xl:px-16 flex items-center justify-between h-[72px] transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link href={"/"} className="hover:opacity-80 transition-opacity">
          <Logo />
        </Link>
      </div>

      {/* Nav Items — centered */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <NavItems />
      </div>

      {/* Toolbar — right side */}
      <div className="flex items-center gap-3">
        <Toolbar />
      </div>
    </header>
  );
};

export default Header;