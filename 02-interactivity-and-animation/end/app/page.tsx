"use client";

import { Contact, useContacts } from "@/lib/contacts";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon, Pencil1Icon } from "@radix-ui/react-icons";
import { FormEvent, useState } from "react";
import { Spinner } from "./spinner";

export default function Page() {
  let { contacts } = useContacts();

  return (
    <div className="py-10">
      <div className="mx-auto max-w-sm space-y-4 rounded-lg bg-gray-200 p-4">
        {contacts.map((contact) => (
          <div
            className="flex justify-between rounded-lg bg-white px-4 py-4 text-gray-900 shadow"
            key={contact.id}
          >
            <div>
              <p>{contact.name}</p>
              <p className="text-sm text-gray-500">{contact.role}</p>
              <p className="text-sm text-gray-500">{contact.email}</p>
            </div>
            <div>
              <EditContactButton contact={contact} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EditContactButton({ contact }: { contact: Contact }) {
  let [open, setOpen] = useState(false);
  let [isSaving, setIsSaving] = useState(false);
  let { updateContact } = useContacts();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);

    const attrs = Object.fromEntries(new FormData(event.currentTarget));

    await updateContact(contact.id, attrs);

    setOpen(false);
    setIsSaving(false);
  }
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="rounded p-2 hover:bg-gray-200">
        <Pencil1Icon />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-xl">Edit contact</Dialog.Title>
            <Dialog.Close className="text-gray-400 hover:text-gray-500">
              <Cross1Icon />
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit}>
            <fieldset disabled={isSaving} className="group">
              <div className="mt-8 group-disabled:opacity-50">
                <ContactFields contact={contact} />
              </div>
              <div className="mt-8 space-x-6 text-right">
                <Dialog.Close className="rounded px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-600">
                  Cancel
                </Dialog.Close>
                <button className="relative rounded bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 active:bg-green-700 group-disabled:pointer-events-none">
                  <span className="absolute inset-0 flex items-center justify-center">
                    <Spinner
                      className="h-4 animate-spin group-enabled:opacity-0"
                      style={{
                        animationTimingFunction: "steps(12, end)",
                        animationDuration: "1s",
                      }}
                    />
                  </span>
                  <span className="group-disabled:opacity-0">Save</span>
                </button>
              </div>
            </fieldset>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function ContactFields({
  contact,
}: {
  contact: { id: string; name: string; email: string; role: string };
}) {
  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium text-gray-900">Name</label>
        <input
          autoFocus
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={contact.name}
          name="name"
        />
      </div>

      <div>
        <label className="text-sm font-medium leading-6 text-gray-900">
          Role
        </label>
        <input
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={contact.role}
          name="role"
        />
      </div>
      <div>
        <label className="text-sm font-medium leading-6 text-gray-900">
          Email address
        </label>
        <input
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={contact.email}
          name="email"
        />
      </div>
    </div>
  );
}
