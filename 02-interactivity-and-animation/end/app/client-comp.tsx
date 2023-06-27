"use client";

import { setServerState } from "./ServerState";

export function ClientComp() {
  return <button formAction={setServerState}>click me</button>;
}
