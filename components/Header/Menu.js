import Image from "next/image";
import Button from "../common/Button"

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
        <Button buttonClass='bg-black text-white h-9 w-24'>
          sing in
        </Button>
        <Image
          src='/Lines.png'
          alt="Lines"
          height={25}
          width={51}
        />
      </div>
    </div>
  )
}

export default Menu;