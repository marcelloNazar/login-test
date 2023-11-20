"use client";
import { SessionProvider } from "next-auth/react";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: AuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
