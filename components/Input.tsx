import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ label, error, icon, className = '', id, ...props }) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`w-full space-y-1.5 ${className}`}>
      <label htmlFor={inputId} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          className={`
            block w-full rounded-lg border 
            ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-primary-500 focus:ring-primary-200'} 
            ${icon ? 'pl-10' : 'pl-4'} 
            pr-4 py-2.5 
            text-slate-900 placeholder-slate-400 
            focus:outline-none focus:ring-4 focus:ring-opacity-20 
            transition duration-200 sm:text-sm
          `}
          {...props}
        />
      </div>
      {error && <p className="text-sm text-red-600 animate-fadeIn">{error}</p>}
    </div>
  );
};