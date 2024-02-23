"use client";

import { Button } from "@/shared/ui/button";
import { ClientSafeProvider } from "next-auth/react";
import { Spinner } from "@/shared/ui/spinner";
import { Github } from "lucide-react";
import { useOAuthSignIn } from "../_vm/use-oauth-sign-in";

export const ProviderButton = ({
  provider,
}: {
  provider: ClientSafeProvider;
}) => {
  const oauthSignIn = useOAuthSignIn(provider);

  const getIcon = (provider: ClientSafeProvider) => {
    switch (provider.id) {
      case "github":
        return <Github className="mr-2 h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <Button
      variant="outline"
      type="button"
      disabled={oauthSignIn.isPending}
      onClick={() => oauthSignIn.signIn()}
    >
      {oauthSignIn.isPending ? (
        <Spinner className="mr-2 h-4 w-4" aria-label="Вход" />
      ) : (
        getIcon(provider)
      )}
      {provider.name}
    </Button>
  );
};
