import { Link } from "react-router";
import { Button } from "./ui/button";

const ButtonFeature = ({ content }: { content: string }) => {
  return (
    <Link to="#">
      <Button
        variant={"secondary"}
        className="w-fit text-third px-6"
        size={"secondary"}
      >
        {content}
      </Button>
    </Link>
  );
};

export default ButtonFeature;
