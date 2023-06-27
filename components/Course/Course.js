import Cards from "./Cards";

const Course = () => {
  return (

    <div className='container mx-auto py-32 font-krub relative overflow-hidden'>
      <div className='absolute text-[94px] text-mainPurple -top-5 left-[70%]'>{'\u2b24'}</div>
      <div className='flex justify-between font-bold items-end'>
        <h2 className='text-[116px] uppercase leading-none'>ui.<span className='capitalize font-thin text-[38px] ms-7 tracking-wide'>course</span></h2>
        <p className='text-[16px] font-bold uppercase relative'><span className='absolute -left-10 -top-5 text-[40px]'>{'\u25A0'}</span>start <span className='block'>learning</span></p>
      </div>
      <Cards />
      <div className='absolute text-[94px] text-mainPurple bottom-24 -translate-x-1/2'>{'\u2b24'}</div>
      <div className='absolute text-[94px] text-mainPurple bottom-24 right-0 translate-x-1/2 '>{'\u2b24'}</div>
    </div>

  )
}
export default Course;