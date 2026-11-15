import Image from "next/image";
import { cn } from "@/lib/cn";

export function CoverImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-sand/25",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover object-center", imageClassName)}
      />
    </div>
  );
}
