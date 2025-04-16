import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { time: "10:00", people: 1200 },
  { time: "11:00", people: 1800 },
  { time: "12:00", people: 2500 },
  { time: "13:00", people: 3100 },
  { time: "14:00", people: 2800 },
];

const CrowdGraph = () => {
  return (
    <div className="bg-blue-800 p-6  rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Crowd Count Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="people" stroke="#fb923c" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CrowdGraph;
