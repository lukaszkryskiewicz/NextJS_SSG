'use client'
import Card from "../common/Card";
import { useState } from "react";

const Cards = () => {
  const [activeCard, setActiveCard] = useState(0)

  const handleClick = (index) => {
    setActiveCard(index)
  }

  const cardsContent = [
    {
      id: 0,
      title: 'level',
      subtitle: '.01',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
    },
    {
      id: 1,
      title: 'level',
      subtitle: '.02',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
    },
    {
      id: 2,
      title: 'level',
      subtitle: '.03',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
    }
  ]

  return (
    <div className='md:mt-40 mt-20'>
      <div className='flex md:justify-between justify-center gap-5 lg:px-16'>
        {cardsContent.map(content => (
          <Card key={content.id} {...content} activeCard={activeCard} setActiveCard={setActiveCard} />
        ))}
      </div>
      <div className='text-center mt-16'>
        {cardsContent.map((i, index) => (
          <p key={index} className={`text-xs p-4 inline ${activeCard === (index) ? 'text-mainPurple' : 'text-[#cbcaca]'}`}>
            <span className='cursor-pointer' onClick={() => handleClick(index)}>{'\u2b24'}</span>
          </p>
        ))}
      </div>
    </div>

  )
}

export default Cards;