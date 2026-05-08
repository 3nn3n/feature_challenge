import React from 'react'

const ActivityComponent = () => {
  return (
    <div className='flex items-center w-[32vw] h-[6vh] m-1 justify-between p-4 bg-blue-500'>
      <div className='flex items-center justify-start gap-4'>
        <div>AWSIMAGE</div>
        <div className='text-sm'>
          <div>Virtual Machine</div>
          <div>US East 1 </div>
        </div>
      </div>
      <div>Success</div>
    </div>
  )
}

export default ActivityComponent