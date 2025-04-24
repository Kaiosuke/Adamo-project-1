import BreadcrumbCom from "@/components/Breadcrumb";

import PrivateSection from "./PrivateSection";
import PdMain from "@/components/padding/PdMain";

const PrivatePolicy = () => {
  return (
    <>
      <PdMain />
      <BreadcrumbCom
        current="Private Policy"
        links={[{ title: "Home", href: "/" }]}
      />

      <PrivateSection />
      <PdMain />
    </>
  );
};

export default PrivatePolicy;
