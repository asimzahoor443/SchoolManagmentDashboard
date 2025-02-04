import UserCart from '@/components/UserCart';

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left Side */}
      <div className="w-full lg:w-2/3">
        {/* User Card */}
        <div className="flex gap-4 justify-between">
          <UserCart type="student" />
          <UserCart type="teacher" />
          <UserCart type="parent" />
          <UserCart type="staff" />
        </div>
      </div>
      {/* Left Side */}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
};
export default AdminPage;
