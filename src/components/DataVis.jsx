import { useState } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, Cell } from "recharts";

const colors = ["#FF10F0", "#00DAFF", "#39FF14"];

export const DataVis = () => {
  const [data, setData] = useState([
    {
      name: "Valence",
      value: 0.8,
    },
    {
      name: "Arousal",
      value: 0.6,
    },
    {
      name: "Dominance",
      value: 0.8,
    },
  ]);
  return (
    <ResponsiveContainer width="30%" height="50%">
      <BarChart width={150} height={40} data={data}>
        <XAxis dataKey="name" stroke="#f2f2f2" />
        <Bar dataKey="value">
          <Cell key={1} fill={colors[0]} />
          <Cell key={2} fill={colors[1]} />
          <Cell key={3} fill={colors[2]} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
