// pages/[id].js
import { useRouter } from "next/router";
import DynamicComponentLoader from "../../components/DynamicComponentLoader";

export default function Home() {
  const router = useRouter();
  const { subapp } = router.query;

  return (
    <div style={{ display: "flex" }}>
      {subapp ? (
        <DynamicComponentLoader
          componentName={subapp}
          fallback={<p>Loading...</p>}
        />
      ) : (
        <p>Please provide an id in the URL</p>
      )}
    </div>
  );
}
