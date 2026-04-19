export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  tags?: string[];
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  count: number;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  requirement: string;
}

export interface TrustBadge {
  icon: string;
  title: string;
  description: string;
}
