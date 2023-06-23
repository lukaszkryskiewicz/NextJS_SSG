const Button = ({ buttonClass, children }) => {
  return (
    <button className={`font-buttonFont uppercase font-semibold tracking-tight ${buttonClass}`}>
      {children}
    </button>
  )
}

export default Button