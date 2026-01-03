import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SimRC - FPV Simulation RC",
  description: "FPV Simulation RC application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
