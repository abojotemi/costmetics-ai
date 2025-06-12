import React from "react";
import { FaBrain, FaCamera } from "react-icons/fa6";
import { FaExclamationCircle } from "react-icons/fa";
const DashboardWork = () => {
  return (
    <div className="py-10">
      <h2 className="text-center text-4xl font-bold">How GlowScan Works</h2>
      <h3 className="text-center text-xl text-gray-600 mt-4 mb-8 p-1 max-w-90 mx-auto">
        Our advanced AI technology analyzes your skin to provide personalized
        recommendations
      </h3>
      <div className="w-full grid md:grid-cols-3 gap-5 p-3 md:px-20">
        <div className="p-8 flex flex-col items-center space-y-4">
          <div className="p-6 bg-primary/20 rounded-full">
            <FaCamera className="text-primary size-7" />
          </div>
          <h3 className="text-2xl font-semibold tracking-wide">1. Capture</h3>
          <p className="text-center max-w-90 text-gray-600">
            Take a quick photo or upload an existing image of your face. Our AI
            guides you for optimal results.
          </p>
        </div>
        <div className="p-8 flex flex-col items-center space-y-4">
          <div className="p-6 bg-primary/20 rounded-full">
            <FaBrain className="text-primary size-7" />
          </div>
          <h3 className="text-2xl font-semibold tracking-wide">2. Analyze</h3>
          <p className="text-center max-w-90 text-gray-600">
            Advanced AI algorithms analyze your skin type, texture, tone, and
            identify specific concerns.
          </p>
        </div>
        <div className="p-8 flex flex-col items-center space-y-4">
          <div className="p-6 bg-primary/20 rounded-full">
            <FaExclamationCircle className="text-primary size-7" />
          </div>
          <h3 className="text-2xl font-semibold tracking-wide">3. Recommend</h3>
          <p className="text-center max-w-90 text-gray-600">
            Receive personalized product recommendations tailored to your unique
            skin profile and goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardWork;
