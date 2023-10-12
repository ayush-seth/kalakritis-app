import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar/navbar";
import NiceModal from "@ebay/nice-modal-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

import "@/styles/globals.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kalakritis</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <NiceModal.Provider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </NiceModal.Provider>
      </QueryClientProvider>
      <Toaster />
    </>
  );
}
