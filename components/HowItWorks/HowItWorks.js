import Button from "../common/Button"
import UIsign from '../../public/ui-sign.png'
import howItWorksPerson from '../../public/howitworks-person.png'
import Image from "next/image"

const HowItWorks = () => {
  return (
    <div className='container mx-auto font-krub pb-20 mb-20 overflow-hidden'>
      <div className='relative float-right font-bold tracking-widest before:content-[""] before:top-4 before:-left-24 before:absolute before:border-solid before:border-[3px] before:w-[66px]'>
        <p className='text-[21px]'>2022</p>
      </div>
      <div className='flex'>
        <div className='w-1/2'>
          <div className='w-2/3 pt-40'>
            <div className='mb-12 relative flex justify-start items-end'>
              <h1 className='text-[116px] uppercase font-bold leading-none'>ui.</h1>
              <h2 className='text-[38px] font-light tracking-widest whitespace-nowrap ps-5'>How it work<span className='font-bold lowercase'>s.</span></h2>
            </div>
            <div className='font-semibold text-[14px] text-justify'>
              <p className='leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse.</p>
            </div>
          </div>
          <div className='w-10/12 mt-8'>
            <div className='grid grid-rows-2 grid-cols-2'>
              {[0, 1, 2, 3].map((i, index) => (
                <div key={index} className='my-7'>
                  <p className='text-[16px] font-bold uppercase relative ms-8'><span className='text-4xl -left-9 -top-2 leading-none absolute'>{'\u25A0'}</span>Lorem ipsum dolor.</p>
                </div>))}
            </div>
          </div>
          <div className='mt-16 flex justify-between'>
            <div>
              <Button buttonClass='bg-mainPurple px-6 py-4 !tracking-widest font-bold'>
                Read More
              </Button>
            </div>
            <div className='rotate-90 relative'>
              <p className='absolute -left-10 text-[16px] font-bold uppercase'><span className='absolute -left-10 -top-5 text-[40px]'>{'\u25A0'}</span>never <span className='block whitespace-nowrap'>stop learning</span></p>
            </div>
          </div>
        </div>
        <div className='w-1/2 relative mt-16'>
          <Image
            src={UIsign}
            alt="ui sign"
            className="absolute -right-[55%] top-0 z-10 scale-[0.95]"
          />
          <Image
            src={howItWorksPerson}
            alt="person"
            className="absolute right-24 top-6"
          />
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
