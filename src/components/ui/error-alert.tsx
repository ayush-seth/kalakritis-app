type ErrorAlertProps = {
  children: React.ReactNode;
};

export function ErrorAlert({ children }: ErrorAlertProps) {
  return (
    <div className="bg-red-300 p-4 text-center text-red-800">{children}</div>
  );
}
