"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Button } from "@/shared/ui/button";
import { Spinner } from "@/shared/ui/spinner";
import { AvatarField } from "./avatar-field";
import { Input } from "@/shared/ui/input";
import { Profile } from "@/entities/user/profile";

const profileFormSchema = z.object({
  name: z
    .string()
    .max(30, { message: "Username must not be longer than 30 characters" })
    .transform((name) => name.trim())
    .optional(),
  email: z.string().email().optional(),
  image: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export const ProfileForm = ({
  onSuccess,
  profile,
  submitText = "Сохранить",
}: {
  profile: Profile;
  onSuccess?: () => void;
  submitText?: string;
}) => {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      email: profile.email,
      image: profile.image ?? undefined,
      name: profile.name ?? "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={console.log} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          disabled
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя пользователя</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          disabled
          render={({ field }) => (
            <FormItem>
              <FormLabel>Аватарка</FormLabel>
              <FormControl>
                <AvatarField value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {false && (
            <Spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-label="Обновление профиля"
            />
          )}
          {submitText}
        </Button>
      </form>
    </Form>
  );
};