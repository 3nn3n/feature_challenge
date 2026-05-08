import React from 'react'
import Image from 'next/image'

const GlobalMap = () => {
  return (
    <div className='bg-green-500 w-[34vw] h-[42vh] items-center justify-center rounded-3xl p-6'>
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