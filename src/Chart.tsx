import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  Legend,
} from "recharts";

export default ({usageData}: {usageData: UsageData[]}) => (
    <AreaChart
      width={1200}
      height={600}
      data={usageData}
      stackOffset="wiggle"
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Legend verticalAlign="top" height={36}/>
      <defs>
        <linearGradient id="versionOne" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#405BFF" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#405BFF" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="versionTwo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#FF386B" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#FF386B" stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="versionOne"
        stroke="#405BFF"
        fillOpacity={1}
        fill="url(#versionOneCallCount)"
      />
      <Area
        type="monotone"
        dataKey="versionTwo"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#versionTwoCallCount)"
      />
      <CartesianGrid stroke="#e6e6e6" strokeDasharray="5 5" />
      <XAxis dataKey="time" name="Time" tickFormatter={(time) => new Date(time).toLocaleString()} />
      <YAxis label="rate" />
      <Tooltip />
    </AreaChart>
);
