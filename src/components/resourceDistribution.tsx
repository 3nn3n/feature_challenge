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
    <div className="w-full min-w-[720px] rounded-2xl border border-(--color-border-primary)/60 bg-(--gradient-panel) p-4 sm:p-4 text-(--color-text-primary) shadow-2xl">
      {/* Header */}
      <div className=" flex items-center justify-between">
        <h2 className="text-md font-semibold tracking-tight">
          Resource Distribution
        </h2>

        {/* Tabs */}
        <div className="mb-2 flex rounded-xl border border-white/10 bg-(--color-surface-overlay)">
          <button
            onClick={() => setActiveTab("service")}
            className={`rounded-xl px-5 text-sm transition-all ${activeTab === "service"
                ? "bg-(--color-surface-card) text-white"
                : "text-white/60 hover:text-white"
              }`}
          >
            By Service
          </button>

          <button
            onClick={() => setActiveTab("region")}
            className={`rounded-xl px-5 text-sm transition-all ${activeTab === "region"
                ? "bg-(--color-surface-card) text-white"
                : "text-white/60 hover:text-white"
              }`}
          >
            By Region
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-white/5">
        <table className="w-full border-collapse">
          <thead className="bg-white/2">
            <tr className="border-b border-white/10 text-left text-sm">
              <th className="px-5 font-small text-white/60">Service</th>

              <th className="px-5 py-4 font-small text-(--color-provider-aws)">AWS</th>

              <th className="px-5 py-4 font-small text-(--color-provider-azure)">Azure</th>

              <th className="px-5 py-4 font-small text-(--color-provider-gcp)">GCP</th>

              <th className="px-5 py-4 font-small text-(--color-provider-oracle)">
                Oracle
              </th>

              <th className="px-5 py-4 font-small text-(--color-provider-ibm)">IBM</th>

              <th className="px-5 py-4 font-small text-right text-white/60">
                Total
              </th>
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
                <tr key={index} className="border-b border-white/5 transition-colors hover:bg-white/3">
                  <td className="px-5 text-white/80">{service.name}</td>
                  <td className="px-5">{service.aws}</td>
                  <td className="px-5">{service.azure}</td>
                  <td className="px-5">{service.gcp}</td>
                  <td className="px-5">{service.oracle}</td>
                  <td className="px-5">{service.ibm}</td>
                  <td className="px-5 text-right font-small">{rowTotal}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}