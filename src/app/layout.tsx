import "./globals.css";
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: "Novel Insights - Books reviews website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider >
          <ClientLayout>
            {children}
            <Toaster position="top-right" />
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
