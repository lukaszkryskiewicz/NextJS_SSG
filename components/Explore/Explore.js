import Image from "next/image";
import explorePerson from '../../public/explore-person.png'
import UIsign from '../../public/ui-sign.png'
import arrowDown from '../../public/arrow-down.png'

const Explore = () => {
  return (
    <div className='container mx-auto mt-32 lg:mt-16 relative lg:h-[720px]'>
      <div className='absolute flex justify-between w-full'>
        <div className=' h-14 w-14 rounded-full shadow-[0_0_41px_1px_rgba(0,0,0,0.08)] -z-10'></div>
        <div className=' h-14 w-14 rounded-full shadow-[0_0_41px_1px_rgba(0,0,0,0.08)] -z-10'></div>
      </div>
      <div className='md:w-1/2 mx-auto md:pt-0 pt-20'>
        <div className='relative'>
          <Image
            src={explorePerson}
            alt="Explore"
            className="mb-6 mx-auto"
          />
          <div className='absolute top-[22%] left-1/2 -translate-x-1/2'>
            <Image
              src={UIsign}
              alt="ui-sign"
              className="-rotate-90 scale-[1.5] md:scale-[1.25]"
            />
          </div>
          <Image
            src={arrowDown}
            alt='arrow down'
            className='mx-auto mb-6'
          />
        </div>
      </div>
      <div className='absolute md:top-1/3 top-0 w-full h-1/2'>
        <div className='flex flex-col justify-between h-full'>
          <div className='flex uppercase justify-between text-[37px]'>
            <div className='relative text-[25px] md:text-[37px] font-bold'>
              Explore.
              <div className='absolute h-44 w-44 top-1/2 left-1/2 -translate-y-1/2 rounded-full shadow-[0_0_41px_1px_rgba(0,0,0,0.08)] -z-10'></div>
            </div>
            <div className='max-md:hidden relative text-right justify-self-center font-thin me-9'>
              About.
              <div className='absolute h-44 w-44 top-1/2 right-1/2 -translate-y-1/2 rounded-full shadow-[0_0_41px_1px_rgba(0,0,0,0.08)] -z-10'></div>
            </div>
          </div>
          <div className='max-lg:hidden font-bold uppercase relative'>
            <div className='absolute -left-20 -top-10 -rotate-90'>
              <p><span className='text-[25px] me-5'>{'\u25A0'}</span>
                online courses
              </p>
            </div>
            <div className='absolute -right-12 -top-10 -rotate-90'>
              <p>
                <span className='text-[25px] me-5'>{'\u25A0'}</span>
                online courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore;