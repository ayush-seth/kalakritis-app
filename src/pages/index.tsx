import { BestSeller } from "@/components/landing-page-sections/best-seller";
import { CelebrationSpecial } from "@/components/landing-page-sections/celeberations-special";
import { Hero } from "@/components/landing-page-sections/hero";
import { LandingInfo } from "@/components/landing-page-sections/landing-info";
import { NewArrivals } from "@/components/landing-page-sections/new-arrivals";
import OurCommitments from "@/components/landing-page-sections/our-commitments";
import { ShopByCategories } from "@/components/landing-page-sections/shop-by-categories";
import Testimonials from "@/components/landing-page-sections/testimonials";
import { TrendingNow } from "@/components/landing-page-sections/trending-now";
import { SignUpModal } from "@/components/sign-up-modal";
import { Roboto } from "next/font/google";
import { useState } from "react";

const font = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <div style={font.style} className="pt-20">
      <Hero />
      <LandingInfo />
      <ShopByCategories />
      <TrendingNow />
      <NewArrivals />
      <CelebrationSpecial />
      <BestSeller />
      <OurCommitments />
      <Testimonials />
      <SignUpModal
        open={!showSignUpModal}
        onClose={() => setShowSignUpModal(true)}
      />
    </div>
  );
}
