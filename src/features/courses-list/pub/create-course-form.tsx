"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "@/shared/ui/textarea";
import { Input } from "@/shared/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { Button } from "@/shared/ui/button";
import { createCourseAction } from "../actions";
import { cn } from "@/shared/ui/utils";

const createCourseFormSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const CreateCourseForm = ({
  className,
  revalidatePagePath,
}: {
  className: string;
  revalidatePagePath: string;
}) => {
  const [isCreateTransition, startCreateTransition] = useTransition();
  const form = useForm({
    resolver: zodResolver(createCourseFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = (data: z.infer<typeof createCourseFormSchema>) => {
    startCreateTransition(async () => {
      createCourseAction(data, revalidatePagePath);
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(className, "space-y-8")}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название</FormLabel>
              <FormControl>
                <Input placeholder="Название..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea placeholder="Описание..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isCreateTransition} type="submit">
          Добавить
        </Button>
      </form>
    </Form>
  );
};
