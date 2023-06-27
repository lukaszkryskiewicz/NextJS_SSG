import Button from "./Button";

const SubscriptionForm = () => {
  return (
    <form className='my-28 w-2/3 mx-auto text-[17px] font-krub uppercase font-bold flex flex-col justify-between h-full'>
      <input type='text' placeholder='name' className='bg-transparent border-black border-4 border-solid w-full h-16 tracking-widest my-8 placeholder:uppercase placeholder:text-black ps-5' />
      <input type='mail' placeholder='mail' className='bg-transparent border-black border-4 border-solid w-full h-16 tracking-widest my-8 placeholder:uppercase placeholder:text-black ps-5' />
      <textarea placeholder='message' className='bg-transparent text-[17px] border-black border-4 border-solid h-48 w-full tracking-widest my-8 placeholder:uppercase placeholder:text-black ps-5 pt-4' />
      <Button buttonClass='w-1/3 mt-5 bg-black text-main px-6 py-4 !tracking-widest font-normal text-[14px] self-center'>send message</Button>
    </form>
  )

}
export default SubscriptionForm;