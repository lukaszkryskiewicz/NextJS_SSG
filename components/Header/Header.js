import Logo from "../common/Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className='container mx-auto my-5 flex justify-between h-24'>
      <Logo />
      <Menu />
    </div>
  )
}

export default Header;