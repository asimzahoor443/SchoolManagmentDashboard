'use client';
import Image from 'next/image';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 90,
    absent: 10,
  },
  {
    name: 'Tue',
    present: 95,
    absent: 5,
  },
  {
    name: 'Wed',
    present: 98,
    absent: 2,
  },
  {
    name: 'Thu',
    present: 100,
    absent: 0,
  },
  {
    name: 'Fri',
    present: 80,
    absent: 20,
  },
];
const AttendenceCart = () => {
  return (
    <div>
      <div className="">
        <h1>Attendence</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="uv"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendenceCart;
