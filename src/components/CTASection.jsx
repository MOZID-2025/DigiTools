import React from "react";

const CTASection = () => {
  return (
    <div className="relative w-full py-20 px-6 flex flex-col items-center justify-center text-center text-white overflow-hidden bg-gradient-to-r from-[#7C3AED] to-[#9333EA]">
      {/* Content Container */}
      <div className="max-w-4xl mx-auto z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="px-8 py-3 bg-white text-[#7B3FE4] font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg">
            Explore Products
          </button>

          <button className="px-8 py-3 bg-transparent border-2 border-white/60 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
            View Pricing
          </button>
        </div>

        {/* Trust Badges / Info */}
        <div className="flex flex-wrap justify-center gap-2 text-sm text-purple-200/80">
          <span>14-day free trial</span>
          <span className="hidden sm:inline">•</span>
          <span>No credit card required</span>
          <span className="hidden sm:inline">•</span>
          <span>Cancel anytime</span>
        </div>
      </div>

      {/* Optional: Background Glow/Mesh effect to match the vibrant UI */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-500 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
};

export default CTASection;
