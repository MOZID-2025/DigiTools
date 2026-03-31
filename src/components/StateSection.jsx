import React from "react";

const StateSection = () => {
  return (
    <div className="w-full bg-white py-10">
      <div className="bg-gradient-to-r from-[#6039F6] to-[#A31CFB] py-12 shadow-2xl  px-4 lg:px-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1280px] mx-auto">
          {/* 50K+ Active Users */}
          <div className="flex flex-col items-center justify-center py-6 md:border-r border-white/20">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
              50K+
            </h2>
            <p className="mt-2 text-lg font-medium text-white/80">
              Active Users
            </p>
          </div>

          {/* 200+ Premium Tools */}
          <div className="flex flex-col items-center justify-center py-6 md:border-r border-white/20">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
              200+
            </h2>
            <p className="mt-2 text-lg font-medium text-white/80">
              Premium Tools
            </p>
          </div>

          {/* 4.9 Rating */}
          <div className="flex flex-col items-center justify-center py-6">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
              4.9
            </h2>
            <p className="mt-2 text-lg font-medium text-white/80">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateSection;
