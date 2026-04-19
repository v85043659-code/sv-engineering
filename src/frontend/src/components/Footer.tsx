import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "917506484351";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer className="bg-card border-t border-border">
      {/* Contact bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-display font-semibold text-sm tracking-wide">
            Need help? Contact us directly
          </p>
          <div className="flex items-center gap-4">
            <a
              href="tel:7506484351"
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-200 text-sm font-body"
              data-ocid="footer.phone_link"
            >
              <Phone className="w-4 h-4" />
              <span>7506484351</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary-foreground/15 hover:bg-primary-foreground/25 px-3 py-1.5 rounded-full transition-colors duration-200 text-sm font-body font-medium"
              data-ocid="footer.whatsapp_link"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xs">
                  SV
                </span>
              </div>
              <p className="font-display font-semibold text-foreground">
                SV Engineering
              </p>
            </div>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Trusted supplier of pneumatic and automation components since
              2021. Genuine products from leading brands.
            </p>
          </div>

          {/* Products */}
          <div>
            <p className="font-display font-semibold text-foreground text-sm mb-3 uppercase tracking-wider">
              Products
            </p>
            <ul className="space-y-2">
              {[
                { label: "Pneumatic Cylinders", slug: "pneumatic-cylinders" },
                { label: "Solenoid Valves", slug: "solenoid-valves" },
                { label: "Pneumatic Fittings", slug: "pneumatic-fittings" },
                { label: "Pneumatic Tubing", slug: "pneumatic-tubing" },
                { label: "FRL Units", slug: "frl-units" },
              ].map((item) => (
                <li key={item.slug}>
                  <Link
                    to="/products"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-body"
                    data-ocid={`footer.products_${item.slug.replace(/-/g, "_")}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-display font-semibold text-foreground text-sm mb-3 uppercase tracking-wider">
              Company
            </p>
            <ul className="space-y-2">
              {[
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Contact", to: "/contact" },
                { label: "Request a Quote", to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-body"
                    data-ocid={`footer.nav_${item.label.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display font-semibold text-foreground text-sm mb-3 uppercase tracking-wider">
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a
                  href="tel:7506484351"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  7506484351
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                <MessageCircle className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  Connect via WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>
                  201/3, Om Namah Shivay Building,
                  <br />
                  Ram Mandir Road, Mahape,
                  <br />
                  Navi Mumbai - 400 710
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground font-body">
            © {year} SV Engineering. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-body">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
