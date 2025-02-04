import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/namaz/missed", {
        params: {
          startDate: "2024-01-01",
          endDate: "2025-02-01",
          missedCount: 30,
        },
      })
      .then((response) => {
        const { completedPrayers, missedPrayers } = response.data;
        setData([
          { name: "Completed Prayers", value: completedPrayers },
          { name: "Missed Prayers", value: missedPrayers },
        ]);
      });
  }, []);

  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={120}
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default Chart;