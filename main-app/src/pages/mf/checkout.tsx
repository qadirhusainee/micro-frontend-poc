import dynamic from "next/dynamic";
const CheckoutApp = dynamic(() => import("checkout/App"), {
  ssr: false,
});
export default function Checkout() {
  return (
    <div>
      <CheckoutApp />
    </div>
  );
}
