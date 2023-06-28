import UIsign from '../../public/ui-sign.png'
import WhyUsPerson from '../../public/whyus-person.png'
import Image from "next/image"
import Button from '../common/Button'

const WhyUs = () => {
  return (
    <div className='container mx-auto mb-20 py-12 font-krub relative overflow-hidden'>
      <div className='absolute h-48 w-48 top-3 right-0 translate-x-1/2 rounded-full shadow-[0_0_41px_1px_rgba(0,0,0,0.08)] -z-10'></div>
      <div className='absolute h-20 w-20 bottom-20 right-60 rounded-full shadow-[0_0_41px_1px_rgba(0,0,0,0.08)] -z-10'></div>
      <div className='flex justify-between'>
        <div className='w-1/2 relative'>
          <div className='absolute'>
            <Image
              src={UIsign}
              alt="ui sign"
              className="-rotate-90 z-10 scale-50"
            />
            <div className='absolute right-[12%] bottom-1/4 text-[54px] text-mainPurple'>{'\u2b24'}</div>
          </div>
          <Image
            src={WhyUsPerson}
            alt="person"
            className="mx-auto"
          />
          <div className='-rotate-90 absolute bottom-20'>
            <p className='text-[16px] font-bold uppercase'><span className='absolute -left-10 -top-4 text-[32px]'>{'\u25A0'}</span>never <span className='block whitespace-nowrap'>stop learning</span></p>
          </div>
        </div>
        <div className='w-5/12 my-auto pt-10'>
          <div className='mb-12 uppercase'>
            <h1 className='text-[116px] font-bold leading-none'>why us</h1>
          </div>
          <div className='w-9/12  text-justify font-bold'>
            <p className='relative mt-3 text-[14px] leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse
              <span className='text-4xl ms-3 absolute -bottom-1'>{'\u25A0'}</span>
            </p>
            <div className='buttons mt-16 text-[14px] font-bold'>
              <Button buttonClass='bg-mainPurple px-6 py-4 !tracking-widest'>read more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs;