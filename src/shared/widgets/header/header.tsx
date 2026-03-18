import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const Header = () => {
  return (
    <header className='w-full sticky top-0 left-0 z-[999] border-b border-b[#000] px-10 flex items-center justify-between bg-white h-[80px] text-black'>
      <div>
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
    </header>
  )
}

export default Header