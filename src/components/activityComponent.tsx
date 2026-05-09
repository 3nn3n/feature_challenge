import React from 'react'
import { useCarts } from '@/hooks/useCardAPI';

type ActivityProps = {
  image?: number;
  name?: string;
  place?: string;
};

const ActivityComponent: React.FC<ActivityProps> = (
  {
    image,
    name,
    place
  }
) => {
  const { data, loading, error } = useCarts();
  console.log(data);

  return (
    <div className='mt-2 flex min-h-[52px] w-full items-center justify-between rounded-xl border border-(--color-border-primary)/30 bg-(--color-surface-card)/70 px-3 py-2 sm:px-4'>
      <div className='flex items-center justify-start gap-4'>
        <div className='text-[10px] sm:text-xs text-(--color-text-secondary)'>{image}</div>
        <div className='text-xs sm:text-sm text-(--color-text-primary)'>
          <div>{name}</div>
          <div>{[place]}</div>
        </div>
      </div>
      <div className='text-xs sm:text-sm text-emerald-300'>Success</div>
    </div>
  )
}

export default ActivityComponent