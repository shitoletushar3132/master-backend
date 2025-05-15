import React from "react";

interface StatCardProps {
  title: string;
  value: number | string;
  color: string; // Tailwind background color, e.g., "bg-blue-500"
  percentage?: string; // Optional, without "%" sign
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  color,
  percentage,
}) => {
  return (
    <div
      className={`flex justify-between pl-2 rounded-xl shadow-md min-w-[150px] ${color} text-white`}
    >
      <div className="p-2">
        <h3 className="text-lg font-semibold whitespace-nowrap">{title}</h3>
        {percentage !== undefined && (
          <p className="text-sm opacity-75">{percentage}</p>
        )}
      </div>
      <div className="flex items-center justify-center bg-white rounded-xl p-2 text-center text-gray-900 font-bold text-lg min-w-24 whitespace-nowra">
        {value}
      </div>
    </div>
  );
};

export default StatCard;
