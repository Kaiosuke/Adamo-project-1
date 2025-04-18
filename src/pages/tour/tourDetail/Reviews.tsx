// import Pagination from "../../../components/paginations/Pagination";
import Pagination from "@/components/paginations/Pagination";
import ReviewTour from "@/components/reviews/ReviewTour";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch } from "@/redux";
import { reviewSelector } from "@/redux/selectors/reviewSelector";
import { tourSelector } from "@/redux/selectors/tourSelector";
import { commentSchema } from "@/schemas/reivewSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { z } from "zod";

import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { CommentRatings } from "@/components/ui/Rating";
import { useDebouncedCallback } from "use-debounce";
import { useParams } from "react-router";
import { addReviewTour } from "@/api/reviewRequest";
import { IReviewTourLackId } from "@/interfaces/review";
import { toast } from "sonner";

interface Props {
  currentPage: number;
  pageCount: number;
  setCurrentPage: (value: number) => void;
}

const Reviews = ({ currentPage, pageCount, setCurrentPage }: Props) => {
  const { tour } = useSelector(tourSelector);
  const { reviewsTour } = useSelector(reviewSelector);

  const { id } = useParams();

  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      message: "",
      star: 0,
    },
  });

  const onSubmit = useDebouncedCallback(
    (values: z.infer<typeof commentSchema>) => {
      (async () => {
        if (id) {
          const data: IReviewTourLackId = {
            tourId: Number(id),
            rate: values.star,
            avatar: `url('@/assets/images/Avatar-1.png')`,
            opinion: "Nevermind",
            time: new Date().toDateString(),
            title: "The best experience ever",
            des: values.message,
          };
          try {
            await dispatch(addReviewTour({ data: data })).unwrap();
            toast.success("Comment successfully!!");
            form.reset();
          } catch (error) {
            toast.error(String(error));
          }
        }
      })();
    },
    300
  );

  return (
    <>
      {tour && (
        <div>
          <div className="bg-seven h-[291px] rounded-lg lg:p-8 md:p-6 p-4">
            <div className="flex h-full md:flex-row flex-col">
              <div className="flex-[0_0_35%]">
                <div className="flex justify-center md:items-center h-full flex-col gap-2">
                  <div className="text-secondary text-size-5xl">4/5</div>
                  <div className="text-secondary flex items-center gap-2">
                    <FaStar className="text-nine" />
                    <FaStar className="text-nine" />
                    <FaStar className="text-nine" />
                    <FaStar className="text-nine" />
                    <FaStar className="text-four" />
                  </div>
                  <div className="text-four font-semibold">
                    Based on{" "}
                    <span className="text-secondary">
                      {reviewsTour.length}{" "}
                      {reviewsTour.length > 0 ? "reviews" : "review"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-[0_0_auto] w-[2px] h-full bg-five mx-6 md:block hidden" />
              <div className="flex-[0_0_auto] w-full h-[1px] my-2 bg-five md:hidden block" />

              <div className="flex-[0_0_64%]">
                <div className="flex flex-col h-full justify-evenly">
                  <div className="flex items-center gap-2">
                    <span>5</span>
                    <FaStar className="text-four" />
                    <div className="flex-[0_0_50%] h-[8px] rounded-2xl flex">
                      <div className="bg-nine flex-[0_0_80%] rounded-l-lg" />
                      <div className="bg-five flex-[1_0_auto] rounded-r-lg" />
                    </div>
                    <span>42 reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>4</span>
                    <FaStar className="text-four" />
                    <div className="flex-[0_0_50%] h-[8px] rounded-2xl flex">
                      <div className="bg-nine flex-[0_0_30%] rounded-l-lg" />
                      <div className="bg-five flex-[1_0_auto] rounded-r-lg" />
                    </div>
                    <span>21 reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>3</span>
                    <FaStar className="text-four" />
                    <div className="flex-[0_0_50%] h-[8px] rounded-2xl flex">
                      <div className="bg-nine flex-[0_0_75%] rounded-l-lg" />
                      <div className="bg-five flex-[1_0_auto] rounded-r-lg" />
                    </div>
                    <span>46 reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>2</span>
                    <FaStar className="text-four" />
                    <div className="flex-[0_0_50%] h-[8px] rounded-2xl flex">
                      <div className="bg-nine flex-[0_1_0%] rounded-l-lg" />
                      <div className="bg-five flex-[1_0_auto] rounded-lg" />
                    </div>
                    <span>0 review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>1 </span>
                    <FaStar className="text-four ml-1" />
                    <div className="flex-[0_0_50%] h-[8px] rounded-2xl flex">
                      <div className="bg-nine flex-[0_1_0%] rounded-l-lg" />
                      <div className="bg-five flex-[1_0_auto] rounded-lg" />
                    </div>
                    <span>0 review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="str-line-2" />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                        onChange={(v) => {
                          field.onChange(v);
                        }}
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
                        <CommentRatings
                          rating={Number(field.value)}
                          size={30}
                          onRatingChange={(v) => {
                            field.onChange(Number(v));
                          }}
                          variant="yellow"
                          totalStars={5}
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

          <div className="str-line-2" />
          <div>
            <div className="flex flex-col gap-4">
              {reviewsTour.map((review, index) => (
                <div key={index}>
                  <ReviewTour review={review} />
                </div>
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              pageCount={pageCount}
              onPageChange={(e) => {
                setCurrentPage(e);
                localStorage.setItem("currentReviewTour", e.toLocaleString());
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Reviews;
