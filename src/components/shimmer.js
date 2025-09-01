// components/shimmer.js
const Shimmer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg h-80">
              <div className="h-44 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded animate-pulse"></div>
                <div className="h-3 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded animate-pulse w-3/4"></div>
                <div className="flex justify-between pt-2">
                  <div className="h-3 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded animate-pulse w-16"></div>
                  <div className="h-3 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded animate-pulse w-20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
