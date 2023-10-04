import { WishlistGrid } from "@/components/product/wishlist-grid";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const Wishlist = () => {
  return (
    <Container>
      <SectionHeading className="my-10 text-left">Wishlist</SectionHeading>
      <WishlistGrid />
    </Container>
  );
};

export default Wishlist;
