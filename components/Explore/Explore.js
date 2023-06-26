import Image from "next/image";
import explorePerson from '../../public/explore-person.png'
import UIsign from '../../public/ui-sign.png'
import arrowDown from '../../public/arrow-down.png'

const Explore = () => {
  return (
    <div className='container mx-auto mt-40 relative h-[720px]'>
      <div className='absolute left-1/2 -translate-x-1/2'>
        <div className='relative'>
          <Image
            src={explorePerson}
            alt="Explore"
            className="mb-6"
          />
          <div className='absolute top-0 -left-2'>
            <Image
              src={UIsign}
              alt="ui-sign"
              className="-rotate-90 scale-[0.68]"
            />
          </div>
          <Image
            src={arrowDown}
            alt='arrow down'
            className='mx-auto mb-6'
          />
        </div>
      </div>
      <div className='absolute top-1/3 w-full h-1/2'>
        <div className='flex flex-col justify-between h-full'>
          <div className='flex uppercase justify-between text-[37px]'>
            <div className='font-bold'>
              Explore.
            </div>
            <div className='text-right justify-self-center font-thin me-9'>
              About.
            </div>
          </div>
          <div className='font-bold uppercase relative'>
            <div className='absolute -left-20 -top-10 -rotate-90'>
              <span className='text-[25px] me-5'>{'\u25A0'}</span> online courses
            </div>
            <div className='absolute -right-20 -top-10 -rotate-90'>
              <span className='text-[25px] me-5'>{'\u25A0'}</span> online courses
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore;