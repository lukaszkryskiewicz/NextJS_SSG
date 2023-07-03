import Button from "./Button";

const Card = ({ id, title, subtitle, text, activeCard, setActiveCard }) => {

  return (
    <div className={`${activeCard === id ? 'border-mainPurple border-solid border-2' : 'max-md:hidden'} border-white border-solid rounded-[47px] shadow-[0_0_57px_2px_rgba(0,0,0,0.13)] bg-main max-w-[290px] h-[375px]`} onClick={() => setActiveCard(id)}>
      <div className='font-krub flex flex-col justify-between pt-10 h-80'>
        <div className='relative mx-auto uppercase leading-10 tracking-wide lg:text-[33px] text-[22px] after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 lg:after:-bottom-6 after:-bottom-3 after:w-[55px] after:border-solid after:border-[3px]'>
          <h2 className='font-semibold'>{title}<span className='font-normal'> {subtitle}</span></h2>
        </div>
        <div className='font-semibold lg:text-[14px] text-[12px] text-center px-10 tracking-wider'>
          <p className=''>
            {text}
          </p>
        </div>
        <div className='mx-auto'>
          <Button buttonClass='bg-mainPurple text-[12px] text-[14px] text-main px-6 py-4 !tracking-widest'>Read More</Button>
        </div>
      </div>
    </div>
  )
}

export default Card;