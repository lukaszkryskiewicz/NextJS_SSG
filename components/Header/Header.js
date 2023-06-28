import Logo from "../common/Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className='relative container mx-auto my-5 flex justify-between h-24'>
      <div className='absolute h-28 w-28 -top-20 left-48 rounded-full shadow-[0_0_57px_2px_rgba(0,0,0,0.13)] -z-10'></div>
      <Logo />
      <Menu />
    </div>
  )
}

export default Header;
