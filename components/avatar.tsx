import {
  Avatar as AvatarUI,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  name: string;
};

export function Avatar({ src, alt, name }: Props) {
  return (
    <AvatarUI>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{getInitials(name)}</AvatarFallback>
    </AvatarUI>
  );
}
