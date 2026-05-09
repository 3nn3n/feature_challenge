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
    <div className="flex min-w-[150px] flex-col items-center rounded-2xl border border-(--color-border-primary)/70 bg-(--gradient-panel) px-4 py-2 shadow-(--shadow-inset-glow)">
      <div className="text-xs sm:text-sm text-(--color-text-secondary)">
        {title}
      </div>
      <div className="flex items-center gap-2 text-sm sm:text-base font-semibold">
        <div>{cartIndex}</div>
        <div className="text-emerald-300">{growthPercent}%</div>
      </div>
      <div className="text-[11px] sm:text-xs text-(--color-text-secondary)">
        {comparisonLabel}
      </div>
    </div>
  );
};

export default Ticker;