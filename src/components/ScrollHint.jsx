const { useState, useEffect } = require("react")
const { IoIosArrowDown } = require("react-icons/io")

const ScrollHint = ({ show }) => {
  const [shown, setShown] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShown(true)
    }, 1000)

    return () => clearTimeout(timeout)
  })

  return <div
    className="flex flex-col text-gray-500 items-center justify-center p-8 fixed bottom-0 left-1/2 -translate-x-1/2 transition-all z-50"
    style={{
      opacity: show && shown ? '100%' : '0%',
    }}
  >
    <p className="">scroll down</p>
    <IoIosArrowDown size="1rem" />
  </div>
}

export default ScrollHint
