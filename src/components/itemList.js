import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item))
    //what ever we pass in addItem() that will go to
    //  reducer function action and that too inside
    //  payload


  };

  return (
    <div className="divide-y divide-gray-100">
      {items?.map((item, index) => {
        const itemInfo = item?.card?.info;

        return (
          <div  key={`${itemInfo?.id}-${index}`}  className="p-5 hover:bg-gray-50 transition-colors duration-200">
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  {itemInfo?.name}
                </h4>
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  ₹{itemInfo?.price 
                    ? itemInfo.price / 100 
                    : itemInfo?.defaultPrice / 100}
                </p>
                {itemInfo?.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {itemInfo.description}
                  </p>
                )}
              </div>
              
              {itemInfo?.imageId && (
                <div className="relative flex-shrink-0">
                  <img
                    src={CDN_URL + itemInfo?.imageId}
                    alt={itemInfo?.name}
                    className="w-32 h-24 object-cover rounded-lg shadow-md"
                  />
                  <button className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white border-2 border-gray-300 text-green-600 font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-200 text-sm "
                  onClick={()=>{handleAddItem(item)}}>
                    ADD
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
