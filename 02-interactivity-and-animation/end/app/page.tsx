import { getUsers } from "@/lib/users";
import { UserForm } from "./user-form";
import { getServerState, setServerState } from "./ServerState";
import { ClientComp } from "./client-comp";

export default async function Page() {
  // let users = await getUsers();
  let state = getServerState();

  return (
    <div className="py-10">
      <p>{state}</p>
      <ClientComp />
      {/* <div className="mx-auto max-w-sm space-y-4 rounded-lg bg-gray-200 p-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex justify-between rounded-lg bg-white px-4 py-4 text-gray-900 shadow"
          >
            <div>
              <p>{user.name}</p>
              <p className="text-sm text-gray-500">{user.role}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <div>
              <UserForm user={user} />
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
