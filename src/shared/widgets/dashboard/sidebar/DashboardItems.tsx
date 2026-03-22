import { sideBarBottomItems, sideBarItems } from '@/app/config/constants'
import useRouteChange from '@/shared/hooks/useRouteChange'
import { useClerk } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
// import usePathname

const DashboardItems = ({bottomContent}:{bottomContent?:boolean}) => {
  const {activeRoute, setActiveRoute} = useRouteChange()
  const {signOut, user} = useClerk()
  const pathname = usePathname();
  return (
    <>
      {
        !bottomContent ? (
          <>
            {sideBarItems.map((item:DashboardSideBarTypes, index:number)=> (
              <Link key={index} href={item.url} className='py-2 py-5 flex items-center'>
                  <span className={`text-3xl mr-2 ${item.url === activeRoute ? 'text-primary' : 'text-gray-500'}`}>
                    {item.icon}
                  </span>

                  <span className={`text-xl mr-2 ${item.url === activeRoute && "text-[#463bbd]"}`}>
                    {item.title}
                  </span>
              </Link>
            ))}
          </>
        ) : (
          <>
            {sideBarBottomItems.map(
            (item: DashboardSideBarTypes, index: number) => (
              <Link
                key={index}
                className="p-2 py-5 flex items-center"
                href={
                  item.url === "/"
                    ? `/subscribe?username=${user?.username}`
                    : item.url
                }
              >
                <span
                  className={`text-3xl mr-2 ${
                    item.url === activeRoute && "text-[#463bbd]"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-xl mr-2 ${
                    item.url === activeRoute && "text-[#463bbd]"
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            )
          )}
          </>
        )
      }
    </>
  )
}

export default DashboardItems