const { default: Image } = require("next/image")
import introSign from '../../public/intro-s.png'
import introPerson from '../../public/intro-person.png'

const Intro = () => {
  return (
    <div className='relative h-[870px]'>
      <Image
        src={introSign}
        alt="s sign"
        className="opacity-60 absolute right-0 top-0 z-10"
      />
      <Image
        src={introPerson}
        alt="person"
        className="absolute right-36 top-6"
      />
      <div className='bg-black h-56 w-full absolute bottom-0 z-20 text-main font-krub text-3xl font-light tracking-[.25em]'>
        <div className='container h-full mx-auto flex justify-between'>
          <div className='my-auto '>
            Join the <span className='font-black'>community</span>
          </div>
          <div className='my-auto flex flex-col outline outline-2 outline-offset-2 text-center p-6'>
            <span className='text-base uppercase'>Editio<span className='tracking-normal'>n</span></span>
            <span className=''>202<span className='tracking-normal'>2</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro