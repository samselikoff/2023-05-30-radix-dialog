import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Radix UI",
  description: "Learn how to build a Dialog with Radix UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
