import { addReviewHotel } from "@/api/reviewRequest";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { IReviewHotel } from "@/interfaces/review";
import { commentSchema } from "@/schemas/reviewSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserCircle } from "react-icons/fa";
import { z } from "zod";

const TestQuery = () => {
  const [isReview, setIsReview] = useState(false);

  const addComment = useMutation({
    mutationFn: (data: Omit<IReviewHotel, "id">) => {
      return addReviewHotel({ data });
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
      hotelId: Number(2),
      rate: 9,
      avatar: `url('@/assets/images/Avatar-30.png')`,
      opinion: "Dreamy!",
      time: "Feb 2023",
      title: "Romantic escape",
      des: values.message,
    };

    // addComment.mutate(data, {
    //   onSuccess: () => {
    //     form.reset();
    //     setIsReview(false);
    //   },
    // });
    (async () => {
      try {
        await axios.post("http://localhost:3000/reviewsHotel", data);
      } catch (error) {
        console.log(error);
      }
    })();
  }

  return (
    <div className="">
      <Button
        variant={isReview ? "five" : "primary"}
        size={"third"}
        className="w-[200px]"
        onClick={() => setIsReview((prev) => !prev)}
      >
        {isReview ? "Close" : "Write a review"}
      </Button>
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
    </div>
  );
};

export default TestQuery;
