import * as Icons from 'lucide-react';
import type { Stat } from '../campaign-list/types';
import React from 'react';
import { motion } from 'motion/react';

interface StatCardProps {
  stat: Stat;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index }) => {
  // @ts-ignore - Dynamic icon component
  const Icon = Icons[stat.icon as keyof typeof Icons] as React.ElementType;

  if (!Icon) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-surface-dark p-6 rounded-xl border border-[#3b3267] shadow-sm"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 bg-primary/10 ${stat.color} rounded-lg`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className={`${
          stat.trend === 'up' ? 'text-emerald-500 bg-emerald-500/10' : 'text-rose-500 bg-rose-500/10'
        } text-xs font-bold px-2 py-1 rounded`} title={stat.change}>
          {stat.change}
        </span>
      </div>
      <p className="text-text-muted text-xs font-medium uppercase tracking-wider">{stat.label}</p>
      <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
    </motion.div>
  );
};

export default StatCard;
