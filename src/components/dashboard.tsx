import React from "react";
import Card from "./card";
import Ticker from "./ticker";
import RecentActivityCard from "./recentActivityCard";
import ResourceDistribution from "./resourceDistribution";
import GlobalMap from "./globalMap";
import { useCarts } from "@/hooks/useCardAPI";

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
      <div className="dashboard-root">
        <div className="dashboard-tickers">
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

        <div className="dashboard-section dashboard-section--top">
          <div className="dashboard-col-wide dashboard-col-wide--panel">
            <Card key={graphRunKey} isActive={isGraphActive} />
          </div>
          <div className="dashboard-col-narrow">
            <RecentActivityCard />
          </div>
        </div>

        <div className="dashboard-section dashboard-section--bottom">
          <div className="dashboard-col-wide">
            <ResourceDistribution />
          </div>
          <div className="dashboard-col-narrow dashboard-col-narrow--fill">
            <GlobalMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
