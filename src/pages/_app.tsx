import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
      <Footer />
    </QueryClientProvider>
  );
}
