import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

/*
export default () => (
  
    <Dialog.Trigger />
    <Dialog.Portal>
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
    <Dialog.Root></Dialog.Root>
  );
};

export default Modal;
