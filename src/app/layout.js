import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Brainwave.io",
  description: "Brainwave.io design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
