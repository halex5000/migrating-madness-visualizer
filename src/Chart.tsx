import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  Legend,
  Label,
} from "recharts";

const parseTime = (date: number) => {
  const time = new Date(date);
  return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
};

export default ({ usageData }: { usageData: UsageData[] }) => (
  <AreaChart
    width={1100}
    height={700}
    data={usageData}
    stackOffset="wiggle"
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    
  >
    <Legend
      verticalAlign="middle"
      height={36}
      align="right"
      layout="vertical"
    />
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
      strokeWidth={2}
      fillOpacity={1}
      fill="url(#versionOne)"
      dot={true}
    />
    <Area
      type="monotone"
      dataKey="versionTwo"
      strokeWidth={2}
      stroke="#FF386B"
      fillOpacity={11}
      fill="url(#versionTwo)"
      dot={true}
    />
    <CartesianGrid stroke="#e6e6e6" strokeDasharray="5 5" />
    <XAxis dataKey="time" name="Time" tickFormatter={parseTime}>
    </XAxis>
    <YAxis>
    </YAxis>
    <Tooltip />
  </AreaChart>
);
