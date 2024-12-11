import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Poppins, Nunito } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const nunito = Nunito({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Toufiq Mowla",
  description: "A personal website of Toufiq Mowla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="dark ">
      <body
        className={cn(
          nunito.variable,
          poppins.variable,
          "bg-background text-normal"
        )}
      >
        <ThemeProvider attribute="class">
          <ScrollArea className="h-screen scroll-smooth">
            {children}
            <Toaster />
          </ScrollArea>
        </ThemeProvider>
        {/* <DockBar/> */}
      </body>
    </html>
  );
}
