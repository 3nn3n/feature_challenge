import React from 'react'
import Card from './card'
import { useState } from 'react';
import Ticker from './ticker';
import RecentActivityCard from './recentActivityCard';
import ResourceDistribution from './resourceDistribution';

const Dashboard = () => {
  const [graphRunKey, setGraphRunKey] = useState(0);

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
            <Card key={graphRunKey} />
          </div>
          <div >
            <RecentActivityCard />
          </div>
        </div>

        <div>
          <ResourceDistribution />
        </div>

      </div>
    </>
  )
}

export default Dashboard