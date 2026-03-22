import { ICONS } from '@/shared/utils/Icons'
import { useUser } from '@clerk/nextjs'
import React from 'react'
import DashboardItems from './DashboardItems'

const DashboardSidebar = () => {
    const {user} = useUser()
  return (
    <div className='p-2'>
        <div className='p-2 flex items-center bg-white rounded'>
            <span className='text-2xl '>
                {ICONS.home}
            </span>
            <h5 className='pl-2 pt-1 capitalize'>
                {user?.username} Newsletter
            </h5>
        </div>
        <div>
            <DashboardItems></DashboardItems>
        </div>
    </div>
  )
}

export default DashboardSidebar