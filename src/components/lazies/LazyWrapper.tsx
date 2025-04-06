import React, { Suspense, useState } from "react";
import LazyScrollCom from "./LazyScrollCom";

interface Props {
  loader: () => Promise<{ default: React.ComponentType<unknown> }>;
  fallback?: React.ReactNode;
}

const LazyWrapper = ({ loader, fallback }: Props) => {
  const [Component, setComponent] = useState<React.LazyExoticComponent<
    React.ComponentType<unknown>
  > | null>(null);
  console.log(1);
  return (
    <LazyScrollCom
      onVisible={() => {
        if (!Component) {
          const LazyCom = React.lazy(loader);
          setComponent(() => LazyCom);
        }
      }}
    >
      {Component ? (
        <Suspense fallback={fallback ? fallback : <div>Loading ...</div>}>
          <Component />
        </Suspense>
      ) : null}
    </LazyScrollCom>
  );
};

export default LazyWrapper;
