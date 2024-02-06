import React from 'react'
import PricingCards from '../../Components/Acamedy/PricingCards'
import ComparitionPricing from '../../Components/Acamedy/ComparitionPricing'
import WorkShop from '../../Components/Acamedy/WorkShop'
import Mentors from '../../Components/Acamedy/Mentors'

function AcademyPage() {
  return (
    <div className="mt-[7em]">
      <Mentors />

      <WorkShop />
    </div>
  )
}

export default AcademyPage;