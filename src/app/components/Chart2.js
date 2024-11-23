"use client";
import React from "react";
import { BarChart, Bar, Tooltip, Legend, ResponsiveContainer } from "recharts";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { FaAngleDown } from "react-icons/fa";

const data = [
  { name: "X-ray", revenue: 30000, fill: "#4C6B8C" },
  { name: "Laboratory", revenue: 20000, fill: "#F4A300" },
  { name: "Ultrasound", revenue: 25000, fill: "#38B2AC" },
  { name: "Pharmacy", revenue: 50000, fill: "#8884d8" },
  { name: "CT Scan", revenue: 30000, fill: "#FF6347" },
];

const numberFormatter = new Intl.NumberFormat("en-US");

export default function Chart2() {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["This week"])
  );
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="mb-2 flex justify-between items-center">
        <h2 className="text-lg font-semibold capitalize">
          revenue generated {selectedValue}
        </h2>
        <div className="relative inline-block text-right">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="capitalize border-2 hover:border-[#B5D3F3] transition-all duration-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-0 flex items-center"
              >
                {selectedValue}
                <FaAngleDown className="ml-2" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
              className="mt-2 w-56 rounded-lg shadow-lg bg-white ring-1 ring-gray-300"
            >
              <DropdownItem
                key="This Week"
                className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-[#B5D3F3] focus:text-gray-800  rounded-lg transition-all duration-200"
              >
                This Week
              </DropdownItem>
              <DropdownItem
                key="Last Week"
                className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-[#B5D3F3] focus:text-gray-800  rounded-lg transition-all duration-200"
              >
                Last Week
              </DropdownItem>
              <DropdownItem
                key="2 Weeks Ago"
                className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-[#B5D3F3] focus:text-gray-800  rounded-lg transition-all duration-200"
              >
                2 Weeks Ago
              </DropdownItem>
              <DropdownItem
                key="3 Weeks Ago"
                className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-[#B5D3F3] focus:text-gray-800  rounded-lg transition-all duration-200"
              >
                3 Weeks Ago
              </DropdownItem>
              <DropdownItem
                key="4 Weeks Ago"
                className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-[#B5D3F3] focus:text-gray-800  rounded-lg transition-all duration-200"
              >
                4 Weeks Ago
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <ResponsiveContainer>
        <BarChart data={data}>
          <Tooltip
            content={({ payload }) => {
              if (payload && payload.length) {
                const { name, revenue } = payload[0].payload;
                return (
                  <div
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "10px",
                      fontSize: "12px",
                    }}
                  >
                    <p>{`Service: ${name}`}</p>
                    <p>{`Revenue: ₱${numberFormatter.format(revenue)}`}</p>
                  </div>
                );
              }
              return null;
            }}
          />

          <Bar dataKey="revenue" barSize={35} isAnimationActive={true} />

          <Legend
            payload={data.map((entry) => ({
              id: entry.name,
              type: "square",
              value: `${entry.name}: ₱${numberFormatter.format(entry.revenue)}`,
              color: entry.fill,
            }))}
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              paddingTop: 20,
              paddingBottom: 4,
              fontSize: 15,
              gap: 20,
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
