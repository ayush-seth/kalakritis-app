import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { WishlistGrid } from "@/components/wishlist/wishlist-grid";

const Wishlist = () => {
  return (
    <Container className="px-4 md:px-12 lg:px-16">
      <SectionHeading className="my-10 px-0 text-left">Wishlist</SectionHeading>
      <WishlistGrid />
    </Container>
  );
};

export default Wishlist;
