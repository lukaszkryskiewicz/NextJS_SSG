import Image from "next/image";
import fb from '../../public/facebook.png'
import youtube from '../../public/youtube.png'
import ig from '../../public/instagram.png'

const Footer = () => {
  const aboutLinks = [
    { name: 'history', link: '#' },
    { name: 'our team', link: '#' },
    { name: 'mission statement', link: '#' },
    { name: 'terms & conditions', link: '#' },
    { name: 'privacy policy', link: '#' },
  ]

  const whatWeDoLinks = [
    { name: 'newstand stories', link: '#' },
    { name: 'publications', link: '#' },
    { name: 'take actions', link: '#' },
    { name: 'recomendations', link: '#' },
    { name: 'help', link: '#' },
  ]



  return (
    <div className='relative font-krub'>
      <div className='bg-black h-[700px] absolute left-0 -top-8 w-full'>
        <div className='text-white mt-60 flex justify-between container mx-auto'>
          <div className='w-1/4'>
            <h2 className='text-[33px] font-bold tracking-wide mb-8'>About</h2>
            <ul className='leading-10'>
              {aboutLinks.map(link => (
                <li key={link.name} className='text-[22px] font-normal capitalize'>
                  <a href={link.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='w-1/4'>
            <h2 className='text-[33px] font-bold tracking-wide mb-8'>What we do</h2>
            <ul className='leading-10'>
              {whatWeDoLinks.map(link => (
                <li key={link.name} className='text-[22px] font-normal capitalize'>
                  <a href={link.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='w-1/2 flex flex-col justify-end items-end'>
            <div className='text-right capitalize text-[33px] font-bold'>
              <p className=''>sign up to recive</p>
              <p className=''>our newsletter</p>
            </div>
            <form className='w-full'>
              <input type='email' className='my-10 border-2 border-white border-solid bg-transparent h-16 w-3/4 float-right' />
            </form>
            <div className='ps-5 flex justify-between w-3/4 my-5'>
              <p className='text-[20px] font-normal'>Follow us!</p>

              <Image
                src={fb}
                alt='fb'
                className=''
              />
              <Image
                src={ig}
                alt='ig'
              />
              <Image
                src={youtube}
                alt='youtube'
              />

            </div>
          </div>
        </div>
      </div>
    </div >
  )

}
export default Footer;