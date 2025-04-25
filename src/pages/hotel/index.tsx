import HotelImg from "@/assets/images/hotel.png";
import BreadcrumbCom from "@/components/Breadcrumb";
import HeroSectionCom from "@/components/HeroSectionCom";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import HotelSection from "./HotelSection";

import PdMain from "@/components/paddingList/PbMain";
import PdSub from "@/components/paddingList/PbSub";
import SearchHotel from "@/components/searchList/hotel/SearchHotel";
import HotelPagination from "./HotelPagination";

import { getHotels } from "@/api/hotelRequest";

import { useQuery } from "@tanstack/react-query";
import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from "use-query-params";

const Hotel = () => {
  const { t } = useTranslation("hotel");

  const [query] = useQueryParams({
    _page: withDefault(NumberParam, 1),
    _sort: StringParam,
    _order: StringParam,
    location: StringParam,
    score: StringParam,
    prices: StringParam,
    star: StringParam,
    guest: StringParam,
  });

  const _page = Number(query._page) || 1;
  const _sort = query._sort || "price";
  const _order = query._order || "asc";
  const score = query.score || "";
  const guest = query.guest || "";
  const prices = query.prices || "0,300";
  const location = query.location || "All";
  const star = query.star || "";

  const { data, isLoading } = useQuery({
    queryKey: [
      "hotels",
      { _page, _sort, _order, location, score, prices, star, guest },
    ],
    queryFn: () =>
      getHotels({ _page, _sort, _order, location, score, prices, star }),
  });

  const totalData = data?.totalData;

  const links = useMemo(() => [{ href: "/", title: "Home" }], []);
  const current = useMemo(() => "Hotel", []);

  return (
    <>
      <HeroSectionCom
        image={HotelImg}
        Tour={<SearchHotel />}
        title={t("banner.title")}
        des={t("banner.description")}
      />
      <PdSub />
      <BreadcrumbCom links={links} current={current} />
      <PdSub />
      <HotelSection isLoading={isLoading} data={data?.data} />
      {isLoading || !totalData ? (
        <div>Loading...</div>
      ) : (
        <HotelPagination totalData={totalData} />
      )}
      <PdMain />
    </>
  );
};

export default Hotel;
