import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Highlights from '../components/Highlights/Highlights'
import Excellence from '../components/Excellence/Excellence'
import Financial from '../components/Financial/Financial'
import Mapping from '../components/Mapping/Mapping'
import Chairman from '../components/Chairman/Chairman'
import AtTrident from '../components/AtTrident/AtTrident'
import OurPresence from '../components/OurPresence/OurPresence'

function LandingPage() {
  return (
    <div>
        <HeroSection/>
        <Highlights/>
        <Excellence/>
        <AtTrident/>
        <Chairman/>
        <Financial/>
        <Mapping/>
    </div>
  )
}

export default LandingPage
