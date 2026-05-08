import React from 'react'
import ActivityComponent from './activityComponent'

const RecentActivityCard = () => {
  return (
    <div className='w-full min-h-[260px] sm:min-h-[270px] rounded-2xl border border-(--color-border-primary)/60 bg-(--gradient-panel) p-4 sm:p-5'>
      <span className='text-base sm:text-sm font-semibold text-(--color-text-primary)'>Recent Activity</span>
      <ActivityComponent />
      <ActivityComponent />
      <ActivityComponent />
      </div>
  )
}

export default RecentActivityCard