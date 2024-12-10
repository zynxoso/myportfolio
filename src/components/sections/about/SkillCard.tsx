import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from '../../ui/Card';
import IconBox from '../../ui/IconBox';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SkillCard = ({ icon: Icon, title, description }: SkillCardProps) => {
  return (
    <Card className="p-8" glowEffect>
      <IconBox Icon={Icon} />
      <h3 className="text-xl font-display font-semibold mb-3 text-violet-100">{title}</h3>
      <p className="text-violet-300">{description}</p>
    </Card>
  );
};

export default SkillCard;