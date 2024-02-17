import Link from "next/link";

export const MainNav = () => {
  return (
    <nav className="flex items-start md:items-center gap-6 text-sm font-medium flex-col md:flex-row">
      <Link
        href="/map"
        className="transition-colors hover:text-foreground/80 text-foreground/60"
      >
        Карта
      </Link>
      <Link
        href="/learn"
        className="transition-colors hover:text-foreground/80 text-foreground/60"
      >
        Обучение
      </Link>
    </nav>
  );
};
