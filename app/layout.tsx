// app/layout.tsx
import Header from "@/components/Header";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Benim Portfolyom",
  description: "Full-stack geliştirici portfolyo sitesi",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-white text-gray-900 font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
