"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string(),
  email: z
    .string()
    .min(1, {
      message: "This field can't be empty",
    })
    .email(),
  company: z.string(),
  title: z.string(),
  textarea: z.string().min(1, {
    message: "This field can't be empty",
  }),
  check: z.boolean().refine((val) => val, {
    message: "You must accept the terms and conditions",
  }),
});

export default function FormContact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      title: "",
      textarea: "",
      check: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(values);
  }

  return (
    <div className="grow px-4 md:max-w-[445px] md:px-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Name"
                    type="text"
                    {...field}
                    className="border-b border-trans-grey bg-transparent"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email Address"
                    type="email"
                    {...field}
                    className="border-b border-trans-grey bg-transparent"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Company Name"
                    type="text"
                    {...field}
                    className="border-b border-trans-grey bg-transparent"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Title"
                    type="text"
                    {...field}
                    className="border-b border-trans-grey bg-transparent"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="textarea"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    {...field}
                    className="border-b border-trans-grey bg-transparent"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="check"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-4 space-y-0 rounded-md border border-slate-300 p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="h-[20px] w-[20px]"
                  />
                </FormControl>

                <FormMessage className="text-base leading-5" />

                <div className="w-[280px] md:w-[395px]">
                  <FormDescription className="text-[15px] leading-5">
                    Stay up-to-date with company announcements and updates to
                    our API
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            variant="ghost"
            className="rounded-full border border-slate-800 px-10 py-5 text-[15px] font-bold transition-colors hover:bg-shade-grey hover:text-white"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
