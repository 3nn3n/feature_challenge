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
    <div className="mx-3 w-[60vw] max-w-4xl rounded-3xl border border-white/10 bg-[#d375d8] p-6 text-white shadow-2xl">
      {/* Header */}
      <div className=" flex items-center justify-between">
        <h2 className="text-md font-semibold tracking-tight">
          Resource Distribution
        </h2>

        {/* Tabs */}
        <div className="flex rounded-md border border-white/10 bg-[#0b1f3d]">
          <button
            onClick={() => setActiveTab("service")}
            className={`rounded-xl px-5 text-sm transition-all ${
              activeTab === "service"
                ? "bg-[#17345f] text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            By Service
          </button>

          <button
            onClick={() => setActiveTab("region")}
            className={`rounded-xl px-5 text-sm transition-all ${
              activeTab === "region"
                ? "bg-[#17345f] text-white"
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
          <thead className="bg-white/[0.02]">
            <tr className="border-b border-white/10 text-left text-sm">
              <th className="px-5 font-small text-white/60">Service</th>

              <th className="px-5 py-4 font-small text-[#9e8561]">AWS</th>

              <th className="px-5 py-4 font-small text-[#4d6377]">Azure</th>

              <th className="px-5 py-4 font-small text-[#638266]">GCP</th>

              <th className="px-5 py-4 font-small text-[#775d5b]">
                Oracle
              </th>

              <th className="px-5 py-4 font-small text-[#7f6797]">IBM</th>

              <th className="px-5 py-4 font-small text-right text-white/60">
                Total
              </th>
            </tr>
          </thead>

          <tbody>
            {services.map((service, index) => (
              <tr
                key={index}
                className="border-b border-white/5 transition-colors hover:bg-white/[0.03]"
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