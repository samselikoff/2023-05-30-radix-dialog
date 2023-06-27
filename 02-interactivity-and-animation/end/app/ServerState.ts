"use server";

let serverState = "Hello World";

export async function setServerState(message: string) {
  "use server";
  console.log("eh?");
  serverState = message;
}

export async function getServerState() {
  return serverState;
}
