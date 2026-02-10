import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Shield, Zap, Globe, Bell, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    {/* Grid background */}
    <div className="absolute inset-0 grid-pattern opacity-40" />
    <div className="absolute inset-0 hero-gradient" />
    
    {/* Glow orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-chart-2/10 rounded-full blur-[100px]" />

    <div className="container relative z-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
          <Zap className="w-3.5 h-3.5" />
          Privacy-first analytics. No cookies.
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Know your audience.
          <br />
          <span className="text-gradient">Respect their privacy.</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Simple, fast, GDPR-friendly website analytics. One script tag. Real-time insights. 
          WhatsApp alerts when it matters. Self-host or use our cloud.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/dashboard">
            <Button size="lg" className="text-base px-8 h-12 glow font-semibold">
              Start Free <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="text-base px-8 h-12 font-semibold">
            View Demo
          </Button>
        </div>

        {/* Code snippet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-14 max-w-xl mx-auto"
        >
          <div className="glass rounded-xl p-4 text-left">
            <div className="flex items-center gap-2 mb-3">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground font-mono">One line. That's it.</span>
            </div>
            <code className="text-sm font-mono text-primary/90 block overflow-x-auto">
              {'<script src="https://pulse.sh/t.js" data-site="YOUR_ID"></script>'}
            </code>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const features = [
  { icon: BarChart3, title: "Real-time Dashboard", desc: "See visitors as they happen. Page views, referrers, devices, countries — all in one glance." },
  { icon: Shield, title: "Privacy-First", desc: "No cookies, no fingerprinting, GDPR compliant out of the box. Your users' data stays theirs." },
  { icon: Zap, title: "Lightweight Script", desc: "Under 5KB. Loads in milliseconds. Zero impact on your site performance or Core Web Vitals." },
  { icon: Bell, title: "WhatsApp Alerts", desc: "Get traffic spikes, daily summaries, and downtime alerts straight to your WhatsApp." },
  { icon: Globe, title: "Self-Host or Cloud", desc: "Run it on your own server with Docker, or let us handle everything in our managed cloud." },
  { icon: Code, title: "Developer Friendly", desc: "REST API, CSV exports, webhook integrations. Built for developers who ship fast." },
];

const Features = () => (
  <section className="py-24 relative">
    <div className="container px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything you need. Nothing you don't.</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">Built for speed, designed for clarity, engineered for privacy.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 hover:border-primary/30 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const plans = [
  { name: "Free", price: "$0", period: "/mo", features: ["1 website", "7 days retention", "5K pageviews/mo", "Basic dashboard"], cta: "Get Started" },
  { name: "Pro", price: "$9", period: "/mo", features: ["10 websites", "90 days retention", "100K pageviews/mo", "WhatsApp alerts", "CSV exports"], cta: "Start Pro Trial", popular: true },
  { name: "Business", price: "$29", period: "/mo", features: ["Unlimited websites", "1 year retention", "Unlimited pageviews", "Real-time alerts", "API access", "Priority support"], cta: "Contact Sales" },
];

const Pricing = () => (
  <section className="py-24 relative">
    <div className="container px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, honest pricing</h2>
        <p className="text-muted-foreground text-lg">No hidden fees. Cancel anytime. Self-host for free, forever.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass rounded-xl p-6 flex flex-col ${plan.popular ? 'border-primary/50 glow' : ''}`}
          >
            {plan.popular && (
              <span className="text-xs font-semibold text-primary mb-2">MOST POPULAR</span>
            )}
            <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-muted-foreground text-sm">{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map(f => (
                <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant={plan.popular ? "default" : "outline"} className="w-full font-semibold">
              {plan.cta}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border/50 py-12">
    <div className="container px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 font-bold text-lg">
        <BarChart3 className="w-5 h-5 text-primary" />
        Pulse
      </div>
      <p className="text-sm text-muted-foreground">© 2026 Pulse Analytics. Privacy-first, always.</p>
    </div>
  </footer>
);

const LandingPage = () => (
  <div className="min-h-screen bg-background">
    {/* Nav */}
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="container px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <BarChart3 className="w-5 h-5 text-primary" />
          Pulse
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#docs" className="hover:text-foreground transition-colors">Docs</a>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm">Log in</Button>
          </Link>
          <Link to="/dashboard">
            <Button size="sm" className="font-semibold">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>

    <Hero />
    <Features />
    <Pricing />
    <Footer />
  </div>
);

export default LandingPage;
