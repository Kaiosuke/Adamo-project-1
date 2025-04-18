import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { StringParam, useQueryParams } from "use-query-params";

const Language = ({ getLinkColor }: { getLinkColor: () => string }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [query, setQuery] = useQueryParams({
    lg: StringParam,
  });

  const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value);
    setQuery({ lg: value });
  };

  const language = query.lg || "en";

  useEffect(() => {
    i18n.changeLanguage(language);
  }, []);

  return (
    <div className="ml-6">
      <Select
        value={language}
        onValueChange={(value) => handleChangeLanguage(value)}
      >
        <SelectTrigger className="w-[60px] text-secondary ">
          <div className={getLinkColor()}>{currentLanguage}</div>
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
