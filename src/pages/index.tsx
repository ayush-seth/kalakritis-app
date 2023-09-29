import { Hero } from "@/components/landing-page-sections/hero";
import { LandingInfo } from "@/components/landing-page-sections/landing-info";
import { NewArrivals } from "@/components/landing-page-sections/new-arrivals";
import { ShopByCategories } from "@/components/landing-page-sections/shop-by-categories";
import { TrendingNow } from "@/components/landing-page-sections/trending-now";
import { Roboto } from "next/font/google";

const font = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div style={font.style} className="pt-20">
      <Hero />
      <LandingInfo />
      <ShopByCategories />
      <TrendingNow />
      <NewArrivals />
      {/* Celebration Special */}
      {/* Best seller */}
      {/* Testimonials */}
      {/* Footer */}
    </div>
  );
}
