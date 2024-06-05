import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "김인아 포트폴리오",
  description: "김인아 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={"${inter.className} bg-cyan-50 text-green-200"}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[32.25rem] w-[32.25rem] rounded-full "></div>
        <div></div>
        {children}
      </body>
    </html>
  );
}
