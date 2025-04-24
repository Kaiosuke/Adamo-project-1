import BreadcrumbCom from "@/components/Breadcrumb";
import PdMain from "@/components/padding/PdMain";
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
