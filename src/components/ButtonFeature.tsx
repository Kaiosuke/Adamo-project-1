import { Link } from "react-router";

const ButtonFeature = ({ content }: { content: string }) => {
  return (
    <Link to="#">
      <div className="w-[80px] h-[32px] bg-secondary text-third flex items-center justify-center text-sm cursor-pointer hover:bg-secondary/80">
        {content}
      </div>
    </Link>
  );
};

export default ButtonFeature;
