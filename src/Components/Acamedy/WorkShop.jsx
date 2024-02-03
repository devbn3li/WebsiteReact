import React from 'react'
import WorkShopCards from './WorkShopCards'

function WorkShop() {
  return (
    <div>
        <WorkShopCards
        title="Workshop"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor, libero nec consectetur fermentum, ligula odio interdum urna, eget fermentum nisl lacus id libero."
        topics={['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4']}
        image="../../assets/images/Person_3.jpg"
        
        />
    </div>
  )
}

export default WorkShop