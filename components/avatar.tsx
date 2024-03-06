import {
  Avatar as AvatarUI,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { cn, getInitials } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  name: string;
  size?: number;
};

export function Avatar({ src, alt, name, size }: Props) {
  return (
    <AvatarUI
      className={cn(
        `border border-border`,
        size && `w-[${size}px] h-[${size}px]`
      )}
    >
      <AvatarImage src={src} alt={alt} className="object-cover object-top " />
      <AvatarFallback>{getInitials(name)}</AvatarFallback>
    </AvatarUI>
  );
}
