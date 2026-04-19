import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            data-ocid="header.logo_link"
          >
            <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center shadow-sm group-hover:bg-accent transition-colors duration-200">
              <span className="text-primary-foreground font-display font-bold text-sm tracking-tight">
                SV
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-semibold text-foreground leading-tight text-base">
                SV Engineering
              </p>
              <p className="text-muted-foreground text-[10px] leading-tight tracking-wide uppercase">
                Pneumatic &amp; Automation
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-2 text-sm font-body font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors duration-200"
                activeProps={{
                  className:
                    "px-3 py-2 text-sm font-body font-medium text-primary bg-primary/8 rounded-md",
                }}
                data-ocid={`header.nav_${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="tel:7506484351"
              className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-ocid="header.phone_link"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-body">7506484351</span>
            </a>
            <Link to="/contact" data-ocid="header.quote_button">
              <Button
                size="sm"
                className="hidden sm:flex font-display font-semibold tracking-wide"
              >
                Request a Quote
              </Button>
            </Link>
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              data-ocid="header.mobile_menu_toggle"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border pb-4 pt-3">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-3 py-2.5 text-sm font-body font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors duration-200"
                  activeProps={{
                    className:
                      "px-3 py-2.5 text-sm font-body font-medium text-primary bg-primary/8 rounded-md",
                  }}
                  onClick={() => setMenuOpen(false)}
                  data-ocid={`header.mobile_nav_${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 px-3 flex flex-col gap-2">
                <a
                  href="tel:7506484351"
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  data-ocid="header.mobile_phone_link"
                >
                  <Phone className="w-4 h-4" />
                  <span>7506484351</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  data-ocid="header.mobile_quote_button"
                >
                  <Button className="w-full font-display font-semibold">
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
