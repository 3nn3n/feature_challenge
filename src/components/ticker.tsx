import { useCarts } from "@/hooks/useCardAPI";
import React from "react";

type TickerProps = {
  title?: string;
  growthPercent?: number;
  comparisonLabel?: string;
  cartIndex?: number;
};

const Ticker: React.FC<TickerProps> = ({
  title = "Cart metric",
  growthPercent = 18.6,
  comparisonLabel = "vs last 7 days",
  cartIndex = 0,
}) => {
  const { data, loading, error } = useCarts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Failed to load carts</div>;

  return (
    <div className="ticker-card">
      <div className="ticker-card__label">{title}</div>
      <div className="ticker-card__metrics">
        <div>{cartIndex}</div>
        <div className="ticker-card__growth">{growthPercent}%</div>
      </div>
      <div className="ticker-card__comparison">{comparisonLabel}</div>
    </div>
  );
};

export default Ticker;
