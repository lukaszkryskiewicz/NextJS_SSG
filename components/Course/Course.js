import Cards from "./Cards";

const Course = () => {
  return (

    <div className='container mx-auto py-32 font-krub relative overflow-hidden'>
      <div className='absolute text-[94px] text-mainPurple -top-5 left-[70%]'>{'\u2b24'}</div>
      <div className='flex md:justify-between justify-center font-bold items-end'>
        <h2 className='lg:text-[116px] md:text-[93px] text-[54px] uppercase leading-none'>ui.<span className='capitalize font-thin md:text-[38px] text-[26px] ms-7 tracking-wide'>course</span></h2>
        <p className='max-md:hidden text-[16px] font-bold uppercase relative'><span className='absolute -left-10 -top-5 text-[40px]'>{'\u25A0'}</span>start <span className='block'>learning</span></p>
      </div>
      <Cards />
      <div className='absolute text-[94px] text-mainPurple bottom-24 -translate-x-1/2'>{'\u2b24'}</div>
      <div className='absolute text-[94px] text-mainPurple bottom-24 right-0 translate-x-1/2 '>{'\u2b24'}</div>
    </div>

  )
}
export default Course;