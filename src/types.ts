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
};

type Size = {
  id: number;
  name: string;
};

type Tag = {
  id: number;
  name: string;
};
