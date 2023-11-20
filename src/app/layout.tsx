import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/utils/providers/Providers";

export const metadata: Metadata = {
  title: "Login Page",
  description: "By Marcello Nazar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`flex h-screen w-screen mx-auto bg-black text-gray-400 overflow-hidde`}
        >
          <main className="flex w-full h-full overflow-hidden">{children}</main>
        </body>
      </Providers>
    </html>
  );
}
