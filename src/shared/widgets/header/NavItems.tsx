import { navItems } from "@/app/config/constants"
import Link from "next/link"

const NavItems = () => {
  return (
    <nav className="hidden md:flex items-center gap-1">
      {navItems.map((i: NavItems, index: number) => (
        <Link
          key={index}
          href={"/"}
          className="relative px-4 py-2 text-[15px] font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200 group"
        >
          {i.title}
          <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
        </Link>
      ))}
    </nav>
  )
}

export default NavItems