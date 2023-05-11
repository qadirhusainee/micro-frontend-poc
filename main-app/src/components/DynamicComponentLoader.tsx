// components/DynamicComponentLoader.js
import React, { useEffect, useState } from "react";
//import { getRemote } from "../../remoteConfig";

const DynamicComponentLoader = ({ componentName, fallback }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      const remoteUrl = {}; //getRemote(componentName);
      if (!remoteUrl) {
        console.error(`No remote found for component: ${componentName}`);
        return;
      }

      const [remoteName, remoteEntry] = remoteUrl.split("@");

      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = remoteEntry;
        script.onload = () => {
          resolve();
        };
        script.onerror = (error) => {
          console.error("Failed to load remote entry.", error);
          reject(error);
        };
        document.head.appendChild(script);
      });

      const factory = await window[remoteName].get("./App");
      const componentModule = await factory();
      const Component = React.memo(
        () => componentModule.default || componentModule
      );
      setComponent(() => Component);
    };

    loadComponent();
  }, [componentName]);

  if (!Component) {
    return fallback || <div>Loading...</div>;
  }

  return <Component />;
};

export default DynamicComponentLoader;
