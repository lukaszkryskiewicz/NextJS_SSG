import Users from "./Users";

const UsersSection = () => {
  return (
    <div className='container mx-auto lg:my-32 mt-24 mb-20 font-krub relative'>
      <div className='flex flex-col sm:flex-row justify-between font-bold item-center sm:items-end'>
        <h2 className='lg:text-[116px] sm:text-[93px] text-[54px] uppercase md:mx-0 mx-auto leading-none'>what<span className='lowercase font-thin sm:text-[42px] text-[26px] ms-7 tracking-wide'>users think.</span></h2>
        <p className='max-md:hidden text-[16px] font-bold uppercase relative'><span className='absolute -left-10 -top-5 text-[40px]'>{'\u25A0'}</span>become a <span className='block'>pro-designer</span></p>
      </div>
      <Users />
    </div>
  )
}

export default UsersSection;