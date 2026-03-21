import Header from '@/shared/widgets/header/header'
import React from 'react'
import Banner from "./features/Banner"
import Branding from "./features/Branding" 
import Benefits from './features/Benefits'

const home = () => {
  return (
    <div>
        <Header></Header>
        <Banner></Banner>
        <Branding></Branding>
        <Benefits></Benefits>
    </div>
  )
}

export default home