import React from 'react'
import ActivityComponent from './activityComponent'
import { useCarts } from '@/hooks/useCardAPI';

const RecentActivityCard = () => {
  const { data, loading, error } = useCarts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Failed to load carts</div>;
  return (
    <div className='w-full min-h-[260px] sm:min-h-[270px] rounded-2xl border border-(--color-border-primary)/60 bg-(--gradient-panel) p-4 sm:p-5'>
      <span className='text-base sm:text-sm font-semibold text-(--color-text-primary)'>Recent Activity</span>
      <ActivityComponent
      image={data?.carts[0]?.products[0].id}
      name={data?.carts[0]?.products[0].title}
      place='East Coast'
      />
      <ActivityComponent
      image={data?.carts[26]?.products[2].id}
      name={data?.carts[26]?.products[2].title}
      place='Singapore'
      />
      <ActivityComponent
      image={data?.carts[19]?.products[1].id}
      name={data?.carts[19]?.products[1].title}
      place='Australia'
      />
      </div>
  )
}

export default RecentActivityCard