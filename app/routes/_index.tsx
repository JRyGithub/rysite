import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";

import { useOptionalUser } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "RySite" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-primary-bg sm:flex sm:items-center sm:justify-center">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
