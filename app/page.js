import Course from '@/components/Course/Course'
import Explore from '@/components/Explore/Explore'
import Header from '@/components/Header/Header'
import HowItWorks from '@/components/HowItWorks/HowItWorks'
import Intro from '@/components/Intro/Intro'

export default function Home() {
  return (
    <main className=''>
      <Header />
      <Intro />
      <Explore />
      <Course />
      <HowItWorks />
    </main>
  )
}
