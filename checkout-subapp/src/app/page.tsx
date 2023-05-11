import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono lg:flex text-5xl p-24">
        Checkout Subapp
      </div>
      <div className="flex">
        <Link className="mr-2 p-6 bg-gray-800 text-white" href="/">
          Redirect from Checkout to Main
        </Link>
        <Link className="mr-2 p-6 bg-gray-800 text-white" href="/mf/cart">
          Redirect from Checkout to Cart
        </Link>
      </div>
    </main>
  );
}
