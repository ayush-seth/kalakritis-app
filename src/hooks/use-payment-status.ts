import { authenticatedClient } from "@/utils";
import { useQuery } from "@tanstack/react-query";

type PaymentStatusResponse = {
  success: boolean;
  code: string;
  message: string;
  data: {
    merchantTransactionId: string;
    transactionId: string;
    amount: number;
    state: string;
    responseCode: string;
    paymentInstrument: {
      type: string;
      pgTransactionId: string;
      pgServiceTransactionId: string;
      bankTransactionId: any;
      bankId: string;
    };
  };
  details: string;
};

export const usePaymentStatus = (transactionId: string) => {
  return useQuery({
    queryKey: ["payment-status", transactionId],
    queryFn: () => checkPaymentStatus(transactionId),
    enabled: !!transactionId,
  });
};

const checkPaymentStatus = (transactionId: string) => {
  return authenticatedClient
    .get("payment/check_transaction_status/", {
      searchParams: { transactionId },
    })
    .json<PaymentStatusResponse>();
};
