import React from "react";

interface TabButtonProps {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ active = false, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
        active
          ? "bg-white text-black shadow-lg"
          : "bg-transparent text-gray-400 hover:text-gray-600"
      }`}
    >
      {children}
    </button>
  );
};

export default TabButton;
