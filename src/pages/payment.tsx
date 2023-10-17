import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Loader } from "@/components/ui/loader";
import { SectionHeading } from "@/components/ui/section-heading";
import { usePaymentStatus } from "@/hooks/use-payment-status";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const PaymentStatusPage = () => {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("transactionId") ?? "";

  const paymentStatus = usePaymentStatus(transactionId);

  if (paymentStatus.isLoading) return <Loader />;
  if (paymentStatus.isError) return "Something went wrong";

  const isSuccess = paymentStatus.data.code === "PAYMENT_SUCCESS";

  return (
    <Container>
      <div className="grid place-items-center gap-12">
        <SectionHeading>{paymentStatus.data.message}</SectionHeading>
        <Image src="/purchase_successful.svg" width={300} height={100} alt="" />
        <p>Thank you for your purchase</p>
        <Button variant="primary">
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    </Container>
  );
};

export default PaymentStatusPage;
