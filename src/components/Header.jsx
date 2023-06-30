const Header = ({ children }) => (
  <div className="w-full flex items-center">
    <h1 className="font-bold text-2xl">{children}</h1>
    <div className="flex-grow h-1 bg-white ml-4" />
  </div>
)

export default Header
