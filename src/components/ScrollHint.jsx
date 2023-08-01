import { IoIosArrowDown } from 'react-icons/io'

const ScrollHint = ({ show, onClick }) =>
  <div
    className="fixed bottom-0 left-1/2 -translate-x-1/2 p-4 cursor-pointer text-gray-500 flex flex-col justify-center items-center z-[100] transition-all duration-300 text-sm"
    style={{
      opacity: show === true ? 1 : 0,
      pointerEvents: show === true ? 'all' : 'none',
    }}
    onPointerDown={onClick}
  >
    <div>scroll down</div>
    <IoIosArrowDown size={'1rem'} />
  </div>


export default ScrollHint
