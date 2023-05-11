import dynamic from "next/dynamic";
const RemoteApp = dynamic(() => import("remote/App"), {
  ssr: false,
});
export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <RemoteApp />
    </div>
  );
}
