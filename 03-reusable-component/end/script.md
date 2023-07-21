```tsx
import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

export default function Modal({
  open,
  onOpenChange,
  children,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

function ModalContent({
  children,
  title,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]" />
      <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms]">
        <div className="flex items-center justify-between">
          <Dialog.Title className="text-xl">{title}</Dialog.Title>
          <Dialog.Close className="text-gray-400 hover:text-gray-500">
            <Cross1Icon />
          </Dialog.Close>
        </div>

        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

Modal.Button = Dialog.Trigger;
Modal.Content = ModalContent;
Modal.Close = Dialog.Close;
```

```tsx
<Modal open={open} onOpenChange={setOpen}>
  <Modal.Button className="rounded p-2 hover:bg-gray-200">
    <Pencil1Icon />
  </Modal.Button>
  <Modal.Content title="Edit contact">
    <ContactForm contact={contact} afterSave={() => setOpen(false)} />
  </Modal.Content>
</Modal>
```

```tsx
<header className="flex items-center justify-between bg-blue-950 p-4">
  <p className="font-medium">Trelllo</p>

  <Modal>
    <Modal.Button asChild>
      <Button icon={<QuestionMarkCircledIcon />}>About</Button>
    </Modal.Button>
    <Modal.Content title="About Trelllo">
      <div className="mt-4 space-y-3 text-gray-600">
        <p>This is a React app built with Radix UI!</p>
        <p>Technologies used:</p>
        <ul className="list-disc pl-4">
          <li>Radix UI Dialog</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </Modal.Content>
  </Modal>
</header>
```