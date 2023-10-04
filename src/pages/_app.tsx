import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { LoginModal } from "@/components/sign-up-modal";
import { useUserStore } from "@/store";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const showLoginModal = useUserStore((s) => s.showLoginModal);
  const setShowLoginModal = useUserStore((s) => s.setShowLoginModal);

  return (
    <>
      <Head>
        <title>Kalakritis</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
        <Footer />
        <LoginModal
          open={showLoginModal}
          onClose={() => setShowLoginModal(false)}
        />
      </QueryClientProvider>
      <Toaster />
    </>
  );
}
