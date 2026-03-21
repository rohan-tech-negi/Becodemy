import Header from '@/shared/widgets/header/header'
import React from 'react'
import Banner from "./features/Banner"
import Branding from "./features/Branding" 
import Benefits from './features/Benefits'
import FeatureHighLight from './features/FeatureHighLight'

const home = () => {
  return (
    <div>
        <Header></Header>
        <Banner></Banner>
        <Branding></Branding>
        <Benefits></Benefits>
        <FeatureHighLight></FeatureHighLight>
    </div>
  )
}

export default home