import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  
  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-5 m-4 max-w-80 shadow-lg transition-all duration-300 text-center hover:-translate-y-1 hover:shadow-xl hover:border-primary">
      <h1 className="text-2xl text-gray-800 mb-2">Count: {count}</h1>
      <h2 className="text-xl text-gray-700 mb-1.5">Name: {props.name}</h2>
      <h3 className="text-base text-gray-600 mb-3">Location</h3>
    </div>
  );
};

export default User;
