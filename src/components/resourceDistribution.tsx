"use client";

import React, { useState } from "react";

const services = [
  {
    name: "Compute",
    aws: "1,781",
    azure: "1,120",
    gcp: "842",
    oracle: "512",
    ibm: "210",
    total: "4,465",
  },
  {
    name: "Storage",
    aws: "1,256",
    azure: "870",
    gcp: "621",
    oracle: "421",
    ibm: "198",
    total: "3,366",
  },
  {
    name: "Database",
    aws: "689",
    azure: "512",
    gcp: "412",
    oracle: "256",
    ibm: "95",
    total: "1,964",
  },
  {
    name: "Networking",
    aws: "642",
    azure: "415",
    gcp: "312",
    oracle: "201",
    ibm: "67",
    total: "1,637",
  },
  {
    name: "Security",
    aws: "346",
    azure: "198",
    gcp: "125",
    oracle: "87",
    ibm: "32",
    total: "788",
  },
  {
    name: "Other",
    aws: "500",
    azure: "135",
    gcp: "-",
    oracle: "65",
    ibm: "-",
    total: "700",
  },
];

export default function ResourceDistributionTable() {
  const [activeTab, setActiveTab] = useState("service");

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
            className={`rounded-xl px-5 text-sm transition-all ${
              activeTab === "service"
                ? "bg-(--color-surface-card) text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            By Service
          </button>

          <button
            onClick={() => setActiveTab("region")}
            className={`rounded-xl px-5 text-sm transition-all ${
              activeTab === "region"
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
            {services.map((service, index) => (
              <tr
                key={index}
                className="border-b border-white/5 transition-colors hover:bg-white/3"
              >
                <td className="px-5 text-white/80">{service.name}</td>

                <td className="px-5">{service.aws}</td>

                <td className="px-5">{service.azure}</td>

                <td className="px-5">{service.gcp}</td>

                <td className="px-5">{service.oracle}</td>

                <td className="px-5">{service.ibm}</td>

                <td className="px-5 text-right font-small">
                  {service.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}