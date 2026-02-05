import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Header from "@/components/Header";
import ConvexClientProvider from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "EventKothae",
  description: "Discover and host events around you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-950">
        <ThemeProvider>
          <ClerkProvider>
            <ConvexClientProvider>
              <Header />
              {/* ⬇️ NO container here */}
              <main className="min-h-screen w-full">{children}</main>
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
