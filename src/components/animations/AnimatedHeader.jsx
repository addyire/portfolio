const AnimatedHeader = ({ text, onClick }) =>
  <div className="group cursor-pointer w-full" onClick={onClick}>
    <div className="w-fit">
      <h1 className="font-bold text-4xl">{text}</h1>
      <div className="w-[110%]">
        <div
          className={`bg-gradient-to-r from-blue-500 to-red-500 h-0.5 w-full transition-all duration-200 group-hover:max-w-full max-w-0`}
        />
      </div>
    </div>
  </div>

export default AnimatedHeader
