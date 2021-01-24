import React from 'react';

export default function BorderVertical(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path className="uim-primary" d="M11,21a.99974.99974,0,0,1-1-1V4a1,1,0,0,1,2,0V20A.99974.99974,0,0,1,11,21Z" />
      <circle cx={7} cy={12} r={1} className="uim-tertiary" />
      <circle cx={3} cy={12} r={1} className="uim-tertiary" />
      <circle cx={15} cy={12} r={1} className="uim-tertiary" />
      <circle cx={19} cy={12} r={1} className="uim-tertiary" />
      <circle cx={7} cy={4} r={1} className="uim-tertiary" />
      <circle cx={3} cy={4} r={1} className="uim-tertiary" />
      <circle cx={15} cy={4} r={1} className="uim-tertiary" />
      <circle cx={19} cy={4} r={1} className="uim-tertiary" />
      <circle cx={19} cy={8} r={1} className="uim-tertiary" />
      <circle cx={19} cy={16} r={1} className="uim-tertiary" />
      <circle cx={3} cy={8} r={1} className="uim-tertiary" />
      <circle cx={3} cy={16} r={1} className="uim-tertiary" />
      <circle cx={7} cy={20} r={1} className="uim-tertiary" />
      <circle cx={3} cy={20} r={1} className="uim-tertiary" />
      <circle cx={15} cy={20} r={1} className="uim-tertiary" />
      <circle cx={19} cy={20} r={1} className="uim-tertiary" />
    </svg>
  );
}
