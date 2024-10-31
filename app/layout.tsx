import QueryProvider from "@/lib/query-provider";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  preload: true,
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "400", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project",
  description: "left sidebar menu project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={notoSansKr.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
