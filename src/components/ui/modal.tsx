import { cn } from "@/utils";
import { Dialog } from "@headlessui/react";
import { IconX } from "@tabler/icons-react";

type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  className?: string;
  onClose: () => void;
};

export function Modal({ open, onClose, children, className }: ModalProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="fixed inset-0 z-10 bg-black/70">
        <Dialog.Panel
          className={cn(
            "fixed left-1/2 top-1/2 z-10 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 bg-primary-400 p-8",
            className,
          )}
        >
          <button className="absolute right-8 top-8" onClick={onClose}>
            <IconX strokeWidth={1} />
          </button>
          <Dialog.Title></Dialog.Title>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
