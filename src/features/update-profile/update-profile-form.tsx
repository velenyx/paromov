"use client";

import { Spinner } from "@/shared/ui/spinner";
import { ProfileForm } from "./_ui/profile-form";

export const UpdateProfileForm = ({
  userId,
  callbackUrl,
}: {
  userId: string;
  callbackUrl?: string;
}) => {
  if (false) {
    return <Spinner aria-label="Загрузка профиля" />;
  }

  if (false) {
    return <div>Не удалось загрузить профиль, возможно у вас нет прав</div>;
  }

  return <ProfileForm submitText={callbackUrl ? "Продолжить" : "Сохранить"} />;
};
