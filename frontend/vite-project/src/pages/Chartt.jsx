import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Chartt = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/namaz/missed-per-prayer")
      .then((response) => {
        const responseData = Object.entries(response.data).map(([name, value]) => ({
          name,
          value,
        }));
        setData(responseData);
      });
  }, []);

  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#82ca9d" />
    </BarChart>
  );
};

export default Chartt;
