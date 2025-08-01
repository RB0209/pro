import React from "react";

const TimelineTile = ({ data, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold text-blue-600">{data.title}</h3>
      <p className="text-sm text-gray-700 mt-2">{data.description}</p>
      {data.image && (
        <img
          src={data.image}
          alt={`Image for ${data.title}`}
          className="mt-4 w-full h-48 object-cover rounded-lg shadow"
        />
      )}
    </div>
  );
};

export default TimelineTile;
