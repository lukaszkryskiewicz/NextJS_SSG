import Button from "./Button";

const SubscriptionForm = () => {
  return (
    <form className='2xl:mt-28 lg:mt-10 my-28 w-2/3 mx-auto text-[17px] font-krub uppercase font-bold flex gap-10 flex-col justify-between h-full'>
      <input type='text' placeholder='name' className='bg-transparent border-black border-4 border-solid w-full xl:h-16 h-10 tracking-widest placeholder:uppercase placeholder:text-black ps-5' />
      <input type='mail' placeholder='mail' className='bg-transparent border-black border-4 border-solid w-full xl:h-16 h-10 tracking-widest placeholder:uppercase placeholder:text-black ps-5' />
      <textarea placeholder='message' className='bg-transparent text-[17px] border-black border-4 border-solid xl:h-48 h-32 w-full tracking-widest placeholder:uppercase placeholder:text-black ps-5 pt-4' />
      <Button type='submit' buttonClass='mt-5 bg-black text-main px-6 py-4 !tracking-widest font-normal text-[14px] self-center hover:bg-black hover:text-mainPurple'>send message</Button>
    </form>
  )

}
export default SubscriptionForm;