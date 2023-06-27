import UserCard from "../common/UserCard"

const Users = () => {
  const usersArr = [
    { id: 1, name: 'laura smith', stars: 4, data: '03/06/2023', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse.' },
    { id: 2, name: 'robert smith', stars: 3, data: '04/06/2023', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse.' },
    { id: 3, name: 'bob smith', stars: 5, data: '09/06/2023', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse.' },
    { id: 4, name: 'anna smith', stars: 2, data: '03/05/2023', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse.' },
  ]


  return (
    <div className='grid grid-cols-2 gap-20 mt-20'>
      {usersArr.map(user => (
        <div className='' key={user.id}>
          <UserCard {...user} />
        </div>
      ))}
    </div>
  )
}

export default Users;