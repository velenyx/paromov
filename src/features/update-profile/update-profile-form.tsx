"use client";

import { Spinner } from "@/shared/ui/spinner";
import { ProfileForm } from "./_ui/profile-form";
import { useQuery } from "@tanstack/react-query";
import { getProfileQuery } from "@/entities/user/profile";
import { useRouter } from "next/navigation";

export const UpdateProfileForm = ({
  userId,
  callbackUrl,
}: {
  userId: string;
  callbackUrl?: string;
}) => {
  const router = useRouter();
  const profileQuery = useQuery({
    ...getProfileQuery(userId),
  });

  const handleSuccess = () => {
    if (callbackUrl) {
      router.push(callbackUrl);
    }
  };

  if (profileQuery.isPending) {
    return <Spinner aria-label="Загрузка профиля" />;
  }

  if (!profileQuery.data) {
    return <div>Не удалось загрузить профиль, возможно у вас нет прав</div>;
  }

  return (
    <ProfileForm
      userId={userId}
      profile={profileQuery.data.profile}
      onSuccess={handleSuccess}
      submitText={callbackUrl ? "Продолжить" : "Сохранить"}
    />
  );
};
