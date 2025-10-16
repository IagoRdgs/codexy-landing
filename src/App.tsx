import CTA_FinalSection from "./pages/home/sections/CtaFinalSection"
import Main from "./pages/home/sections/MainSection"
import PricingSection from "./pages/home/sections/PricingSection"
import Services from "./pages/home/sections/ServicesSection"
import Testimonials from "./pages/home/sections/TestimonialsSection"
import WhyCodexy from "./pages/home/sections/WhyCodexSection"

function App() {

  return (
    <>
      <Main />  
      <WhyCodexy />
      <Services />
      <Testimonials />
      <PricingSection />
      <CTA_FinalSection />
    </>
  )
}

export default App
