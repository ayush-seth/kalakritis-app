export type ApiResponse = {
  count: number;
  total_pages: number;
  html_context: {
    next_url: string | null;
    previous_url: string | null;
    page_links: [string, number, boolean, boolean][];
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
  on_discount: boolean;
  discount_value: number;
  discount_percent: number;
  is_wishlisted: boolean;
};

type ProductImage = {
  id: number;
  img: string;
  order: number;
};

type ProductType = {
  id: number;
  name: string;
};

type Color = {
  id: number;
  name: string;
  hash_value: string;
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
  id: number;
  name: string;
  email: string;
  country: string;
  state: string;
  address_line1: string;
  city: string;
  zipcode: string;
  phone_number: string;
  address_type: "home" | "office" | "others";
  user: number;
};

export type CartDetails = {
  no_of_items: number;
  subtotal: number;
  delivery_charges: string;
  tax: number;
  total: number;
  cart_items: CartItem[];
  coupon_details: CouponDetails;
};

export type CouponDetails = {
  coupon_name: string;
  coupon_percent: string;
  coupon_discount: string;
  coupon_success_message: string;
  coupon_error_message: string;
};

export type CartItem = {
  id: number;
  product: Product;
  qty: number;
  size: string;
  color: string;
};

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
};
