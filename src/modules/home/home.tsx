import Header from '@/shared/widgets/header/header'
import React from 'react'
import Banner from "./features/Banner"
import Branding from "./features/Branding" 
import Benefits from './features/Benefits'
import FeatureHighLight from './features/FeatureHighLight'
import Pricing from './features/Pricing'
import Footer from "@/shared/widgets/footer/Footer"

const home = () => {
  return (
    <div>
        <Header></Header>
        <Banner></Banner>
        <Branding></Branding>
        <Benefits></Benefits>
        <FeatureHighLight></FeatureHighLight>
        <Pricing></Pricing>
        <Footer></Footer>
    </div>
  )
}

export default home