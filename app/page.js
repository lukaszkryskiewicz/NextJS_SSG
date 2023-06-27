import Course from '@/components/Course/Course'
import Explore from '@/components/Explore/Explore'
import Header from '@/components/Header/Header'
import HowItWorks from '@/components/HowItWorks/HowItWorks'
import Intro from '@/components/Intro/Intro'
import Register from '@/components/Register/Register'
import WhyUs from '@/components/WhyUs/WhyUs'

export default function Home() {
  return (
    <main className=''>
      <Header />
      <Intro />
      <Explore />
      <Course />
      <HowItWorks />
      <WhyUs />
      <Register />
    </main>
  )
}
