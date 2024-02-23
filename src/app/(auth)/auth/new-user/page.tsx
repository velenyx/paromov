import { Separator } from "@/shared/ui/separator";

export default function NewUserPage() {
  return (
    <main className="container py-14 space-y-6 max-w-[600px]">
      <div>
        <h3 className="text-lg font-medium">Последний шаг</h3>
        <p className="text-sm text-muted-foreground">
          Обновите профиль, это как другие пользователи увидят вас на сайте
        </p>
      </div>
      <Separator />
    </main>
  );
}
