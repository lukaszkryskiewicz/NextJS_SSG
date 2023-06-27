import Image from "next/image";
import startQuote from '../../public/quote-start.png'
import endQuote from '../../public/quote-end.png'
import fullStar from '../../public/star-color.png'
import blankStar from '../../public/star-blank.png'

const UserCard = (user) => {
  return (
    <div className='flex h-[235px] justify-between gap-5 font-krub my-10'>
      <div className=''>
        <Image
          src={'/../public/user' + user.id + '.png'}
          alt='user'
          width='230'
          height='230'
          className='rounded-full border-2 border-solid border-black'
        />
      </div>
      <div className='w-7/12'>
        <div className='mb-5'>
          <Image
            src={startQuote}
            alt='startQoute'
          />
        </div>
        <div className='mb-1 flex gap-10 font-bold uppercase items-center'>
          <h2 className='text-[19px]'>{user.name}</h2>
          <p className='text-[11px] font-buttonFont text-[#939393]'>17 days ago</p>
        </div>
        <div className='font-bold text-[13px] tracking-wider leading-6'>
          <p className='text-justify'>
            {user.content}
          </p>
        </div>
        <div className='float-right'>
          <Image
            src={endQuote}
            alt='endQoute'
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
                  className='inline m-2'
                />
              );
            } else {
              return (
                <Image
                  key={index}
                  src={blankStar}
                  alt='blankStar'
                  className='inline m-2'
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