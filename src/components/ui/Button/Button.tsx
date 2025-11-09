import React, { forwardRef } from "react";
import { cn } from "../../../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "icon" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      children,
      disabled,
      loading,
      ...props
    },
    ref,
  ) => {
    const baseStyles = cn(
      "inline-flex items-center justify-center font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none",
      loading && "opacity-50 pointer-events-none",
    );

    const variants = {
      primary: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
      secondary:
        "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300",
      icon: "bg-white text-gray-400 hover:text-gray-600 active:text-gray-800",
      outline:
        "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100",
      ghost:
        "text-gray-500 hover:text-gray-900 hover:bg-gray-50 active:bg-gray-400",
    };

    const sizes = {
      sm: "text-sm px-3 py-1.5 gap-1.5",
      md: "text-sm px-4 py-2 gap-2",
      lg: "text-base px-6 py-3 gap-2",
      icon: "w-10 h-10",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  },
);
