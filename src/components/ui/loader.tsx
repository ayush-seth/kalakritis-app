import { Logo } from "./logo";

export const Loader = () => (
  <div className="grid h-screen place-items-center">
    <div className="grid h-24 w-24 animate-spin rounded-full border-4 border-solid border-primary-600 border-t-accent-700"></div>
    <Logo className="absolute w-10" />
  </div>
);
