"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

export const AppSessionProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
};
