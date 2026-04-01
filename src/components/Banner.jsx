import { FaPlayCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-full bg-white px-4">
      <div className="max-w-[1280px] mx-auto mt-10 md:mt-16 lg:mt-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 space-y-5 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-xs sm:text-sm font-medium text-purple-600 ring-1 ring-inset ring-purple-200">
              <span className="mr-2 h-2 w-2 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] animate-pulse"></span>
              New: AI-Powered Tools Available
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
              Supercharge Your <br />
              <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                Digital Workflow
              </span>
            </h1>

            <p className="max-w-md mx-auto lg:mx-0 text-base sm:text-lg text-slate-500 leading-relaxed">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-3">
              <button className="rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-6 sm:px-8 py-3 sm:py-4 text-sm font-bold text-white transition hover:opacity-90 shadow-lg">
                Explore Products
              </button>

              <div className="group relative p-[2px] rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
                <button className="flex items-center gap-2 rounded-full bg-white px-6 sm:px-8 py-3 sm:py-[14px] transition group-hover:bg-transparent">
                  <FaPlayCircle
                    size={18}
                    className="text-[#4F39F6] group-hover:text-white transition"
                  />
                  <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-sm font-bold group-hover:text-white">
                    Watch Demo
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full order-1 lg:order-2">
            <div className="relative mx-auto max-w-[400px] sm:max-w-[500px] lg:max-w-full">
              <img
                src="/src/assets/banner.png"
                alt="Digital Workflow Visualization"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
