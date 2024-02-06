
import WorkShop from '../../Components/Acamedy/WorkShop'
import Mentors from '../../Components/Acamedy/Mentors'
import Hero from '../../Components/Acamedy/Hero/index'
import WhyOurTraining from '../../Components/Acamedy/WhyOurTraining/index'

function AcademyPage() {
  return (
   <div class="w-full flex justify-center">
     <div className="mt-[7em] max-w-[1400px]">
      <Hero />
      <WhyOurTraining />
      <Mentors />

      <WorkShop />
    </div>
   </div>
  )
}

export default AcademyPage;