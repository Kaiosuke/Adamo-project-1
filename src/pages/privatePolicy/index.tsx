import BreadcrumbCom from "@/components/Breadcrumb";
import PdMain from "@/components/PdMain";
import PrivateSection from "./PrivateSection";

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
