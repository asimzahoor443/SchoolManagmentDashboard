import AttendenceCart from '@/components/AttendenceCart';
import CountChart from '@/components/CountChart';
import UserCart from '@/components/UserCart';

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left Side */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* User Card */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCart type="student" />
          <UserCart type="teacher" />
          <UserCart type="parent" />
          <UserCart type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTENDENCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendenceCart />
          </div>
        </div>
        {/* BOTTOM CHARTS */}
        <div className="w-full h-[500px]"></div>
      </div>
      {/* Left Side */}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
};
export default AdminPage;
