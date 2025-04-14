import { toast } from "sonner";

interface Props {
  type: "success" | "failure";
  message: string;
}

function ToastCom({ type, message }: Props) {
  return (
    <div>
      {type === "success" ? toast.success(message) : toast.error(message)}
    </div>
  );
}

export default ToastCom;
