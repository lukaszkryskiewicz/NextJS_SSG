const { default: Image } = require("next/image")
import UiSign from '../../public/ui-sign.png'
import introPerson from '../../public/intro-person.png'
import ArrowRight from '../../public/arrow-right.png'
import ArrowLeft from '../../public/arrow-left.png'
import Button from '../common/Button'

const Intro = () => {
  return (
    <div className='relative'>
      <div className='container mx-auto relative h-[870px] overflow-hidden'>
        <Image
          src={UiSign}
          alt="ui sign"
          className="absolute -right-10 top-0 z-10"
        />
        <Image
          src={introPerson}
          alt="person"
          className="absolute right-24 top-6"
        />
        <div className='font-krub'>
          <div className='w-1/4 pt-5'>
            <div className='mb-20 relative uppercase flex justify-between items-end after:content-[""] after:absolute after:-bottom-9 after:left-2 after:w-[70px] after:border-solid after:border-2'>
              <h1 className='text-[116px] uppercase font-bold leading-none'>ui.</h1>
              <h2 className='text-[38px] font-light tracking-widest'>beginner<span className='font-bold lowercase'>{"'s"}</span></h2>
            </div>
          </div>
          <div className=''>
            <div className='flex justify-between'>
              <div className='w-1/4 text-justify font-bold'>
                <h3 className='mb-3 uppercase text-[18px] tracking-wide min-w-full'>Start guide for beginner designers</h3>
                <p className=' relative mt-3 text-[14px] leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse
                  <span className='text-4xl ms-3 absolute bottom-0'>{'\u25A0'}</span>
                </p>
              </div>
              <div className='w-32 text-[16px] font-bold uppercase me-10'>
                <h4 className='relative'>Become a pro-designer
                  <span className='text-4xl absolute -top-3 -left-7 '>{'\u25A0'}</span>
                </h4>
              </div>
            </div>
            <div className='buttons flex mt-9 gap-2 text-[14px]'>
              <Button buttonClass='bg-mainPurple text-main px-6 py-4 !tracking-widest'>{"Let's start"}</Button>
              <Button buttonClass='px-6 py-4 !tracking-wider font-bold'>read more</Button>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute inset-x-0 bottom-0 z-20 font-krub'>
        <div className='container mx-auto mb-8 arrows flex justify-between'>
          <Image
            src={ArrowLeft}
            alt="left arrow"
          />
          <Image
            src={ArrowRight}
            alt="right arrow"
          />
        </div>
        <div className='bg-black h-56 text-main text-3xl font-light tracking-[.1em]'>
          <div className='container mx-auto h-full flex justify-between'>
            <div className='my-auto relative'>
              Join the <span className='font-black'>community <span className='text-4xl absolute -bottom-1 ms-3'>{'\u25A0'}</span></span>
            </div>
            <div className='my-auto flex flex-col outline outline-2 outline-offset-2 text-center p-6'>
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