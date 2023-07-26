const AnimatedHeader = ({ text, onClick }) =>
  <div className="w-fit group cursor-pointer" onClick={onClick}>
    <h1 className="font-bold text-4xl">{text}</h1>
    <div className="w-[110%]">
      <div
        className={`bg-gradient-to-r from-blue-500 to-red-500 h-0.5 w-full transition-all duration-500 group-hover:max-w-full max-w-0`}
      />
    </div>
  </div>

export default AnimatedHeader
