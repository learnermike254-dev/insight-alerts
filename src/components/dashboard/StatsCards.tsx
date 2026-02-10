import { motion } from "framer-motion";
import { ArrowUp, ArrowDown, Eye, Users, Timer, TrendingDown } from "lucide-react";
import { overviewStats } from "@/data/mockAnalytics";

const stats = [
  { label: "Page Views", value: overviewStats.pageViews.toLocaleString(), change: overviewStats.pageViewsChange, icon: Eye },
  { label: "Unique Visitors", value: overviewStats.uniqueVisitors.toLocaleString(), change: overviewStats.visitorsChange, icon: Users },
  { label: "Bounce Rate", value: `${overviewStats.bounceRate}%`, change: overviewStats.bounceRateChange, icon: TrendingDown },
  { label: "Avg. Duration", value: overviewStats.avgDuration, change: overviewStats.durationChange, icon: Timer },
];

const StatsCards = () => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
    {stats.map((stat, i) => (
      <motion.div
        key={stat.label}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.05 }}
        className="glass rounded-xl p-5"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-muted-foreground">{stat.label}</span>
          <stat.icon className="w-4 h-4 text-muted-foreground" />
        </div>
        <div className="text-2xl font-bold mb-1">{stat.value}</div>
        <div className={`flex items-center gap-1 text-xs font-medium ${stat.change >= 0 ? 'text-primary' : 'text-destructive'}`}>
          {stat.change >= 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
          {Math.abs(stat.change)}% vs last period
        </div>
      </motion.div>
    ))}
  </div>
);

export default StatsCards;
