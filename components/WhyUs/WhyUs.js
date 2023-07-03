import UIsign from '../../public/ui-sign.png'
import Image from "next/image"
import Button from '../common/Button'

const WhyUs = () => {
  return (
    <div className='container mx-auto md:mb-20 py-12 font-krub relative overflow-hidden'>
      <div className='absolute h-48 w-48 top-3 right-0 translate-x-1/2 rounded-full shadow-[0_0_41px_1px_rgba(0,0,0,0.08)] -z-10'></div>
      <div className='absolute h-20 w-20 bottom-20 right-60 rounded-full shadow-[0_0_41px_1px_rgba(0,0,0,0.08)] -z-10'></div>
      <div className='flex justify-between flex-col md:flex-row gap-10'>
        <div className='md:w-1/2 w-full relative order-2 md:order-1'>
          <div className='relative flex justify-center items-center bg-[url(/whyus-person.png)] bg-no-repeat md:bg- bg-center bg-contain max-sm:max-h-[450px] h-full'>
            <Image
              src={UIsign}
              alt="ui sign"
              className="-rotate-90 p-[23%] sm:p-[20%] md:max-lg:p-[25%] sm:max-w-[550px] xl:max-w-[650px]"
            />
            <div className='max-lg:hidden absolute right-0 xl:right-[4%] 2xl:right-[12%] bottom-24 xl:bottom-32 2xl:bottom-36 text-[54px] text-mainPurple'>{'\u2b24'}</div>
          </div>
          <div className='max-md:hidden -rotate-90 absolute bottom-20'>
            <p className='text-[16px] font-bold uppercase'><span className='absolute -left-10 -top-4 text-[32px]'>{'\u25A0'}</span>never <span className='block whitespace-nowrap'>stop learning</span></p>
          </div>
        </div>
        <div className='basis-1/2 my-auto pt-10 order-1 md:order-2'>
          <div className='mb-12 uppercase md:text-left text-center'>
            <h1 className='lg:text-[112px] sm:text-[93px] text-[54px] font-bold leading-none'>why us</h1>
          </div>
          <div className='lg:w-9/12 w-11/12 text-justify font-bold md:mx-0 mx-auto'>
            <p className='relative mt-3 md:text-[14px] text-[12px] leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse
              <span className='text-4xl ms-3 absolute -bottom-1'>{'\u25A0'}</span>
            </p>
            <div className='buttons mt-16 md:text-[14px] text-[12px] font-bold md:text-left text-center'>
              <Button buttonClass='bg-mainPurple px-6 py-4 !tracking-widest'>read more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs;