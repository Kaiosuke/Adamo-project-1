import { addReviewHotel } from "@/api/reviewRequest";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { IReviewHotel } from "@/interfaces/review";
import { commentSchema } from "@/schemas/reviewSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FaUserCircle } from "react-icons/fa";
import { z } from "zod";

import Rating from "@/components/Rating";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { ChangeEvent, memo, useCallback, useState } from "react";
import { toast } from "sonner";

interface Props {
  id: string;
  totalData: number;
  setPageCount: (v: number) => void;
  setCurrentPage: (v: number) => void;
  ITEMS_PER_PAGE: number;
  onAverageRate: number;
  setQuery: (query: Record<string, any>) => void;
}

const ReviewForm = ({
  totalData,
  id,
  setCurrentPage,
  onAverageRate,
  setQuery,
}: Props) => {
  const queryClient = useQueryClient();

  const [isReview, setIsReview] = useState(false);

  const addComment = useMutation({
    mutationFn: (data: Omit<IReviewHotel, "id">) => {
      return addReviewHotel({ data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviewHotel", "score"] });
      queryClient.invalidateQueries({
        queryKey: ["reviewHotel", { id, _page: 1 }],
      });
      form.reset();
      setQuery({ _page: 1 });
      setCurrentPage(0);
      toast.success("Comment success", {
        style: {
          backgroundColor: "#4caf50",
          color: "#ffffff",
        },
      });
    },
  });

  console.log(totalData);

  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      message: "",
      star: 0,
    },
  });

  function onSubmit(values: z.infer<typeof commentSchema>) {
    const data = {
      hotelId: Number(id),
      rate: values.star,
      avatar: `url('@/assets/images/Avatar-30.png')`,
      opinion: "Dreamy!",
      time: new Date().toDateString(),
      title: "Romantic escape",
      des: values.message,
    };

    addComment.mutate(data);
  }

  const handleOpenComment = useCallback(() => {
    setIsReview((prev) => !prev);
  }, []);

  console.log("review-form");

  return (
    <>
      <div className="flex gap-8">
        <div className="w-[148px] h-[148px] bg-primary flex justify-center items-center">
          <span className="text-third text-size-5xl">{onAverageRate}</span>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-size-4xl">Wonderful</div>
          <div>
            {totalData} {totalData > 0 ? "Reviews" : "Review"}
          </div>

          <Button
            variant={isReview ? "five" : "primary"}
            size={"third"}
            onClick={handleOpenComment}
          >
            {isReview ? "Close" : "Write a review"}
          </Button>
        </div>
      </div>
      {isReview && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-6"
          >
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <div className="flex gap-2">
                    <div className="">
                      <FaUserCircle className="lg:w-[56px] md:w-[48px] w-[40px] h-auto text-five" />
                    </div>
                    <Textarea
                      value={field.value}
                      onChange={useCallback(
                        (v: ChangeEvent<HTMLTextAreaElement>) => {
                          field.onChange(v);
                        },
                        []
                      )}
                      placeholder="Type anything"
                      className="h-[128px] bg-seven text-four placeholder:text-four"
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full mt-6 flex justify-between">
              <FormField
                control={form.control}
                name="star"
                render={({ field }) => (
                  <FormItem>
                    <div className="">
                      <Rating
                        rating={Number(field.value)}
                        size={30}
                        onRatingChange={(v) => {
                          field.onChange(Number(v));
                        }}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-auto lg:px-10 md:px-8 px-6" size={"third"}>
                Comment
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
};

export default memo(ReviewForm);
