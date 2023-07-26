import { useInView } from "react-intersection-observer"
import GradientCard from "./GradientCard"
import Image from "next/image"

const ExperienceCard = ({ side = "left", inView, logo, title, subtitle, text }) => {
  const left = side === 'left'

  return <div className={`${left ? 'md:mr-auto' : 'md:ml-auto'} md:w-1/2 md:h-64 relative`}>
    <div className={`flex h-full w-full flex-row-reverse ${!left ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center`}>
      <div className={`grow ${left ? 'pr-0' : 'pl-0'}`}>
        <GradientCard>
          <div className="space-y-4">
            <div className='flex items-center'>
              {logo && <Image src={logo} width={256} height={256} className={'object-fit w-16 h-16 rounded-md shadow'} />}
              <div className="mx-4">
                <h1 className="font-bold text-xl">{title}</h1>
                <h2 className="text-sm text-gray-600">{subtitle}</h2>
              </div>
            </div>
            <p>{text}</p>
          </div>
        </GradientCard>
      </div>
      <div className={`flex flex-none w-8 h-full items-center ${left ? 'justify-start md:justify-end' : 'justify-start'}`} >
        <div className="w-full h-0.5 bg-gray-500 transition-all delay-700" style={{ maxWidth: inView ? '100%' : '0%' }} />
      </div>
    </div>
    <div className={`${inView ? 'scale-100' : 'scale-0'} delay-500 transition-all duration-200 absolute top-1/2 ${left ? 'right-[100%] md:right-0' : 'left-0'} h-4 w-4 z-10 border-2 border-white rounded-full bg-black -translate-y-1/2 ${left ? 'translate-x-1/2' : '-translate-x-1/2'}`}></div>
  </div >
}

export default ExperienceCard
