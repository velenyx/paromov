"use client";

import { signIn } from "next-auth/react";
import { useEffect } from "react";
import { useAppSession } from "@/entities/user/session.client";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";

export const AuthorizedGuard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = useAppSession();

  const isUnauthenticated = session.status === "unauthenticated";

  useEffect(() => {
    if (isUnauthenticated) {
      signIn();
    }
  }, [isUnauthenticated]);

  const isLoading = session.status === "loading" || isUnauthenticated;

  return (
    <>
      <FullPageSpinner isLoading={isLoading} />
      {session.status === "authenticated" && children}
    </>
  );
};
