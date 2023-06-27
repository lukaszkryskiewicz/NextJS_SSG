import Users from "./Users";

const UsersSection = () => {
  return (
    <div className='container mx-auto my-32 font-krub relative'>
      <div className='flex justify-between font-bold items-end'>
        <h2 className='text-[93px] uppercase leading-none'>what<span className='lowercase font-thin text-[42px] ms-7 tracking-wide'>users think.</span></h2>
        <p className='text-[16px] font-bold uppercase relative'><span className='absolute -left-10 -top-5 text-[40px]'>{'\u25A0'}</span>become a <span className='block'>pro-designer</span></p>
      </div>
      <Users />
    </div>
  )
}

export default UsersSection;