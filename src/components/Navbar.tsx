import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search Bar */}
      <div className="hidden md:flex">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input type="text" placeholder="Search..." />
      </div>
      {/* Icons And Users */}
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/announcement.png" alt="" width={20} height={20} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Asim Awan</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image src="/avatar.png" alt="" />
      </div>

      {/* Search Bar */}
    </div>
  );
};

export default Navbar;
