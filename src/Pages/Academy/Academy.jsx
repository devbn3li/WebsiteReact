import React from 'react'
import PricingCards from '../../Components/Acamedy/PricingCards'
import ComparitionPricing from '../../Components/Acamedy/ComparitionPricing'
import WorkShop from '../../Components/Acamedy/WorkShop'

function Academy() {
  return (
    <div className="mt-[7em]">
        <PricingCards/>
        <ComparitionPricing/>
        <WorkShop/>
    </div>
  )
}

export default Academy