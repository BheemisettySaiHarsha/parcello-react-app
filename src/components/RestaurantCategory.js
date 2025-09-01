import ItemList from "./itemList";

const RestaurantCategory = ({ data, isExpanded, onToggle }) => {
  const itemCount = data?.itemCards?.length || 0;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      {/* Accordion Header */}
      <div 
        className="flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
        onClick={onToggle}
      >
        <div className="flex items-center space-x-3">
          <span className="text-lg font-semibold text-gray-800">
            {data?.title}
          </span>
          <span className="text-gray-500 text-sm bg-gray-200 px-2 py-1 rounded-full">
            {itemCount}
          </span>
        </div>
        <span
          className={`text-gray-600 transform transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>

      {/* Accordion Content */}
      {isExpanded && (
        <div className="border-t border-gray-200">
          <ItemList items={data?.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
