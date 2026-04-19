import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProductById, getProductsByCategory } from "@/data/products";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle, MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "917506484351";

export default function ProductDetailPage() {
  const { productId } = useParams({ from: "/products/$productId" });
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="font-display font-bold text-2xl text-foreground mb-2">
          Product not found
        </p>
        <Link to="/products">
          <Button variant="outline" className="mt-4 font-body">
            Browse All Products
          </Button>
        </Link>
      </div>
    );
  }

  const related = getProductsByCategory(product.categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const whatsappMsg = encodeURIComponent(
    `Hi SV Engineering, I'm interested in: ${product.name}. Please share pricing and availability.`,
  );

  return (
    <div data-ocid="product_detail.page">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-2 text-sm font-body text-muted-foreground">
          <Link
            to="/"
            className="hover:text-primary transition-colors"
            data-ocid="product_detail.breadcrumb_home"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            to="/products"
            className="hover:text-primary transition-colors"
            data-ocid="product_detail.breadcrumb_products"
          >
            Products
          </Link>
          <span>/</span>
          <span className="text-foreground truncate max-w-xs">
            {product.name}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/products" data-ocid="product_detail.back_link">
          <Button
            variant="ghost"
            size="sm"
            className="mb-6 font-body text-muted-foreground -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Products
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="rounded-xl overflow-hidden border border-border bg-muted/20 aspect-[4/3]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <Badge
              variant="secondary"
              className="mb-3 font-body text-xs uppercase tracking-wider"
            >
              {product.category}
            </Badge>
            <h1 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-3 leading-tight">
              {product.name}
            </h1>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Specs */}
            <div className="mb-6" data-ocid="product_detail.specs_section">
              <h2 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider mb-3">
                Specifications
              </h2>
              <div className="bg-muted/30 rounded-lg border border-border overflow-hidden">
                {product.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex items-center justify-between px-4 py-3 ${i < product.specs.length - 1 ? "border-b border-border" : ""}`}
                  >
                    <span className="font-body text-sm text-muted-foreground">
                      {spec.label}
                    </span>
                    <span className="font-body text-sm font-medium text-foreground">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Points */}
            <div className="mb-6 space-y-2">
              {[
                "Genuine product from trusted manufacturer",
                "Available for bulk orders",
                "Fast dispatch across India",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-sm font-body text-muted-foreground"
                >
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <Separator className="mb-6" />

            {/* CTA */}
            <div
              className="flex flex-col sm:flex-row gap-3"
              data-ocid="product_detail.cta_section"
            >
              <Link
                to="/contact"
                className="flex-1"
                data-ocid="product_detail.quote_button"
              >
                <Button size="lg" className="w-full font-display font-semibold">
                  Request a Quote
                </Button>
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
                data-ocid="product_detail.whatsapp_button"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full font-display font-semibold"
                >
                  <MessageCircle className="mr-2 w-4 h-4 text-whatsapp" />
                  WhatsApp Inquiry
                </Button>
              </a>
            </div>
            <a
              href="tel:7506484351"
              className="flex items-center justify-center gap-2 mt-3 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
              data-ocid="product_detail.phone_link"
            >
              <Phone className="w-4 h-4" />
              <span>Call: 7506484351</span>
            </a>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-14" data-ocid="product_detail.related_section">
            <h2 className="font-display font-bold text-xl text-foreground mb-5">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((p, i) => (
                <Card
                  key={p.id}
                  className="group hover:shadow-md transition-shadow duration-200 overflow-hidden"
                  data-ocid={`product_detail.related_item.${i + 1}`}
                >
                  <div className="overflow-hidden h-36 bg-muted/30">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-3">
                    <p className="font-display font-semibold text-foreground text-xs leading-tight line-clamp-2 mb-2">
                      {p.name}
                    </p>
                    <Link
                      to="/products/$productId"
                      params={{ productId: p.id }}
                      data-ocid={`product_detail.related_link.${i + 1}`}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full font-body text-xs"
                      >
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
