"use client";

import { useCarts } from "@/hooks/useCardAPI";
import React, { useState } from "react";

type ServiceRow = {
  name: string;
  aws: number | undefined;
  azure: number | undefined;
  gcp: number | undefined;
  oracle: number | undefined;
  ibm: number | undefined;
};

export default function ResourceDistributionTable() {
  const [activeTab, setActiveTab] = useState("service");

  const { data, loading, error } = useCarts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Failed to resources</div>;

  const services: ServiceRow[] = [
    {
      name: "Compute",
      aws: data?.carts[12]?.totalProducts,
      azure: data?.carts[13]?.totalProducts,
      gcp: data?.carts[14]?.totalProducts,
      oracle: data?.carts[15]?.totalProducts,
      ibm: data?.carts[16]?.totalProducts,
    },
    {
      name: "Storage",
      aws: data?.carts[18]?.totalProducts,
      azure: data?.carts[19]?.totalProducts,
      gcp: data?.carts[20]?.totalProducts,
      oracle: data?.carts[21]?.totalProducts,
      ibm: data?.carts[22]?.totalProducts,
    },
    {
      name: "Database",
      aws: data?.carts[24]?.totalProducts,
      azure: data?.carts[25]?.totalProducts,
      gcp: data?.carts[26]?.totalProducts,
      oracle: data?.carts[27]?.totalProducts,
      ibm: data?.carts[28]?.totalProducts,
    },
    {
      name: "Networking",
      aws: data?.carts[0]?.totalProducts,
      azure: data?.carts[27]?.totalProducts,
      gcp: data?.carts[11]?.totalProducts,
      oracle: data?.carts[21]?.totalProducts,
      ibm: data?.carts[7]?.totalProducts,
    },
    {
      name: "Security",
      aws: data?.carts[0]?.totalProducts,
      azure: data?.carts[1]?.totalProducts,
      gcp: data?.carts[2]?.totalProducts,
      oracle: data?.carts[3]?.totalProducts,
      ibm: data?.carts[4]?.totalProducts,
    },
    {
      name: "Other",
      aws: data?.carts[6]?.totalProducts,
      azure: data?.carts[7]?.totalProducts,
      gcp: data?.carts[8]?.totalProducts,
      oracle: data?.carts[9]?.totalProducts,
      ibm: data?.carts[10]?.totalProducts,
    },
  ];

  return (
    <div className="resource-distribution">
      <div className="resource-distribution__header">
        <h2 className="resource-distribution__title">Resource Distribution</h2>

        <div className="resource-distribution__tabs">
          <button
            type="button"
            onClick={() => setActiveTab("service")}
            className={
              activeTab === "service"
                ? "resource-distribution__tab resource-distribution__tab--active"
                : "resource-distribution__tab resource-distribution__tab--inactive"
            }
          >
            By Service
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("region")}
            className={
              activeTab === "region"
                ? "resource-distribution__tab resource-distribution__tab--active"
                : "resource-distribution__tab resource-distribution__tab--inactive"
            }
          >
            By Region
          </button>
        </div>
      </div>

      <div className="resource-distribution__table-wrap">
        <table className="resource-distribution__table">
          <thead className="resource-distribution__thead">
            <tr className="resource-distribution__head-row">
              <th className="resource-distribution__th--service">Service</th>

              <th className="resource-distribution__th--aws">AWS</th>

              <th className="resource-distribution__th--azure">Azure</th>

              <th className="resource-distribution__th--gcp">GCP</th>

              <th className="resource-distribution__th--oracle">Oracle</th>

              <th className="resource-distribution__th--ibm">IBM</th>

              <th className="resource-distribution__th--total">Total</th>
            </tr>
          </thead>

          <tbody>
            {services.map((service, index) => {
              const asNum = (v: number | undefined) => (typeof v === "number" ? v : 0);

              const rowTotal =
                asNum(service.aws) +
                asNum(service.azure) +
                asNum(service.gcp) +
                asNum(service.oracle) +
                asNum(service.ibm);

              return (
                <tr key={index} className="resource-distribution__row">
                  <td className="resource-distribution__td--name">{service.name}</td>
                  <td className="resource-distribution__td">{service.aws}</td>
                  <td className="resource-distribution__td">{service.azure}</td>
                  <td className="resource-distribution__td">{service.gcp}</td>
                  <td className="resource-distribution__td">{service.oracle}</td>
                  <td className="resource-distribution__td">{service.ibm}</td>
                  <td className="resource-distribution__td--total">{rowTotal}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
