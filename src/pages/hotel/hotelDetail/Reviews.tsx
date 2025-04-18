import { addReviewHotel, getReviewsHotel } from "@/api/reviewRequest";
import Pagination from "@/components/paginations/Pagination";
import PdSub from "@/components/PdSub";
import ReviewHotel from "@/components/reviews/ReviewHotel";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { IReviewHotel } from "@/interfaces/review";
import { commentSchema } from "@/schemas/reivewSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { z } from "zod";

import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { NumberParam, useQueryParams } from "use-query-params";

const Reviews = () => {
  const { id } = useParams();
  const [isReview, setIsReview] = useState(false);
  const [totalData, setTotalData] = useState(0);

  const ITEMS_PER_PAGE = 3;

  const [pageCount, setPageCount] = useState(0);

  const [currentPage, setCurrentPage] = useState(() => {
    const saved = localStorage.getItem("currentPageHotel");
    return saved ? Number(saved) : 0;
  });

  const queryClient = useQueryClient();

  const [query, setQuery] = useQueryParams({
    _page: NumberParam,
  });

  const _page = query._page ? query._page : 1;

  const { data } = useQuery({
    queryKey: ["reviewHotel", { id, _page }],
    queryFn: () =>
      getReviewsHotel({
        hotelId: id as string,
        _page: _page,
      }),
    enabled: id !== undefined,
  });

  useEffect(() => {
    const total = localStorage.getItem("totalReviewHotel") || "0";
    setPageCount(Math.ceil(Number(total) / ITEMS_PER_PAGE));
    setTotalData(Number(total));
  }, []);

  const addComment = useMutation({
    mutationFn: (data: Omit<IReviewHotel, "id">) => {
      return addReviewHotel({ data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviewHotel"] });
    },
  });

  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof commentSchema>) {
    const data = {
      hotelId: Number(id),
      rate: 9,
      avatar: `url('@/assets/images/Avatar-30.png')`,
      opinion: "Dreamy!",
      time: "Feb 2023",
      title: "Romantic escape",
      des: values.message,
    };

    addComment.mutate(data, {
      onSuccess: () => {
        form.reset();
        setIsReview(false);
        setQuery({ _page: 1 });
        setCurrentPage(0);
      },
    });
  }

  return (
    <div>
      <div className="flex gap-8">
        <div className="w-[148px] h-[148px] bg-primary flex justify-center items-center">
          <span className="text-third text-size-5xl">{9.4}</span>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-size-4xl">Wonderful</div>
          <div>
            {totalData} {totalData > 0 ? "Reviews" : "Review"}
          </div>

          <Button
            variant={isReview ? "five" : "primary"}
            size={"third"}
            onClick={() => setIsReview((prev) => !prev)}
          >
            {isReview ? "Close" : "Write a review"}
          </Button>
        </div>
      </div>
      {isReview && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <div className={`md:mt-10 mt-8 `}>
                    <div className="flex gap-2">
                      <div className="">
                        <FaUserCircle className="lg:w-[56px] md:w-[48px] w-[40px] h-auto text-five" />
                      </div>
                      <Textarea
                        placeholder="Type anything"
                        className="h-[128px] bg-seven text-four placeholder:text-four"
                        {...field}
                      />
                    </div>
                    <div className="w-full text-right mt-6">
                      <Button
                        className="w-auto lg:px-10 md:px-8 px-6"
                        size={"third"}
                      >
                        Comment
                      </Button>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      )}

      <div className="flex flex-col gap-4">
        {data &&
          data.reverse().map((review: IReviewHotel) => (
            <div key={review.id}>
              <ReviewHotel review={review} />
            </div>
          ))}
      </div>
      <PdSub />
      <Pagination
        currentPage={currentPage}
        onPageChange={(v) => {
          setCurrentPage(v);
          setQuery({ _page: v + 1 });
          localStorage.setItem("currentPageHotel", v.toLocaleString());
        }}
        pageCount={pageCount}
      />
    </div>
  );
};

export default Reviews;
