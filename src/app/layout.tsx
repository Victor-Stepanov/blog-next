import "./globals.css";
import { Open_Sans } from "next/font/google";

import type { Metadata } from "next";
import { Layout } from "@/layout";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog next app",
  description: "Study project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={openSans.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
