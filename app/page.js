import Course from '@/components/Course/Course'
import Explore from '@/components/Explore/Explore'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import HowItWorks from '@/components/HowItWorks/HowItWorks'
import Intro from '@/components/Intro/Intro'
import Register from '@/components/Register/Register'
import Subscribe from '@/components/Subscribe/Subscribe'
import UsersSection from '@/components/UsersSection/UsersSection'
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
      <UsersSection />
      <Subscribe />
      <Footer />
    </main>
  )
}
