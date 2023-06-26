import Card from "../common/Card";

const Cards = () => {

  const cardsContent = [
    {
      id: '1',
      title: 'level',
      subtitle: '.01',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
    },
    {
      id: '2',
      title: 'level',
      subtitle: '.02',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
    },
    {
      id: '3',
      title: 'level',
      subtitle: '.03',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
    }
  ]

  return (
    <div className='mt-40'>
      <div className='flex justify-between px-16'>
        {cardsContent.map(content => (
          <Card key={content.id} {...content} />
        ))}
      </div>
      <div className='text-center mt-16'>
        {cardsContent.map((i, index) => (
          <p key={index} className='text-xs p-4 inline text-[#cbcaca] active:text-mainPurple'>
            {'\u2b24'}
          </p>
        ))}
      </div>
    </div>

  )
}

export default Cards;