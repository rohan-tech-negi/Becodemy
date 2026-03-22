import useRouteChange from '@/shared/hooks/useRouteChange'
import { useClerk } from '@clerk/nextjs'
import React from 'react'

const DashboardItems = ({bottomContent}:{bottomContent?:boolean}) => {
  const {activeRoute, setActiveRoute} = useRouteChange()
  const {signOut, user} = useClerk()
  const pathname = usePathname();
  return (
    <div>DashboardItems</div>
  )
}

export default DashboardItems