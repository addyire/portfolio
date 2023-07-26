
export const ScrollTextElement = ({ children }) => (
  <span
    className={
      'w-full text-center text-gray-500 '
    }
  >
    <span className=''>{children}</span>
    <span className="mx-4">{"//"}</span>
  </span>
)

export const ScrollText = ({ children }) => (
  <div className='relative flex w-3/5 overflow-x-hidden mt-8'>
    <div className='animate-marquee whitespace-nowrap '>{children}</div>

    <div className='absolute top-0 animate-marquee2 whitespace-nowrap '>{children}</div>
    <div className="absolute inset-0 bg-gradient-to-l z-10" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 90%, rgba(0,0,0,1) 100%)' }}></div>
  </div>
)
