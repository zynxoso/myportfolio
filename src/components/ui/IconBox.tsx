import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconBoxProps {
  Icon: LucideIcon;
  size?: number;
}

const IconBox = ({ Icon, size = 28 }: IconBoxProps) => {
  return (
    <div className="w-14 h-14 bg-violet-900/50 rounded-lg flex items-center justify-center mb-6">
      <Icon className="text-violet-400" size={size} />
    </div>
  );
};

export default IconBox;