import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

const Language = ({ isScroll }: { isScroll: boolean }) => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className="ml-6">
      <Select onValueChange={(value) => handleChangeLanguage(value)}>
        <SelectTrigger className="w-[60px] text-secondary ">
          <div className={`${isScroll ? "text-secondary" : "text-third"} `}>
            {currentLanguage}
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="en">en</SelectItem>
            <SelectItem value="vi">vi</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Language;
