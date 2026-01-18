import { Server } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-cyan-400">
                <Server className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">
                Hycroe<span className="text-primary">Node</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Reliable compute infrastructure for modern applications. Deploy with confidence.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-foreground">VPS Hosting</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Dedicated Servers</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Object Storage</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Load Balancers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-foreground">About Us</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Blog</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Careers</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-foreground">Documentation</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Status Page</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Help Center</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Community</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© 2024 HycroeNode. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-foreground">SLA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
