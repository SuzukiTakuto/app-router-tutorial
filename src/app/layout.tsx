import type { Metadata } from "next";
import Link from "next/link";
import { Inconsolata } from "next/font/google";
import "./globals.css";

const fnt = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reading Recorder",
  description: "自分が読んだ書籍の記録を残すためのアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={fnt.className}>
        <h1 className="text-4xl text-indigo-800 font-bold my-2">
          Reading Recorder
        </h1>
        <ul className="flex bg-blue-600 mb-4 pl-2">
          <li className="blok px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <Link className="no-underline text-blue300" href="/">
              Home
            </Link>
          </li>
          <li className="blok text-blue-300 px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <Link className="no-underline text-blue300" href="/books">
              Search
            </Link>
          </li>
          <li className="blok text-blue-300 px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <a href="https://wings.msn.to/" target="_blank"></a>Support
          </li>
        </ul>
        <div className="ml-2">{children}</div>
      </body>
    </html>
  );
}
