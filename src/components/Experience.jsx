import { useInView } from "react-intersection-observer"
import Header from "./Header"
import ExperienceCard from "./cards/ExperienceCard"

const inViewsToPercent = (views) => {
  let p = 0

  views.forEach((v, i) => {
    if (v && i == 0) p = (1 / views.length) * (13 / 16)
    if (v && i == views.length - 1) p = 1
    else if (v) p = (1 / views.length) * (i + 1) * (13 / 16)
  })

  return p * 100
}

const Experience = () => {
  const { ref: exp1, inView: exp1InView } = useInView({ threshold: 0.8, triggerOnce: true })
  const { ref: exp2, inView: exp2InView } = useInView({ threshold: 0.8, triggerOnce: true })
  const { ref: exp3, inView: exp3InView } = useInView({ threshold: 0.8, triggerOnce: true })
  const { ref: exp4, inView: exp4InView } = useInView({ threshold: 0.8, triggerOnce: true })

  const p = inViewsToPercent([exp1InView, exp2InView, exp3InView, exp4InView])

  return (<div className="">
    <Header>experience</Header>
    <div className="w-full relative px-8 my-8">
      <div ref={exp1}>
        <ExperienceCard
          inView={exp1InView}
          first
          side="right"
          title="Artesian Builds"
          subtitle="October 2021 - March 2022"
          text="I designed and wrote web pages streamlining the custom PC building process, increasing sales. I also engaged viewers with custom software showing live alerts on twitch.tv when a customer purchased a computer. "
          logo="/experience/artesianbuilds.jpg" />
      </div>
      <div ref={exp2} className="-mt-32">
        <ExperienceCard
          inView={exp2InView}
          side="left"
          title="Alternate Allele"
          subtitle="June 2020 - August 2020"
          text="Created a website visualizing genetic data in R allowing clients to identify impotant genes for genetics tests. Also wrote unit tests improving the reliability of infrastructure by finding critical bugs."
          logo="/experience/alternateallele.png" />
      </div>
      <div ref={exp3} className="-mt-32">
        <ExperienceCard
          inView={exp3InView}
          side="right"
          title="Algert Global"
          subtitle="June 2023"
          text="Redesigned and modernized their home page to attract more customers. I additionally implemented a hiring system where jobs could be listed and applicants could apply online."
          logo="/experience/algertglobal.png" />
      </div>
      <div ref={exp4} className="-mt-32">
        <ExperienceCard
          inView={exp4InView}
          side="left"
          title="Research At Drexel"
          subtitle="July 2023 - Current"
          text="Investigating metadata infrastructures across materials science repositories, specifically looking at the terminological representation used. "
          logo="/experience/drexel.png" />
      </div>
      <div
        key={123}
        className={`absolute duration-500 left-1/2 -translate-x-1/2 h-full transition-all bg-white w-0.5 top-0`}
        style={{ maxHeight: p + '%' }}
      />
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 top-0" style={{ background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,1) 100%)' }} />
    </div>
  </div >)
}

export default Experience
