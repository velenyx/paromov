import Link from "next/link";
import { LogoIcon } from "@/shared/ui/logo-icon";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <LogoIcon className="h-6 w-6" />
      <span className="font-bold inline-block">Micro courses</span>
    </Link>
  );
};
