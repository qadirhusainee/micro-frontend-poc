import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono lg:flex text-5xl p-20">
        Container App
      </div>
      <div className="flex">
        <Link className="mr-2 p-6 bg-gray-800 text-white" href="/mf/checkout">
          Redirect to MF checkout app
        </Link>
        <Link className="p-6 bg-gray-800 text-white" href="/mf/cart">
          Redirect to MF cart app
        </Link>
      </div>
    </main>
  );
}
