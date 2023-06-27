"use client";

import { Pencil1Icon } from "@radix-ui/react-icons";
import users from "./users.json";

export default function Page() {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-sm space-y-4 rounded-lg bg-gray-200 p-4">
        {users.map((user) => (
          <div
            className="flex justify-between rounded-lg bg-white px-4 py-4 text-gray-900 shadow"
            key={user.id}
          >
            <div>
              <p>{user.name}</p>
              <p className="text-sm text-gray-500">{user.role}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <div>
              <button className="rounded p-2 hover:bg-gray-200">
                <Pencil1Icon />
              </button>
            </div>
          </div>
        ))}
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
