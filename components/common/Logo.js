import Image from 'next/image'

const Logo = () => {
  return (
    <div className='flex-initial my-auto'>
      <Image
        src='/Your_Logo.png'
        alt="Your Logo"
        className='align-self-center'
        width={100}
        height={24}
      />
    </div>
  )
}

export default Logo