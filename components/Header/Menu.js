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
            <Button buttonClass='font-medium hover:text-mainPurple'>
              {link}
            </Button>
          </div>
        ))}
        <Button buttonClass='bg-black text-[17px] my-auto p-2 text-main w-28 font-semibold hover:text-mainPurple'>
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
          <div className="absolute top-10 right-0 bg-white z-10 py-1">
            <ul className="w-[200px] text-center uppercase font-krub font-bold">
              {menuLinks.map((link) => (
                <li key={link} className='h-[60px] flex items-center' onClick={() => setShowMobile(!showMobile)}>
                  <a className='w-full' href="#">{link}</a>
                </li>
              ))}
              <li className='h-[50px] flex items-center'>
                <a className='w-full' href="#">sing up</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu;