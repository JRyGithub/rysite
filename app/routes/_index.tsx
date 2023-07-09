import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "RySite" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="min-h-screen min-w-screen bg-primary-bg flex flex-col items-center justify-center">
      <Outlet />
    </main>
  );
}
