import { useState, useEffect } from 'react';
import RecentServices from './RecentServices';
import OurWorkProof from './OurWorkProof';

const SalesPromotion = () => {
  const [timeLeft, setTimeLeft] = useState(48 * 60 * 60); // 48 hours countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = seconds => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}h ${mins}m ${secs}s`;
  };

  return (
    <div className="bg-gray-900">
      <div className="container mx-auto px-4 py-10  ">
        <h1 className=" lg:text-4xl text-2xl font-bold text-center bg-slate-700 w-1/2 mx-auto rounded-lg p-4  text-white mb-10">
          {' '}
          Our Flash Offers
        </h1>
        {/* Flash Sale Section */}
        <div className="bg-red-500 text-white text-center py-4 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold">🔥 48-Hour Flash Sale! 🔥</h2>
          <p className="text-lg mt-2">Up to 50% Off on Modern Home Decor</p>
          <p className="text-xl font-semibold mt-2">
            ⏳ {formatTime(timeLeft)}
          </p>
          <button className="mt-4 bg-white text-red-500 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200">
            Shop Now
          </button>
        </div>

        {/* Bundle Deals Section */}
        <div className="bg-blue-500 text-white text-center py-4 rounded-xl shadow-lg mt-6">
          <h2 className="text-2xl font-bold">🎁 Special Bundle Deals</h2>
          <p className="text-lg mt-2">Buy 3 or more items & get 30% Off!</p>
          <button className="mt-4 bg-white text-blue-500 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200">
            Grab the Deal
          </button>
        </div>

        {/* Referral Discount */}
        <div className="bg-green-500 text-white text-center py-4 rounded-xl shadow-lg mt-6">
          <h2 className="text-2xl font-bold">👫 Refer & Earn!</h2>
          <p className="text-lg mt-2">
            Refer a friend & get $10 off your next order!
          </p>
          <button className="mt-4 bg-white text-green-500 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200">
            Refer Now
          </button>
        </div>
      </div>

      <RecentServices></RecentServices>
      <OurWorkProof></OurWorkProof>
    </div>
  );
};

export default SalesPromotion;
