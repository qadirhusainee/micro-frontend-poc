import dynamic from "next/dynamic";
const CartApp = dynamic(() => import("cart/App"), {
  ssr: false,
});
export default function Home() {
  return (
    <div>
      <CartApp />
    </div>
  );
}
