import React from "react";

interface BottomNavItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  active?: boolean;
  onClick?: () => void;
}

const BottomNavItem: React.FC<BottomNavItemProps> = ({
  icon: IconComponent,
  active = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex flex-col items-center justify-center py-3 transition-colors ${
        active ? "text-blue-500" : "text-gray-400"
      }`}
    >
      <div className={`p-2 rounded-xl ${active ? "bg-blue-50" : ""}`}>
        <IconComponent className="w-6 h-6" />
      </div>
    </button>
  );
};

export default BottomNavItem;
