import Image from "next/image";
import registerPerson from '../../public/register-person.png'
import Button from "../common/Button";
import whiteArrowRight from '../../public/white-arrow-right.png'

const Register = () => {
  return (
    <div className='relative lg:h-[430px] h-[332px] w-screen font-krub'>
      <div className='max-md:hidden relative container mx-auto h-full'>
        <Image
          src={registerPerson}
          alt="person"
          className="absolute xl:left-1/4 lg:left-40 left-28 bottom-0"
        />
      </div>
      <div className='absolute top-0 left-0 h-full bg-registerColor/[0.7] w-screen' >
        <div className='container mx-auto flex justify-between h-full'>
          <div className='md:w-2/5 w-full uppercase text-main text-center my-auto relative'>
            <h1 className='lg:text-[52px] text-[40px] font-bold'>Register now</h1>
            <h2 className='lg:text-[44px] text-[30px]'>and get a discoun<span className='relative'>t<span className='max-sm:hidden absolute -bottom-2 -right-8 text-[40px]'>{'\u25A0'}</span></span></h2>
            <Button buttonClass='mt-5 bg-black text-main px-6 py-4 !tracking-widest'>{"Let's start"}</Button>
          </div>
          <div className='w-1/2 relative max-md:hidden'>
            <div className='lg:w-2/12 w-3/12 border-4 border-main border-solid absolute right-2 bottom-10'>
              <Image
                src={whiteArrowRight}
                alt="right arrow"
                className='mx-auto my-6'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Register;