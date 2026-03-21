import Header from '@/shared/widgets/header/header'
import React from 'react'
import Banner from "./features/Banner"
import Branding from "./features/Branding" 

const home = () => {
  return (
    <div>
        <Header></Header>
        <Banner></Banner>
        <Branding></Branding>
    </div>
  )
}

export default home