const { default: Image } = require("next/image")
import UiSign from '../../public/ui-sign.png'
import introPerson from '../../public/intro-person.png'
import ArrowRight from '../../public/arrow-right.png'
import ArrowLeft from '../../public/arrow-left.png'
import Button from '../common/Button'

const Intro = () => {
  return (
    <div className='relative pt-10 md:mb-0 mb-60'>
      <div className='absolute h-11 w-11 top-0 right-1/2 -translate-x-full rounded-full shadow-[0_0_41px_2px_rgba(0,0,0,0.13)] -z-10'></div>
      <div className='container mx-auto relative xl:h-[870px] lg:h-[800px] overflow-hidden flex flex-col lg:flex-row'>
        <div className='lg:w-1/3 basis-1/3 font-krub mb-0'>
          <div className=' pt-5'>
            <div className='mb-20 relative uppercase flex  md:justify-start justify-center items-end after:md:content-[""] after:hidden after:md:inline after:absolute after:-bottom-9 after:left-2 after:w-[70px] after:border-solid after:border-2'>
              <h1 className='lg:text-[116px] md:text-[93px] text-[54px] uppercase font-bold leading-none'>ui.</h1>
              <h2 className='md:text-[38px] text-[26px] ms-5 font-light tracking-widest'>beginner<span className='font-bold lowercase'>{"'s"}</span></h2>
            </div>
          </div>
          <div className='relative w-11/12 md:mx-0 mx-auto'>
            <div className=' text-justify font-bold'>
              <h3 className='mb-3 uppercase md:text-[18px] text-[14px] text-center md:text-left tracking-wide min-w-full'>Start guide for beginner designers</h3>
              <p className=' relative mt-3 md:text-[14px] text-[12px] leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse
                <span className='text-4xl ms-3 absolute -bottom-1'>{'\u25A0'}</span>
              </p>
            </div>
            <div className='relative md:justify-start justify-center flex md:mt-9 mt-4 gap-2 md:text-[14px] text-[12px]'>
              <Button buttonClass='bg-mainPurple text-main px-6 py-4 !tracking-widest'>{"Let's start"}</Button>
              <Button buttonClass='px-6 py-4 !tracking-wider font-bold'>read more</Button>
              <div className='md:hidden absolute -bottom-1/2 translate-y-1/2 w-full flex justify-between'>
                <Image
                  src={ArrowLeft}
                  alt="left arrow"
                  className='scale-75'
                />
                <Image
                  src={ArrowRight}
                  alt="right arrow"
                  className='scale-75'
                />
              </div>
            </div>
            <div className='absolute h-28 w-28 -bottom-40 left-60 rounded-full shadow-[0_0_41px_1px_rgba(0,0,0,0.08)] -z-10'></div>
          </div>
        </div>
        <div className='mx-auto w-2/3 mt-12 md:mt-5 bg-[url(/intro-person.png)] bg-top max-xl:bg-contain bg-fill  bg-no-repeat relative'>
          <Image
            src={UiSign}
            alt="ui sign"
            className="lg:absolute -right-20 top-0 z-10"
          />
          <div className='max-lg:hidden w-32 xl:text-[16px] text-[12px] font-bold uppercase me-10 absolute top-1/4 -right-16 xl:right-0'>
            <h4 className='relative'>Become a pro-designer
              <span className='text-4xl absolute -top-3 -left-7 '>{'\u25A0'}</span>
            </h4>
          </div>
        </div>
      </div>
      <div className='absolute lg:bottom-8 -bottom-24 inset-x-0 z-20 font-krub'>
        <div className='max-md:hidden container mx-auto mb-4 arrows flex justify-between'>
          <Image
            src={ArrowLeft}
            alt="left arrow"
            className='p-1'
          />
          <Image
            src={ArrowRight}
            alt="right arrow"
            className='bg-white/[0.3] p-1'
          />
        </div>
        <div className=' bg-black md:h-56 sm:h-48 h-44 text-main md:text-3xl text-center md:text-left text-l font-light tracking-[.1em]'>
          <div className='container mx-auto h-full flex sm:flex-row flex-col justify-between'>
            <div className='my-auto relative'>
              Join the <span className='font-black'>community <span className='text-4xl absolute -bottom-1 ms-3'>{'\u25A0'}</span></span>
            </div>
            <div className='w-fit mx-auto sm:mx-0 my-auto flex flex-col outline outline-2 outline-offset-2 text-center md:p-6 p-3'>
              <span className='text-base uppercase'>Editio<span className='tracking-normal'>n</span></span>
              <span className=''>202<span className='tracking-normal'>2</span></span>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Intro