import React from 'react'
import Card from './card'
import Ticker from './ticker';
import RecentActivityCard from './recentActivityCard';
import ResourceDistribution from './resourceDistribution';
import GlobalMap from './globalMap';

type DashboardProps = {
  graphRunKey?: number;
  isGraphActive?: boolean;
};

const Dashboard = ({ graphRunKey = 0, isGraphActive = false }: DashboardProps) => {

  return (
    <>
      <div className='w-screen min-h-screen bg-amber-400 border py-8 px-4'>
        <div className='flex flex-wrap items-center justify-center gap-3'>
          <div><Ticker /></div>
          <div><Ticker /></div>
          <div><Ticker /></div>
          <div><Ticker /></div>
          <div><Ticker /></div>
          <div><Ticker /></div>
        </div>

        <div className='mt-6 flex flex-col lg:flex-row items-start m-4 gap-2'>
          <div>
            <Card key={graphRunKey} isActive={isGraphActive} />
          </div>
          <div >
            <RecentActivityCard />
          </div>
        </div>
        <div className='flex items-center'>
          <div>
            <ResourceDistribution />
          </div>
          <div>
            <GlobalMap />
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard