import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
  className?: string;
  bgColor?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  fallback,
  className = '',
  bgColor = 'bg-blue-500',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-20 h-20',
  };

  const sizePx = {
    sm: 32,
    md: 40,
    lg: 48,
    xl: 80,
  };

  if (!src && fallback === 'C') {
    const svgSize = sizePx[size];
    const bgColors: Record<string, string> = {
      'bg-blue-500': '#3b82f6',
      'bg-purple-500': '#a855f7',
      'bg-green-500': '#22c55e',
      'bg-orange-500': '#f97316',
    };

    return (
      <div className={`${sizeClasses[size]} ${className}`}>
        <svg
          width={svgSize}
          height={svgSize}
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="80" height="80" rx="20" fill={bgColors[bgColor] || '#3b82f6'} />
          
          <path
            d="M 50 18 A 22 22 0 0 0 50 62"
            stroke="white"
            strokeWidth="13"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    );
  }

  if (!src) {
    return (
      <div
        className={`rounded-3xl flex items-center justify-center text-white font-bold text-2xl ${sizeClasses[size]} ${bgColor} ${className}`}
      >
        {fallback?.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-3xl object-cover ${sizeClasses[size]} ${className}`}
    />
  );
};