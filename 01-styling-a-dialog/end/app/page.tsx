"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon, Pencil1Icon } from "@radix-ui/react-icons";
import users from "./users.json";
import { useState } from "react";

let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Page() {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-sm space-y-4 rounded-lg bg-gray-200 p-4">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}

function UserCard({ user }) {
  let [open, setOpen] = useState(false);
  let [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setIsSaving(true);
    await sleep(1000);
    setOpen(false);
  }

  return (
    <div className="flex justify-between rounded-lg bg-white px-4 py-4 text-gray-900 shadow">
      <div>
        <p>{user.name}</p>
        <p className="text-sm text-gray-500">{user.role}</p>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
      <div>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger className="rounded p-2 hover:bg-gray-200">
            <Pencil1Icon />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-[overlay-out_200ms_ease-in] data-[state=open]:animate-[overlay-in_300ms_ease-out]" />
            <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow data-[state=closed]:animate-[content-out_200ms_ease-in] data-[state=open]:animate-[content-in_300ms_ease-out]">
              <div className="flex items-center justify-between">
                <Dialog.Title className="text-xl">Edit contact</Dialog.Title>
                <Dialog.Close className="text-gray-400 hover:text-gray-500">
                  <Cross1Icon />
                </Dialog.Close>
              </div>

              <form onSubmit={handleSubmit}>
                <fieldset disabled={isSaving} className="group">
                  <div className="mt-8 group-disabled:opacity-50">
                    <UserFields user={user} />
                  </div>
                  <div className="mt-8 space-x-6 text-right">
                    <Dialog.Close className="rounded px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-600">
                      Cancel
                    </Dialog.Close>
                    <button className="relative rounded bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 active:bg-green-700 group-disabled:pointer-events-none">
                      <span className="group absolute inset-0 flex items-center justify-center">
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
      </div>
    </div>
  );
}

function UserFields({
  user,
}: {
  user: { id: string; name: string; email: string; role: string };
}) {
  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium text-gray-900">Name</label>
        <input
          autoFocus
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={user.name}
        />
      </div>

      <div>
        <label className="text-sm font-medium leading-6 text-gray-900">
          Role
        </label>
        <input
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={user.role}
        />
      </div>
      <div>
        <label className="text-sm font-medium leading-6 text-gray-900">
          Email address
        </label>
        <input
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={user.email}
        />
      </div>
    </div>
  );
}

export function Spinner(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27" {...props}>
      <path
        style={{ opacity: 12 / 12 }}
        d="M18.696 10.5a1.002 1.002 0 01.365-1.367l4.759-2.751a1.007 1.007 0 011.37.368.995.995 0 01-.364 1.364l-4.764 2.751a1 1 0 01-1.366-.365z"
        fill="currentColor"
      />
      <path
        style={{ opacity: 11 / 12 }}
        fill="currentColor"
        d="M16.133 6.938l2.75-4.765a1 1 0 011.732 1l-2.748 4.762a1 1 0 11-1.734-.997z"
      />
      <path
        style={{ opacity: 10 / 12 }}
        fill="currentColor"
        d="M13.499 7.5a1 1 0 01-1-1.001V1a1.001 1.001 0 012.003 0v5.499A1.002 1.002 0 0113.499 7.5z"
      />
      <path
        style={{ opacity: 9 / 12 }}
        fill="currentColor"
        d="M8.303 10.5a1 1 0 01-1.365.365L2.175 8.114a.997.997 0 01-.367-1.364c.277-.479.89-.642 1.367-.368l4.762 2.751a1 1 0 01.366 1.367z"
      />
      <path
        style={{ opacity: 8 / 12 }}
        fill="currentColor"
        d="M9.133 7.937l-2.75-4.763a.999.999 0 111.732-1l2.75 4.765a1 1 0 01-1.732.998z"
      />
      <path
        style={{ opacity: 7 / 12 }}
        fill="currentColor"
        d="M6.499 14.5H1a1 1 0 110-2.001h5.499a1.001 1.001 0 010 2.001z"
      />
      <path
        style={{ opacity: 6 / 12 }}
        fill="currentColor"
        d="M8.303 16.502a1 1 0 01-.365 1.366l-4.762 2.749a1.006 1.006 0 01-1.368-.366 1.003 1.003 0 01.367-1.368l4.762-2.748a.996.996 0 011.366.367z"
      />
      <path
        style={{ opacity: 5 / 12 }}
        fill="currentColor"
        d="M10.866 20.062l-2.75 4.767c-.277.475-.89.639-1.367.362a.999.999 0 01-.365-1.365l2.75-4.764a1 1 0 011.732 1z"
      />
      <path
        style={{ opacity: 4 / 12 }}
        fill="currentColor"
        d="M13.499 19.502c.554 0 1.003.448 1.003 1.002v5.498a1.001 1.001 0 01-2.003 0v-5.498a1 1 0 011-1.002z"
      />
      <path
        style={{ opacity: 3 / 12 }}
        fill="currentColor"
        d="M17.867 19.062l2.748 4.764a1 1 0 01-1.732 1.003l-2.75-4.767a1 1 0 011.734-1z"
      />
      <path
        style={{ opacity: 2 / 12 }}
        fill="currentColor"
        d="M18.696 16.502a.995.995 0 011.365-.367l4.765 2.748a1.002 1.002 0 01-1.006 1.734l-4.759-2.749a1.002 1.002 0 01-.365-1.366z"
      />
      <path
        style={{ opacity: 1 / 12 }}
        fill="currentColor"
        d="M25.998 12.499h-5.501a1.001 1.001 0 000 2.001h5.501a1 1 0 100-2.001z"
      />
    </svg>
  );
}
