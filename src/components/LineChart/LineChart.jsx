import { LineChart as LC, Line, Tooltip, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const studentMarksData = [
    { id: 1, student: "Tom", math: 85, physics: 78, chemistry: 90 },
    { id: 2, student: "Jack", math: 75, physics: 82, chemistry: 85 },
    { id: 3, student: "Mack", math: 90, physics: 88, chemistry: 92 },
    { id: 4, student: "Bob", math: 80, physics: 75, chemistry: 78 },
    { id: 5, student: "Jenny", math: 65, physics: 70, chemistry: 68 },
    { id: 6, student: "Miko", math: 70, physics: 65, chemistry: 72 },
    { id: 7, student: "Stphin", math: 88, physics: 90, chemistry: 85 },
    { id: 8, student: "Mario", math: 92, physics: 85, chemistry: 88 },
    { id: 9, student: "Maria", math: 78, physics: 80, chemistry: 75 },
    { id: 10, student: "David", math: 83, physics: 75, chemistry: 80 },
  ];

  return (
    <div>
      <LC width={900} height={400} data={studentMarksData}>
        <XAxis dataKey="student" />
        <YAxis />
        <Line type={"monotone"} dataKey="math" stroke="#8884d8"></Line>
        <Line type={"monotone"} dataKey="physics" stroke="red"></Line>
        <Line type={"monotone"} dataKey="chemistry" stroke="yellow"></Line>
        <Tooltip></Tooltip>
      </LC>
    </div>
  );
};

export default LineChart;
