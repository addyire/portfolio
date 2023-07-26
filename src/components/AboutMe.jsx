import Image from "next/image"

const AboutMe = () => {
  return <div className="flex flex-wrap md:flex-nowrap justify-center w-full items-center my-8 md:my-16">
    <div className="relative p-8">
      <Image src="/memoji-1.png" width={256} height={256} />
    </div>
    <div className="text-sm max-w-xl space-y-2">
      <h1 className="text-2xl font-normal text-white">I{"'"}m a <a className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">Software Engineer</a>.</h1>
      <p className="text-gray-300">Currently, I{"'"}m studying Computer Science at Penn State as a brother and founding father of Alpha Chi Rho. When I{"'"}m not studying, I either work on some of my personal projects or learn something new.</p>
    </div>
  </div>
}

export default AboutMe
