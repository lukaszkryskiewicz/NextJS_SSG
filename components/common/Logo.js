import Image from 'next/image';
import headerLogo from '../../public/header-logo.png';

const Logo = () => {
  return (
    <div className='flex-initial my-auto'>
      <Image
        src={headerLogo}
        alt="Your Logo"
      />
    </div>
  )
}

export default Logo