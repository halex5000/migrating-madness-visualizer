import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
const data = [
  { name: "Page A", uv: 100, pv: 3000, amt: 1500 },
  { name: "Page B", uv: 200, pv: 2300, amt: 1300 },
  { name: "Page C", uv: 100, pv: 3000, amt: 1500 },
  { name: "Page D", uv: 400, pv: 2100, amt: 1300 },
  { name: "Page E", uv: 100, pv: 3000, amt: 1500 },
  { name: "Page F", uv: 600, pv: 1900, amt: 1300 },
  { name: "Page G", uv: 100, pv: 3000, amt: 1500 },
  { name: "Page H", uv: 1200, pv: 1700, amt: 1300 },
];

export default () => (
    <AreaChart
      width={800}
      height={500}
      data={data}
      stackOffset="wiggle"
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#405BFF" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#405BFF" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#FF386B" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#FF386B" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#A34FD3" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#A34FD3" stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#405BFF"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
      <Area
        type="monotone"
        dataKey="amt"
        stroke="#A34FD3"
        fillOpacity={1}
        fill="url(#colorAmt)"
      />
      <CartesianGrid stroke="#e6e6e6" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis label="rate" />
      <Tooltip />
    </AreaChart>
);
