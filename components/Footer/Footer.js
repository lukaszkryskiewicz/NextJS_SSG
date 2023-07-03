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
    <div className='relative bg-black font-krub py-24'>
      <div className='text-white flex md:flex-row flex-col justify-between container mx-auto'>
        <div className='basis-1/2 flex'>
          <div className='basis-1/2 text-center md:text-left'>
            <h2 className='md:text-[33px] text-[20px] font-bold tracking-wide mb-8'>About</h2>
            <ul className='md:leading-10 leading-5'>
              {aboutLinks.map(link => (
                <li key={link.name} className='md:text-[22px] text-[14px] font-normal capitalize'>
                  <a href={link.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='basis-1/2 text-center md:text-left'>
            <h2 className='md:text-[33px] text-[20px] font-bold tracking-wide mb-8'>What we do</h2>
            <ul className='md:leading-10 leading-5'>
              {whatWeDoLinks.map(link => (
                <li key={link.name} className='md:text-[22px] text-[14px] font-normal capitalize'>
                  <a href={link.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='basis-1/2 flex flex-col  md:items-end items-center mt-12 md:mt-0'>
          <div className='md:text-right text-center capitalize md:text-[33px] text-[22px] font-bold'>
            <p className=''>sign up to recive</p>
            <p className=''>our newsletter</p>
          </div>
          <form className='w-full text-center'>
            <input type='email' className='md:my-10 my-6 8 border-2 border-white border-solid bg-transparent md:h-16 h-10 md:w-3/4 w-1/2 md:float-right' />
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
    </div >
  )

}
export default Footer;