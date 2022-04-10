import { BarChart, Bar, ResponsiveContainer, XAxis, Cell } from "recharts";

const colors = ["#FF10F0", "#00DAFF", "#39FF14"];

export const DataVis = (props) => {

  return (
    <ResponsiveContainer width="30%" height="50%">
      <BarChart width={150} height={40} data={props.data}>
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
