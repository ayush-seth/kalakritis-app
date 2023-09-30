import * as Dialog from "@radix-ui/react-dialog";
import { IconX } from "@tabler/icons-react";

type ModalProps = {
  children: React.ReactNode;
};

export function Modal({ children }: ModalProps) {
  return <Dialog.Root>{children}</Dialog.Root>;
}

function ModalContent({ children }: ModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-10 bg-black/70" />
      <Dialog.Content className="fixed left-1/2 top-1/2 z-10 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 bg-primary-400 p-8">
        <Dialog.Close className="absolute right-8 top-8">
          <IconX strokeWidth={1} />
        </Dialog.Close>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

Modal.Trigger = Dialog.Trigger;
Modal.Content = ModalContent;
