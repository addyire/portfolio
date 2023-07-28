import { useInView } from "react-intersection-observer"
import GradientCard from "./GradientCard"
import Image from "next/image"

const ExperienceCard = ({ side = "left", inView, logo, title, subtitle, text }) => {
  const left = side === 'left'

  return <div className={`${left ? 'lg:mr-auto' : 'lg:ml-auto'} lg:w-1/2 lg:h-64 relative`}>
    <div className={`flex h-full w-full flex-row-reverse ${!left ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center lg:items-stretch justify-center`}>
      <div className={`grow py-4 ${left ? 'pr-0' : 'pl-0'}`}>
        <GradientCard>
          <div className="space-y-4">
            <div className='flex items-center'>
              {logo && <Image src={logo} width={256} height={256} className={'object-fit w-16 h-16 rounded-lg shadow'} />}
              <div className="mx-4">
                <h1 className="font-bold text-xl">{title}</h1>
                <h2 className="text-sm text-gray-600">{subtitle}</h2>
              </div>
            </div>
            <p className="text-sm xl:text-base">{text}</p>
          </div>
        </GradientCard>
      </div>
      <div className={`flex flex-none w-8 h-full items-center ${left ? 'justify-start lg:justify-end' : 'justify-start'}`} >
        <div className="w-full h-0.5 bg-gray-500 transition-all delay-700" style={{ maxWidth: inView ? '100%' : '0%' }} />
      </div>
    </div>
    <div className={`${inView ? 'scale-100' : 'scale-0'} delay-500 transition-transform duration-200 absolute top-1/2 ${left ? 'right-[100%] lg:right-0' : 'left-0'} h-4 w-4 z-10 border-2 border-white rounded-full bg-black -translate-y-1/2 ${left ? 'translate-x-1/2' : '-translate-x-1/2'}`}></div>
  </div >
}

export default ExperienceCard
