import Image from "next/image";
import registerPerson from '../../public/register-person.png'
import UIsign from '../../public/ui-sign.png'
import Button from "../common/Button";
import whiteArrowRight from '../../public/white-arrow-right.png'

const Register = () => {
  return (
    <div className='relative h-[430px] w-screen font-krub'>
      <Image
        src={registerPerson}
        alt="person"
        className="float-right me-44 -z-10"
      />
      <div className='absolute top-0 left-0 h-full bg-registerColor/[0.7] w-screen' >
        <div className='container mx-auto flex justify-between h-full'>
          <div className='w-2/5 uppercase text-main text-center my-auto'>
            <h1 className='text-[52px] font-bold'>Register now</h1>
            <h2 className='text-[44px] relative'>and get a discount<span className='absolute top-3 right-10 text-[40px]'>{'\u25A0'}</span></h2>
            <Button buttonClass='mt-5 bg-black text-main px-6 py-4 !tracking-widest'>{"Let's start"}</Button>
          </div>
          <div className='w-1/2 relative'>
            <div className='w-2/12 border-4 border-main border-solid absolute right-2 bottom-10'>
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