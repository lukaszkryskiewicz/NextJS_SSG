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
    <div className='flex lg:h-[235px] justify-between gap-5 font-krub my-10'>
      <div className=''>
        <Image
          src={'/user' + user.id + '.png'}
          alt='user'
          width='230'
          height='230'
          className='rounded-full border-2 border-solid border-black '
        />
      </div>
      <div className='sm:w-7/12 w-full'>
        <div className='mb-5'>
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