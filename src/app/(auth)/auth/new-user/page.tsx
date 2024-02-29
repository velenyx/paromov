import { Separator } from "@/shared/ui/separator";
import { UpdateProfileForm } from "@/features/update-profile/update-profile-form";
import { getAppSessionServer } from "@/entities/user/session.server";
import { redirect } from "next/navigation";

export default async function NewUserPage({
  searchParams,
}: {
  searchParams: { callbackUrl?: string };
}) {
  const session = await getAppSessionServer();

  if (!session) {
    return redirect("/auth/sign-in");
  }

  return (
    <main className="container py-14 space-y-6 max-w-[600px]">
      <div>
        <h3 className="text-lg font-medium">Последний шаг</h3>
        <p className="text-sm text-muted-foreground">
          Обновите профиль, это как другие пользователи увидят вас на сайте
        </p>
      </div>
      <Separator />
      <UpdateProfileForm
        userId={session.user.id}
        callbackUrl={searchParams.callbackUrl}
      />
    </main>
  );
}
