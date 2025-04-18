import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { languageSelector } from "@/redux/selectors/languageSelector";
import { changeLanguage, Lg } from "@/redux/slices/languageSlice";
import { useEffect } from "react";

import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const Language = ({ getLinkColor }: { getLinkColor: () => string }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const { lg } = useSelector(languageSelector);

  const dispatch = useDispatch();

  const handleChangeLanguage = (value: Lg) => {
    i18n.changeLanguage(value);
    console.log(value);
    dispatch(changeLanguage(value));
  };

  useEffect(() => {
    i18n.changeLanguage(lg);
  }, []);

  return (
    <div className="ml-6">
      <Select
        value={lg}
        onValueChange={(value) => handleChangeLanguage(value as Lg)}
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
