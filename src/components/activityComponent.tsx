import React from "react";
import { useCarts } from "@/hooks/useCardAPI";

type ActivityProps = {
  image?: number;
  name?: string;
  place?: string;
};

const ActivityComponent: React.FC<ActivityProps> = ({ image, name, place }) => {
  const { data, loading, error } = useCarts();
  console.log(data);

  return (
    <div className="activity-row">
      <div className="activity-row__left">
        <div className="activity-row__meta">{image}</div>
        <div className="activity-row__body">
          <div>{name}</div>
          <div>{[place]}</div>
        </div>
      </div>
      <div className="activity-row__status">Success</div>
    </div>
  );
};

export default ActivityComponent;
