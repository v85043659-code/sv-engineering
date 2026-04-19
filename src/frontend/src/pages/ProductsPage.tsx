import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { categories, products } from "@/data/products";
import { Link, useLocation } from "@tanstack/react-router";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function ProductsPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get("category") ?? "all";

  const [selectedCategory, setSelectedCategory] =
    useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "all" || p.categorySlug === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div data-ocid="products.page">
      {/* Page Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Badge
            variant="secondary"
            className="mb-3 text-xs font-body uppercase tracking-wider"
          >
            Our Product Range
          </Badge>
          <h1 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-2">
            Pneumatic &amp; Automation Products
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl">
            Browse our comprehensive range of pneumatic components. Each product
            is sourced from trusted manufacturers for reliable industrial
            performance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 font-body"
              data-ocid="products.search_input"
            />
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm font-body">Filter:</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap gap-2 mb-8"
          data-ocid="products.category_filter"
        >
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1.5 rounded-full text-sm font-body font-medium transition-colors duration-200 ${
              selectedCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
            data-ocid="products.filter_all"
          >
            All Products ({products.length})
          </button>
          {categories.map((cat) => (
            <button
              type="button"
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3 py-1.5 rounded-full text-sm font-body font-medium transition-colors duration-200 ${
                selectedCategory === cat.slug
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              data-ocid={`products.filter_${cat.slug.replace(/-/g, "_")}`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16" data-ocid="products.empty_state">
            <p className="font-display font-semibold text-foreground text-lg mb-2">
              No products found
            </p>
            <p className="font-body text-muted-foreground">
              Try a different search term or category
            </p>
            <Button
              variant="outline"
              className="mt-4 font-body"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            data-ocid="products.list"
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(i, 7) * 0.05 }}
                data-ocid={`products.item.${i + 1}`}
              >
                <Card className="group hover:shadow-md transition-shadow duration-200 overflow-hidden h-full flex flex-col">
                  <div className="relative overflow-hidden bg-muted/30 h-44">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge
                        variant="secondary"
                        className="text-[10px] font-body"
                      >
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4 flex flex-col flex-1">
                    <h3 className="font-display font-semibold text-foreground text-sm leading-tight mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-xs font-body leading-relaxed line-clamp-2 mb-3 flex-1">
                      {product.description}
                    </p>
                    <div className="flex gap-2">
                      <Link
                        to="/products/$productId"
                        params={{ productId: product.id }}
                        className="flex-1"
                        data-ocid={`products.detail_link.${i + 1}`}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full font-body text-xs"
                        >
                          Details
                        </Button>
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1"
                        data-ocid={`products.quote_button.${i + 1}`}
                      >
                        <Button size="sm" className="w-full font-body text-xs">
                          Quote
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
