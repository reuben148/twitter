import React from 'react';
import Communities from '../components/communities';
import RightSidebar from '../components/rightsidebar';

function CommunitiesPage() {
  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <div className="w-[90%] flex-1 border-r border-gray-300 p-4 overflow-y-auto">
        <Communities />
      </div>
      
      {/* Right Sidebar */}
      <div className="w-[10%] p-4 hidden lg:block">
        <RightSidebar />
      </div>
    </div>
  );
}

export default CommunitiesPage;
