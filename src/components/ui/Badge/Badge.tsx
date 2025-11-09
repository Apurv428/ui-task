import React from "react";
import { cn } from "../../../utils/cn";

interface BadgeProps {
  variant?: "default" | "success" | "warning" | "error";
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  children,
  className,
}) => {
  const variants = {
    default: "bg-blue-50 text-blue-600",
    success: "bg-green-50 text-green-600",
    warning: "bg-yellow-50 text-yellow-600",
    error: "bg-red-50 text-red-600",
  };

  return (
    <span
      className={cn(
        "px-3 py-2 text-xs font-medium rounded-md inline-block", // changed
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
};
