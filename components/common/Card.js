import Button from "./Button";

const Card = (content) => {
  return (
    <div className='active:border-mainPurple border-2 border-white border-solid rounded-[47px] shadow-[0_0_57px_2px_rgba(0,0,0,0.13)] bg-main w-[291px] h-[375px]'>
      <div className='font-krub flex flex-col justify-between pt-10 h-80'>
        <div className='relative mx-auto uppercase leading-10 tracking-wide text-[33px] after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-6 after:w-[55px] after:border-solid after:border-[3px]'>
          <h2 className='font-semibold'>{content.title}<span className='font-normal'> {content.subtitle}</span></h2>
        </div>
        <div className='font-semibold text-[14px] text-center px-10 tracking-wider'>
          <p className=''>
            {content.text}
          </p>
        </div>
        <div className='mx-auto'>
          <Button buttonClass='bg-mainPurple text-main px-6 py-4 !tracking-widest'>Read More</Button>
        </div>
      </div>
    </div>
  )
}

export default Card;