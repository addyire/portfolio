const Button = ({ children, ...props }) => (
  <div className="w-full border border-white flex px-4 py-2 text-white hover:text-black hover:bg-white transition-all font-bold cursor-pointer items-center justify-center" {...props}>
    {children}
  </div>
)

export default Button
