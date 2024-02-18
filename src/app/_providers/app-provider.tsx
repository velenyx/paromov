"use client";

import { ThemeProvider } from "@/features/theme/theme-provider";
import { ComposeChildren } from "@/shared/lib/react";
import { AppSessionProvider } from "@/entities/session/app-session-provider";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ComposeChildren>
      <ThemeProvider />
      <AppSessionProvider />
      {children}
    </ComposeChildren>
  );
};
