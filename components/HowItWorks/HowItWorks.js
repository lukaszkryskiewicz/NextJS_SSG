import Button from "../common/Button"
import UIsign from '../../public/ui-sign.png'
import howItWorksPerson from '../../public/howitworks-person.png'
import Image from "next/image"

const HowItWorks = () => {
  return (
    <div className='container mx-auto font-krub pb-12 md:pb-40 overflow-hidden relative'>
      <div className='absolute h-28 w-28 bottom-4 left-1/4 rounded-full shadow-[0_0_41px_1px_rgba(0,0,0,0.08)] -z-10'></div>
      <div className='max-md:hidden relative text-right font-bold tracking-widest before:content-[""] before:top-4 before:right-20 before:absolute before:border-solid before:border-[3px] before:w-[66px]'>
        <p className='text-[21px]'>2022</p>
      </div>
      <div className='flex relative md:flex-row flex-col'>
        <div className='absolute h-20 w-20 top-28 right-1/2 translate-x-1/2 rounded-full shadow-[0_0_41px_1px_rgba(0,0,0,0.08)] -z-10'></div>
        <div className='basis-1/2'>
          <div className='basis-2/3  pt-12'>
            <div className='mb-12 relative flex md:justify-start justify-center items-end'>
              <h1 className='lg:text-[116px] sm:text-[93px] text-[54px] uppercase font-bold leading-none'>ui.</h1>
              <h2 className='md:text-[38px] text-[26px] font-light tracking-widest whitespace-nowrap ps-5'>How it work<span className='font-bold lowercase'>s.</span></h2>
            </div>
            <div className='xl:w-9/12 w-10/12 md:mx-0 mx-auto font-semibold md:text-[14px] text-[12px] text-justify'>
              <p className='leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse.</p>
            </div>
          </div>
          <div className='md:w-10/12 mt-8 md:text-left text-center'>
            <div className='grid md:grid-cols-2 '>
              {[0, 1, 2, 3].map((i, index) => (
                <div key={index} className='my-7'>
                  <p className='md:text-[16px] text-[12px] font-bold uppercase relative md:ms-8'><span className='text-4xl md:-left-9 left-9 -top-3 leading-none absolute'>{'\u25A0'}</span>Lorem ipsum dolor.</p>
                </div>))}
            </div>
          </div>
          <div className='md:mt-16 mt-10 flex md:justify-between justify-center'>
            <div className='md:text-[14px] text-[12px]'>
              <Button buttonClass='bg-mainPurple px-6 py-4 !tracking-widest font-bold'>
                Read More
              </Button>
            </div>
            <div className='max-md:hidden rotate-90 relative'>
              <p className='absolute -left-10 text-[16px] font-bold uppercase'><span className='absolute -left-10 -top-5 text-[40px]'>{'\u25A0'}</span>never <span className='block whitespace-nowrap'>stop learning</span></p>
            </div>
          </div>
        </div>
        <div className='basis-1/2 md:h-[500px] relative mt-16 bg-[url(/howitworks-person.png)] bg-no-repeat md:bg- bg-center bg-contain'>
          <Image
            src={UIsign}
            alt="ui sign"
            className="md:absolute md:max-lg:scale-[1.5] xl:scale-[0.8] 2xl:scale-[0.65] md:max-lg:top-24 xl:-right-[30%] -right-[45%] lg:-top-0 xl:-top-16 2xl:-top-32 z-10 w-[1000px]"
          />
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
