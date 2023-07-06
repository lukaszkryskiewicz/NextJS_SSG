import Image from "next/image";
import startQuote from '../../public/quote-start.png'
import endQuote from '../../public/quote-end.png'
import fullStar from '../../public/star-color.png'
import blankStar from '../../public/star-blank.png'

const UserCard = (user) => {

  const getDayDifference = (date) => {
    const reviewDate = new Date(date);
    const todayDate = new Date();
    const totalDays = Math.floor((todayDate.getTime() - reviewDate.getTime()) / (1000 * 60 * 60 * 24))
    return totalDays
  }


  return (
    <div className='flex sm:flex-row flex-col lg:h-[235px] justify-between sm:gap-5 font-krub sm:my-10 my-1'>
      <div className='my-auto'>
        <Image
          src={'/user' + user.id + '.png'}
          alt='user'
          width='230'
          height='230'
          className='rounded-full border-2 border-solid border-black mx-auto max-sm:scale-75'
        />
      </div>
      <div className='sm:w-7/12 w-11/12 mx-auto'>
        <div className='sm:mb-5 mb-2'>
          <Image
            src={startQuote}
            alt='startQoute'
            className='sm:scale-100 scale-75'
          />
        </div>
        <div className='mb-1 flex gap-10 font-bold uppercase items-center'>
          <h2 className='sm:text-[19px] text-[15px]'>{user.name}</h2>
          <p className='sm:text-[11px] text-[10px] font-buttonFont text-[#939393]'>{getDayDifference(user.date)} days ago</p>
        </div>
        <div className='font-bold sm:text-[13px] text-[12px] tracking-wider leading-6'>
          <p className='text-justify'>
            {user.content}
          </p>
        </div>
        <div className='float-right'>
          <Image
            src={endQuote}
            alt='endQoute'
            className='sm:scale-100 scale-75'
          />
        </div>
        <div className='mt-4'>
          {[...Array(5)].map((i, index) => {
            if (index < user.stars) {
              return (
                <Image
                  key={index}
                  src={fullStar}
                  alt='fullStar'
                  className='inline sm:m-2 m-1'
                />
              );
            } else {
              return (
                <Image
                  key={index}
                  src={blankStar}
                  alt='blankStar'
                  className='inline sm:m-2 m-1'
                />
              );
            }
          })}
        </div>
      </div>
    </div >
  )
}

export default UserCard;