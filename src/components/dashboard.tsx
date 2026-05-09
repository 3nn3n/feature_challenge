import React from 'react'
import Card from './card'
import Ticker from './ticker';
import RecentActivityCard from './recentActivityCard';
import ResourceDistribution from './resourceDistribution';
import GlobalMap from './globalMap';
import { useCarts } from '@/hooks/useCardAPI';

type DashboardProps = {
  graphRunKey?: number;
  isGraphActive?: boolean;
};

const Dashboard = ({ graphRunKey = 0, isGraphActive = false }: DashboardProps) => {
  const { data, loading, error } = useCarts();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Failed to load Dashboard</div>;


  return (
    <>
      <div className='w-screen min-h-screen bg-(--color-surface-panel) py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-6 text-(--color-text-primary)'>
        <div className='flex flex-wrap items-center justify-center gap-3'>
          <div>
            <Ticker 
              title={data?.carts[12]?.products[1]?.title}
              growthPercent={data?.carts[12]?.products[1]?.price}
              comparisonLabel="vs yesterday"
              cartIndex={data?.carts[12]?.id}
            />
            </div>
          <div>
            <Ticker 
              title={data?.carts[18]?.products[0]?.title}
              growthPercent={data?.carts[18]?.products[0]?.price}
              comparisonLabel="vs yesterday"
              cartIndex={data?.carts[18]?.products[0].total}
            />
            </div>
          <div>
            <Ticker 
              title={data?.carts[14]?.products[2]?.title}
              growthPercent={data?.carts[14]?.products[2]?.price}
              comparisonLabel="vs yesterday"
              cartIndex={data?.carts[14]?.products[2].total}
            />
            </div>
          <div>
            <Ticker 
              title={data?.carts[14]?.products[0]?.title}
              growthPercent={data?.carts[14]?.products[0]?.price}
              comparisonLabel="vs yesterday"
              cartIndex={data?.carts[14]?.products[0].total}
            />
            </div>
          <div>
            <Ticker 
              title={data?.carts[12]?.products[0]?.title}
              growthPercent={data?.carts[12]?.products[1]?.total}
              comparisonLabel="vs yesterday"
              cartIndex={data?.carts[12]?.products[0].total}
            />
            </div>
          
        </div>

        <div className='mt-4 sm:mt-6 grid grid-cols-1 xl:grid-cols-12 gap-3 sm:gap-4 items-start'>
          <div className='xl:col-span-8 w-full overflow-x-auto rounded-2xl border border-(--color-border-primary)/50 bg-(--gradient-panel-soft)'>
            <Card key={graphRunKey} isActive={isGraphActive} />
          </div>
          <div className='xl:col-span-4 w-full'>
            <RecentActivityCard />
          </div>
        </div>

        <div className='mt-3 sm:mt-4 grid grid-cols-1 xl:grid-cols-12 gap-3 sm:gap-4 items-start'>
          <div className='xl:col-span-8 w-full overflow-x-auto'>
            <ResourceDistribution />
          </div>
          <div className='xl:col-span-4 w-full'>
            <GlobalMap />
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard