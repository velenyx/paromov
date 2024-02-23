"use client";

import { Spinner } from "@/shared/ui/spinner";
import { ProfileForm } from "./_ui/profile-form";
import { useQuery } from "@tanstack/react-query";
import { getProfileQuery } from "@/entities/user/profile";

export const UpdateProfileForm = ({
  userId,
  callbackUrl,
}: {
  userId: string;
  callbackUrl?: string;
}) => {
  const profileQuery = useQuery({
    ...getProfileQuery(userId),
  });

  if (profileQuery.isPending) {
    return <Spinner aria-label="Загрузка профиля" />;
  }

  if (!profileQuery.data) {
    return <div>Не удалось загрузить профиль, возможно у вас нет прав</div>;
  }

  return (
    <ProfileForm
      profile={profileQuery.data.profile}
      submitText={callbackUrl ? "Продолжить" : "Сохранить"}
    />
  );
};
