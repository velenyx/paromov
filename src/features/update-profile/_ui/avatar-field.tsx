import { Button } from "@/shared/ui/button";
import { Spinner } from "@/shared/ui/spinner";
import { ProfileAvatar } from "@/entities/user/profile";
import { useUploadAvatar } from "@/features/update-profile/_vm/use-upload-avatar";

export const AvatarField = ({
  email,
  value,
  onChange,
}: {
  email: string;
  value?: string;
  onChange: (value?: string) => void;
}) => {
  const uploadAvatar = useUploadAvatar({
    onSuccess: onChange,
  });

  return (
    <Button
      variant="ghost"
      className="w-[84px] h-[84px] p-0.5 rounded-full relative block"
      type="button"
      onClick={uploadAvatar.upload}
    >
      {uploadAvatar.isPending && (
        <div className="inset-0 absolute flex items-center justify-center z-10">
          <Spinner className="w-10 h-10" aria-label="Загрузка новой аватарки" />
        </div>
      )}
      <ProfileAvatar
        className="h-full w-full"
        profile={{ email, image: value }}
      />
    </Button>
  );
};
