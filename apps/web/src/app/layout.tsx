import "@v1/ui/globals.css";
import { Provider as AnalyticsProvider } from "@v1/analytics/client";
import { cn } from "@v1/ui/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { SITE_URL } from "@/lib/orvibo/site";

const DepartureMono = localFont({
  src: "../fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ORVIBO",
  description: "ORVIBO whole-home smart living and product experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${DepartureMono.variable} ${GeistSans.variable} ${GeistMono.variable}`,
          "antialiased",
        )}
      >
        {children}

        {/* OpenPanel only loads once a client id is configured. */}
        {process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID ? (
          <AnalyticsProvider />
        ) : null}
      </body>
    </html>
  );
}
