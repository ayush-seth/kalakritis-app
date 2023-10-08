import AddressModal from "@/components/address-modal";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import NewNavBar from "@/components/navbar2";
import { LoginModal } from "@/components/sign-up-modal";
import { useModalStore } from "@/store";
import "@/styles/globals.css";
import NiceModal from "@ebay/nice-modal-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

NiceModal.register("address-modal", AddressModal);

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const showLoginModal = useModalStore((s) => s.showLoginModal);
  const setShowLoginModal = useModalStore((s) => s.setShowLoginModal);

  return (
    <>
      <Head>
        <title>Kalakritis</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <NiceModal.Provider>
          <NewNavBar />
          {/* <Navbar /> */}
          <Component {...pageProps} />
          <Footer />
          <LoginModal
            open={showLoginModal}
            onClose={() => setShowLoginModal(false)}
          />
        </NiceModal.Provider>
      </QueryClientProvider>
      <Toaster />
    </>
  );
}
