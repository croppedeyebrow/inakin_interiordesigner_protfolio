import Header from "@/components/header";
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
      <body
        className={
          "${inter.className} bg-cyan-50 text-green-200 relative h-[5000px]"
        }
      >
        {/* "blur-[12rem]" 클래스는 12rem의 블러 효과를 적용합니다.
    "sm:w-[70rem]" 클래스는 화면 크기가 sm(작은 크기)일 때 너비를 70rem으로 설정합니다. */}

        <div className="bg-[#FFFADE] absolute top-[-6rem] -z-10 right-[11rem] h-[34rem] w-[34rem] rounded-full blur-[12rem] sm:w-[70rem] "></div>

        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-34rem] h-[32.25rem] w-[32.25rem] rounded-full blur-[12rem] sm:w-[70rem] md:left-[-34rem]
          lg:left-[-28rme] xl:left-[16rme] 2xl:left-[-6rem]
        "
        ></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
