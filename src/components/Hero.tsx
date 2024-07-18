import React from 'react'

function Hero() {
  return (
    <div className="h-[50rem] w-full bg-zinc-700 flex-col text-left space-x-10 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex py-20">
    <div className="absolute pointer-events-none inset-0 flex dark:bg-black bg-zinc-700 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <h2 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-left px-3 text-justify">
      Hello there!
    </h2>
    <p className="text-lg md:w-2/3 text-slate-200 px-3 text-solid">
      Hey there, my name's Advay! I'm a rising senior in the Bay Area aboard the Boreal Express. 
      You can probably find me in ___________ or at _______________. 
      I can't wait to get to know you! 
    </p>
  </div>
  )
}

export default Hero