import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className="ml-6">
      <Select onValueChange={(value) => handleChangeLanguage(value)}>
        <SelectTrigger className="w-[40px] text-secondary bg- text-third">
          {currentLanguage}
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="en">EN</SelectItem>
            <SelectItem value="vi">VI</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Language;
