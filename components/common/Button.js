const Button = ({ buttonClass, children }) => {
  return (
    <button className={`font-buttonFont uppercase tracking-tight ${buttonClass}`}>
      {children}
    </button>
  )
}

export default Button