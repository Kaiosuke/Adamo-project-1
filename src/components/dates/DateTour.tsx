import { tourSelector } from "@/redux/selectors/tourSelector";
import { useSelector } from "react-redux";
import DatePickerWithRange from "../DatePickerWithRange";

const DateTour = () => {
  const { tour } = useSelector(tourSelector);

  return <DatePickerWithRange />;
};

export default DateTour;
