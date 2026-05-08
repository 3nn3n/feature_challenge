import React from 'react'

const Ticker = () => {
  return (
    <div className='flex min-w-[150px] flex-col items-center rounded-2xl border border-(--color-border-primary)/70 bg-(--gradient-panel) px-4 py-2 shadow-(--shadow-inset-glow)'>
      <div className='text-xs sm:text-sm text-(--color-text-secondary)'>Total Resources</div>
      <div className='flex items-center gap-2 text-sm sm:text-base font-semibold'>
        <div>12,842</div>
        <div className='text-emerald-300'>18.6%</div>
      </div>
      <div className='text-[11px] sm:text-xs text-(--color-text-secondary)'>vs last 7 days</div>
    </div>
  )
}

export default Ticker