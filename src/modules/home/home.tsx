import Header from '@/shared/widgets/header/header'
import React from 'react'
import Banner from "./elements/Banner"
import Branding from "./elements/Branding" 
import Benefits from './elements/Benefits'
import FeatureHighLight from './elements/FeatureHighLight'
import Pricing from './elements/Pricing'
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