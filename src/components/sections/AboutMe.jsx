import Image from "next/image"

const AboutMe = () => {
  return <div className="my-8 flex w-full flex-wrap items-center justify-center md:my-16 md:flex-nowrap">
    <div className="relative p-8">
      <Image alt="Addy Ireland profile picture" src="/memoji-1.png" width={256} height={256} />
    </div>
    <div className="max-w-xl space-y-2 text-sm">
      <h1 className="text-2xl font-normal text-white">I{"'"}m a <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text font-extrabold text-transparent">Software Engineer</span>.</h1>
      <p className="text-gray-300">I{"'"}m focused on building scalable, high-performance systems across the stack. I{"'"}ve worked in startup and research environments, modernizing backend APIs, shipping full-stack applications, and building tools used in production. I{"'"}m especially interested in backend systems, developer tooling, and applied AI.</p>
    </div>
  </div>
}

export default AboutMe
