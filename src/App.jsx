import React from 'react'
import Hero from './components/Hero'
import RunbookPreview from './components/RunbookPreview'
import WhatRelvyDoes from './components/WhatRelvyDoes'
import LooksFamiliar from './components/LooksFamiliar'
import MetricsSection from './components/MetricsSection'
import Testimonial from './components/Testimonial'
import FinalCTAAndFooter from './components/FinalCTAAndFooter'

const App = () => {
  return (
    <div>
      <Hero />
      <RunbookPreview />
      <WhatRelvyDoes />
      <LooksFamiliar />
      <MetricsSection />
      <Testimonial />
      <FinalCTAAndFooter />
    </div>
  )
}

export default App