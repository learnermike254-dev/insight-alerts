import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Globe, ChevronDown, Bell, Calendar, Download, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StatsCards from "@/components/dashboard/StatsCards";
import PageViewsChart from "@/components/dashboard/PageViewsChart";
import { TopPagesTable, ReferrersTable, CountriesTable, DevicesBrowsers } from "@/components/dashboard/AnalyticsTables";
import { sites, realtimeVisitors } from "@/data/mockAnalytics";

const Dashboard = () => {
  const [selectedSite, setSelectedSite] = useState(sites[0]);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Nav */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 font-bold">
              <BarChart3 className="w-5 h-5 text-primary" />
              Pulse
            </Link>

            {/* Site selector */}
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-sm hover:bg-secondary/80 transition-colors">
              <Globe className="w-3.5 h-3.5 text-muted-foreground" />
              {selectedSite.name}
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            {/* Realtime badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary">{realtimeVisitors} online</span>
            </div>

            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bell className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Dashboard content */}
      <main className="container px-6 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold">{selectedSite.name}</h1>
              <p className="text-sm text-muted-foreground mt-1">Analytics overview</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-xs gap-2">
                <Calendar className="w-3.5 h-3.5" />
                Last 14 days
              </Button>
              <Button variant="outline" size="sm" className="text-xs gap-2">
                <Download className="w-3.5 h-3.5" />
                Export
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mb-6">
            <StatsCards />
          </div>

          {/* Chart */}
          <div className="mb-6">
            <PageViewsChart />
          </div>

          {/* Tables grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <TopPagesTable />
            <ReferrersTable />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <CountriesTable />
            <DevicesBrowsers />
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
