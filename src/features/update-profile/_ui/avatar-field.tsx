import { Button } from "@/shared/ui/button";
import { Spinner } from "@/shared/ui/spinner";
import { ProfileAvatar } from "@/entities/user/profile";

export const AvatarField = ({
  value,
  onChange,
}: {
  value?: string;
  onChange: (value?: string) => void;
}) => {
  return (
    <Button
      variant="ghost"
      className="w-[84px] h-[84px] p-0.5 rounded-full relative block"
    >
      {false && (
        <div className="inset-0 absolute flex items-center justify-center z-10">
          <Spinner className="w-10 h-10" aria-label="Загрузка новой аватарки" />
        </div>
      )}
      <ProfileAvatar
        className="h-full w-full"
        profile={{ email: "dmitriysivritkin@gmail.com", image: value }}
      />
    </Button>
  );
};
