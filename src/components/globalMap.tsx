import React from 'react'
import Image from 'next/image'

const GlobalMap = () => {
  return (
    <div className='w-full min-h-[260px] sm:min-h-[270px] rounded-2xl border border-(--color-border-primary)/60 bg-(--gradient-panel)'>
      <Image
        src="/globalinfra.png"
        alt="Global infrastructure map"
        width={800}
        height={800}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  )
}

export default GlobalMap