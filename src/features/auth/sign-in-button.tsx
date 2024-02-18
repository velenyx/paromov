"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/shared/ui/button";
import { LogIn } from "lucide-react";

export const SignInButton = () => {
  const handleSignIn = () => signIn();

  return (
    <Button variant="outline" onClick={handleSignIn}>
      <LogIn className="mr-2 h-4 w-4" /> Войти
    </Button>
  );
};
