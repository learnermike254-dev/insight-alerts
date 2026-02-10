import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { pageViewsData } from "@/data/mockAnalytics";

const PageViewsChart = () => (
  <div className="glass rounded-xl p-6">
    <h3 className="text-sm font-semibold mb-1">Visitors & Page Views</h3>
    <p className="text-xs text-muted-foreground mb-6">Last 14 days</p>
    <div className="h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={pageViewsData}>
          <defs>
            <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(174, 72%, 52%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(174, 72%, 52%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(260, 60%, 60%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(260, 60%, 60%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 16%)" />
          <XAxis dataKey="date" tick={{ fontSize: 12, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(222, 44%, 8%)",
              border: "1px solid hsl(222, 30%, 16%)",
              borderRadius: "8px",
              fontSize: "12px",
            }}
          />
          <Area type="monotone" dataKey="views" stroke="hsl(174, 72%, 52%)" fill="url(#colorViews)" strokeWidth={2} name="Page Views" />
          <Area type="monotone" dataKey="visitors" stroke="hsl(260, 60%, 60%)" fill="url(#colorVisitors)" strokeWidth={2} name="Visitors" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default PageViewsChart;
