// Viewer360.tsx
import { useEffect, useRef } from "react";
import "@photo-sphere-viewer/core/index.css";
import { Viewer } from "@photo-sphere-viewer/core";

const baseUrl = "https://photo-sphere-viewer-data.netlify.app/assets/";

function Viewer360() {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let viewer: Viewer | null = null;

    if (viewerRef.current) {
      viewer = new Viewer({
        container: viewerRef.current,
        panorama: baseUrl + "sphere.jpg",
      });
    }
    return () => {
      viewer?.destroy();
    };
  }, []);

  return <div ref={viewerRef} className="w-ful h-full" />;
}

export default Viewer360;
