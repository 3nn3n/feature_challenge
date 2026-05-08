import React from 'react'
import ActivityComponent from './activityComponent'

const RecentActivityCard = () => {
  return (
    <div className='w-[34vw] h-[40vh] border rounded-2xl bg-pink-700'>
      <span className='text-xl p-5'>Recent Activity</span>
      <ActivityComponent />
      <ActivityComponent />
      <ActivityComponent />
      <ActivityComponent />
      <ActivityComponent />
      </div>
  )
}

export default RecentActivityCard