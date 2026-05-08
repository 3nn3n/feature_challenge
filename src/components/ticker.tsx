import React from 'react'

const Ticker = () => {
  return (
    <div className='flex-col items-center bg-amber-600 border-2 m-2 px-6 py-2 rounded-2xl border-amber-900'>
      <div>Total Resources</div>
      <div className='flex items-center gap-1'>
        <div>12,842</div>
        <div>18.6 %</div>
      </div>
      <div>vs Last 7 days</div>
    </div>
  )
}

export default Ticker