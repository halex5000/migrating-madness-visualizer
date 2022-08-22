import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Legend,
  ComposedChart,
  Line,
} from "recharts";

const parseTime = (date: number) => {
  const time = new Date(date);
  const minutes = time.getMinutes();
  return `${time.getHours()}:${minutes < 10 ? '0' : minutes}:${time.getSeconds()}`;
};

const tickFormatter = (date: number) => {
  const time = new Date(date);
  return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
};

export default ({ usageData }: { usageData: UsageData[] }) => (
  <ComposedChart
    width={1100}
    height={700}
    data={usageData}
    stackOffset="expand"
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    
  >
    <Legend
      verticalAlign="middle"
      height={36}
      align="right"
      layout="vertical"
    />
    <Area
      type="monotone"
      stackId="1"
      dataKey="versionOne"
      stroke="#405BFF"
      strokeWidth={2}
      fill="#405BFF"
    />
    <Area
      type="monotone"
      stackId="1"
      dataKey="versionTwo"
      strokeWidth={2}
      stroke="#FF386B"
      fill="#FF386B"
    />
    <Line type="monotone" dataKey="versionOneAverage" stroke="#A34FDE"  strokeWidth={2}/>
    <Line type="monotone" dataKey="versionTwoAverage" stroke="#3DD6F5"  strokeWidth={2}/>
    <CartesianGrid stroke="#e6e6e6" strokeDasharray="5 5" />
    <XAxis dataKey="time" name="Time" tickFormatter={tickFormatter}>
    </XAxis>
    <YAxis>
    </YAxis>
    <Tooltip labelFormatter={tickFormatter} />
  </ComposedChart>
);
