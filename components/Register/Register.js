import Button from "../common/Button";

const Register = () => {
  return (
    <div className='lg:h-[430px] h-[332px] font-krub md:bg-[url(/register-person.png)] bg-no-repeat bg-right bg-contain -z-10 '>
      <div className='relative bg-registerColor/[0.7] w-screen mx-auto h-full '>
        <div className='container mx-auto flex justify-between h-full'>
          <div className='md:w-2/5 w-full uppercase text-main text-center my-auto relative'>
            <h1 className='lg:text-[52px] text-[40px] font-bold'>Register now</h1>
            <h2 className='lg:text-[44px] text-[30px]'>and get a discoun<span className='relative'>t<span className='max-sm:hidden absolute -bottom-2 -right-8 text-[40px]'>{'\u25A0'}</span></span></h2>
            <Button buttonClass='mt-5 bg-black text-main px-6 py-4 !tracking-widest hover:bg-black hover:text-mainPurple'>{"Let's start"}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Register;