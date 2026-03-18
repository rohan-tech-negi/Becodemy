import Link from 'next/link'
import Logo from './Logo'


const Header = () => {
  return (
    <header className='w-full sticky top-0 left-0 z-[999] border-b border-b[#000] px-10 flex items-center justify-between bg-white h-[80px] text-black'>
      <div>
        <Link href={"/"}>
          <Logo></Logo>
        </Link>
        <h1>
          hello world
        </h1>
      </div>
    </header>
  )
}

export default Header