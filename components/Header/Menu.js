import Image from "next/image";
import Button from "../common/Button"
import headerLines from '../../public/header-lines.png'

const Menu = () => {
  const menuLinks = ['home', 'about', 'courses', 'blog']
  return (
    <div className='flex basis-3/4 justify-between'>
      {menuLinks.map(link => (
        <div key={link} className='my-auto'>
          <Button buttonClass=''>
            {link}
          </Button>
        </div>
      ))}
      <div className='my-auto flex gap-20'>
        <Button buttonClass='bg-black text-main w-28'>
          sign in
        </Button>
        <Image
          src={headerLines}
          alt="Lines"
        />
      </div>
    </div>
  )
}

export default Menu;