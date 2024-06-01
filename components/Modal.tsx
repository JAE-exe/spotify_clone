import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

/*
export default () => (
  
    <Dialog.Trigger />
   
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title />
        <Dialog.Description />
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
*/

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  desciption: string;
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  desciption,

  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      {" "}
      <Dialog.Portal>
        <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0" />
        <Dialog.Content></Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
