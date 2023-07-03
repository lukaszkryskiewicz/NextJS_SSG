import SubscriptionForm from "../common/SubscriptionForm";
import Image from "next/image";
import UIsign from '../../public/ui-sign.png'
import subscribePerson from '../../public/subscribe-person.png'

const Subscribe = () => {
  return (
    <div className='container mx-auto flex lg:flex-row flex-col font-krub font-bold overflow-hidden'>
      <div className='basis-1/2 flex flex-col md:mt-0 mt-0 lg:order-last'>
        <div className='flex flex-col text-center'>
          <h2 className='xl:text-[47px] text-[37px] uppercase'>Subscribe</h2>
          <h3 className='xl:text-[46px] text-[35px] tracking-widest font-thin'>to our newsletter</h3>
          <p className='w-3/4 mx-auto xl:text-[16px] text-[12px] tracking-wider mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .</p>
        </div>
        <SubscriptionForm />
      </div>
      {/* <div className='basis-1/2 relative'>
        <div className='absolute 2xl:bottom-20 xl:bottom-8 lg:bottom-0 md:-bottom-20 -bottom-12 lg:-left-60'>
          <Image
            src={UIsign}
            alt="ui sign"
            className="-rotate-180 2xl:scale-[1.15] xl:scale-[1.05] lg:scale-[1] scale-[0.75] "
          />
        </div>
        <Image
          src={subscribePerson}
          alt="person"
          className="mx-auto max-w-[400px] sm:max-w-[450px] lg:max-w-full "
        />
      </div> */}
      <div className='lg:pt-0 pt-12 basis-1/2 flex flex-end items-end relative bg-[url(/subscribe-person.png)] bg-contain bg-no-repeat bg-center'>
        <Image
          src={UIsign}
          alt="ui sign"
          className="-rotate-180 lg:absolute -translate-x-1/4 lg:scale-[1.4] xl:scale-[1.3] xl:top-40  2xl:scale-[1.2] 2xl:top-36 lg:top-32"
        />
        {/*  <Image
          src={subscribePerson}
          alt="person"
          className="mx-auto max-w-[400px] sm:max-w-[450px] lg:max-w-full "
        /> */}
      </div>

    </div>
  )
}

export default Subscribe;