import { useInView } from "react-intersection-observer"
import GradientCard from "./GradientCard"
import Image from "next/image"

const ExperienceCard = ({ side = "left", inView, logo, title, subtitle, text }) => {
  const left = side === 'left'

  return <div className={`${left ? 'lg:mr-auto' : 'lg:ml-auto'} relative lg:h-64 lg:w-1/2`}>
    <div className={`flex h-full w-full flex-row-reverse ${!left ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-center lg:items-stretch`}>
      <div className={`grow py-4 ${left ? 'pr-0' : 'pl-0'}`}>
        <GradientCard>
          <div className="space-y-4">
            <div className='flex items-center'>
              {logo && <Image alt="Company Logo" src={logo} width={256} height={256} className={'object-fit h-16 w-16 rounded-lg shadow'} />}
              <div className="mx-4">
                <h1 className="text-xl font-bold">{title}</h1>
                <h2 className="text-sm text-gray-600">{subtitle}</h2>
              </div>
            </div>
            <p className="text-sm xl:text-base">{text}</p>
          </div>
        </GradientCard>
      </div>
      <div className={`flex h-full w-8 flex-none items-center ${left ? 'justify-start lg:justify-end' : 'justify-start'}`} >
        <div className="h-0.5 w-full bg-gray-500 transition-all delay-700" style={{ maxWidth: inView ? '100%' : '0%' }} />
      </div>
    </div>
    <div className={`${inView ? 'scale-100' : 'scale-0'} absolute top-1/2 transition-transform delay-500 duration-200 ${left ? 'right-[100%] lg:right-0' : 'left-0'} z-10 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-black ${left ? 'translate-x-1/2' : '-translate-x-1/2'}`}></div>
  </div >
}

export default ExperienceCard
