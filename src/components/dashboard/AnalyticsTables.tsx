import { topPages, referrers, countries, devices, browsers } from "@/data/mockAnalytics";

const ProgressBar = ({ percentage, color = "bg-primary" }: { percentage: number; color?: string }) => (
  <div className="w-full h-1.5 rounded-full bg-muted">
    <div className={`h-full rounded-full ${color}`} style={{ width: `${percentage}%` }} />
  </div>
);

export const TopPagesTable = () => (
  <div className="glass rounded-xl p-6">
    <h3 className="text-sm font-semibold mb-4">Top Pages</h3>
    <div className="space-y-4">
      {topPages.map(page => (
        <div key={page.path}>
          <div className="flex items-center justify-between text-sm mb-1.5">
            <span className="font-mono text-xs truncate max-w-[60%]">{page.path}</span>
            <span className="text-muted-foreground text-xs">{page.views.toLocaleString()}</span>
          </div>
          <ProgressBar percentage={page.percentage * 3} />
        </div>
      ))}
    </div>
  </div>
);

export const ReferrersTable = () => (
  <div className="glass rounded-xl p-6">
    <h3 className="text-sm font-semibold mb-4">Referrers</h3>
    <div className="space-y-4">
      {referrers.map(ref => (
        <div key={ref.source}>
          <div className="flex items-center justify-between text-sm mb-1.5">
            <span className="text-xs">{ref.source}</span>
            <span className="text-muted-foreground text-xs">{ref.visitors.toLocaleString()}</span>
          </div>
          <ProgressBar percentage={ref.percentage * 2.5} />
        </div>
      ))}
    </div>
  </div>
);

export const CountriesTable = () => (
  <div className="glass rounded-xl p-6">
    <h3 className="text-sm font-semibold mb-4">Countries</h3>
    <div className="space-y-3">
      {countries.map(c => (
        <div key={c.country} className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="text-base">{c.flag}</span>
            <span className="text-xs">{c.country}</span>
          </div>
          <span className="text-muted-foreground text-xs font-mono">{c.visitors.toLocaleString()}</span>
        </div>
      ))}
    </div>
  </div>
);

export const DevicesBrowsers = () => (
  <div className="glass rounded-xl p-6">
    <h3 className="text-sm font-semibold mb-4">Devices & Browsers</h3>
    <div className="space-y-4">
      <div>
        <p className="text-xs text-muted-foreground mb-2">Devices</p>
        <div className="flex gap-2">
          {devices.map(d => (
            <div key={d.name} className="flex-1 bg-muted rounded-lg p-3 text-center">
              <div className="text-lg font-bold">{d.value}%</div>
              <div className="text-xs text-muted-foreground">{d.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-2">Browsers</p>
        <div className="space-y-2">
          {browsers.map(b => (
            <div key={b.name} className="flex items-center justify-between text-xs">
              <span>{b.name}</span>
              <span className="text-muted-foreground font-mono">{b.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
