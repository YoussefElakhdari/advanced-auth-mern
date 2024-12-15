import { Check, X } from 'lucide-react';
import React from 'react';

const PasswordCriteria = ({ password }) => {
  const criteria = [
    { label: "At least 6 characters", cond: password.length >= 6 },
    { label: "Contains uppercase letters", cond: /[A-Z]/.test(password) },
    { label: "Contains lowercase letters", cond: /[a-z]/.test(password) },
    { label: "Contains a number", cond: /\d/.test(password) },
    { label: "Contains special characters", cond: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <div className='ml-5 mt-2 space-y-1'>
      {criteria.map((item) => (
        <div className='flex items-center text-xs' key={item.label}>
          {item.cond ? (
            <Check className='size-4 text-blue-500 mr-2' />
          ) : (
            <X className='size-4 text-gray-500 mr-2' />
          )}
          <span className={item.cond ? "text-blue-500" : "text-gray-500"}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const PasswordStrengthMeter = ({ password }) => {
  const getStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (pass.match(/[A-Z]/) && pass.match(/[a-z]/)) strength++;
    if (pass.match(/\d/)) strength++;
    if (pass.match(/[^A-Za-z0-9]/)) strength++;
    return strength;
  };

  const strength = getStrength(password);

  const getColor = (strength) => {
    if (strength === 0) return "bg-red-500";
    if (strength === 1) return "bg-red-400";
    if (strength === 2) return "bg-yellow-500";
    if (strength === 3) return "bg-yellow-400";
    return "bg-blue-600";
  };

  const getStrengthText = (strength) => {
    if (strength === 0) return "very weak";
    if (strength === 1) return "weak";
    if (strength === 2) return "fair";
    if (strength === 3) return "good";
    return "Strong";
  };

  return (
    <div className='mt-2'>
      <div className='flex justify-center items-center mb-1'>
        <span className='text-xs text-gray-400 mr-64'>Password Strength</span>
        <span className='text-xs text-gray-400'>{getStrengthText(strength)}</span>
      </div>
      <div className='mx-5 flex space-x-1'>
        {[...Array(4)].map((_, index) => (
          <div 
            key={index}
            className={`h-1 w-1/4 rounded-full transition-colors duration-300 ${
              index < strength ? getColor(strength) : "bg-gray-700"
            }`}
          ></div>
        ))}
      </div>
      <PasswordCriteria password={password} />
    </div>
  );
};

export default PasswordStrengthMeter;
