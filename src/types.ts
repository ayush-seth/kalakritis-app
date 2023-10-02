export type ApiResponse = {
  count: number;
  total_pages: number;
  html_context: {
    next_url: string | null;
    previous_url: string | null;
  };
  results: Product[];
};

export type Product = {
  id: number;
  product_images: ProductImage[];
  product_type: ProductType;
  colors: Color[];
  tags: Tag[];
  sizes: Size[];
  sku: string;
  title: string;
  cost_price: number;
  selling_price: number;
  description: string;
  features: string;
  shipping_details: string;
  return_details: string;
  product_care: string;
  avg_rating: number;
  total_reviews: number;
  on_discount: string;
  discount_value: number;
  discount_percent: number;
};

type ProductImage = {
  id: number;
  img: string;
  order: string;
};

type ProductType = {
  id: number;
  name: string;
};

type Color = {
  id: number;
  name: string;
  hash_value: `#${string}`;
};

type Size = {
  id: number;
  name: SizeName;
};

export type SizeName = "XS" | "S" | "M" | "L" | "XL" | "XXL";

type Tag = {
  id: number;
  name: string;
};

export type FilterValue = ProductType | Color | Size;

export type ProductFilter = {
  key: string;
  name: string;
  values: FilterValue[];
};

export type Address = {
  id: number
  name: string
  email: string
  country: string
  state: string
  address_line1: string
  city: string
  zipcode: string
  phone_number: string
  address_type: string
  user: number
}

export type CartItem = {
  id: number
  product: Product
  qty: number
  size: string
  color: string
}

