import SubscriptionForm from "../common/SubscriptionForm";
import Image from "next/image";
import UIsign from '../../public/ui-sign.png'
import subscribePerson from '../../public/subscribe-person.png'

const Subscribe = () => {
  return (
    <div className='container mx-auto flex font-krub font-bold overflow-hidden'>
      <div className='w-1/2 relative'>
        <div className='absolute bottom-28 -left-60'>
          <Image
            src={UIsign}
            alt="ui sign"
            className="-rotate-180 scale-[1.20]"
          />
        </div>
        <Image
          src={subscribePerson}
          alt="person"
          className="mx-auto"
        />
      </div>
      <div className='w-1/2 flex flex-col mt-10'>
        <div className='flex flex-col text-center'>
          <h2 className='text-[47px] uppercase'>Subscribe</h2>
          <h3 className='text-[46px] tracking-widest font-thin'>to our newsletter</h3>
          <p className='w-3/4 mx-auto text-[16px] tracking-wider mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .</p>
        </div>
        <SubscriptionForm />
      </div>

    </div>
  )
}

export default Subscribe;