'use client'
import Image from "next/image";
import Button from "../common/Button"
import headerLines from '../../public/header-lines.png'
import { useState } from "react";

const Menu = () => {
  const [showMobile, setShowMobile] = useState(false);

  const menuLinks = ['home', 'about', 'courses', 'blog']
  return (
    <div className='flex basis-3/4 sm:justify-between justify-end text-[17px]'>
      <div className='max-sm:hidden flex justify-between w-full'>
        {menuLinks.map(link => (
          <div key={link} className='my-auto'>
            <Button buttonClass='font-medium'>
              {link}
            </Button>
          </div>
        ))}
        <Button buttonClass='bg-black text-[17px] my-auto p-2 text-main w-28 font-semibold'>
          sign in
        </Button>
      </div>

      <div className='my-auto relative sm:hidden'>
        <button onClick={() => setShowMobile(!showMobile)}>
          <Image
            src={headerLines}
            alt="Lines"
          />
        </button>
        {showMobile && (
          <div className="absolute top-16 right-0 bg-white p-4 z-10">
            <ul className="space-y-4 text-center uppercase font-krub font-bold">
              {menuLinks.map((link) => (
                <li key={link} className='' onClick={() => setShowMobile(!showMobile)}>
                  <a href="#">{link}</a>
                </li>
              ))}
              <li>
                <a href="#">sing up</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu;