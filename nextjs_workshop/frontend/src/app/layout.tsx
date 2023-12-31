import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import ReduxProvider from "./_components/common/ReduxProvider";
import ThemeRegistry from "./_components/ThemeRegistry/ThemeRegistry";
import AuthProvider from "./_components/common/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Provider store={store}>{children}</Provider> */}
        <ReduxProvider>
          <ThemeRegistry>
            <AuthProvider>{children}</AuthProvider>
          </ThemeRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
