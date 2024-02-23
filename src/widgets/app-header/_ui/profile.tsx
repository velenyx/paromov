"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Button } from "@/shared/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import Link from "next/link";
import { LogOut, User } from "lucide-react";
import { useSignOut } from "@/features/auth/use-sign-out";
import { Skeleton } from "@/shared/ui/skeleton";
import { SignInButton } from "@/features/auth/sign-in-button";
import { useAppSession } from "@/entities/user/session.client";

export const Profile = () => {
  const session = useAppSession();
  const { signOut, isPending: isPendingSignOut } = useSignOut();

  if (session.status === "loading") {
    return <Skeleton className="w-8 h-8 rounded-full" />;
  }

  if (session.status === "unauthenticated") {
    return <SignInButton />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="p-px rounded-full self-center h-8 w-8"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={session.data?.user?.image ?? undefined} />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-2">
        <DropdownMenuLabel>
          <p>Мой аккаунт</p>
          <p className="text-xs text-muted-foreground overflow-hidden text-ellipsis">
            {session.data?.user?.name}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuGroup></DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={`/profile/1`}>
              <User className="w-4 h-4 mr-2" />
              <span>Профиль</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={isPendingSignOut}
            onClick={() => signOut()}
          >
            <LogOut className="w-4 h-4 mr-2" />
            <span>Выход</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
