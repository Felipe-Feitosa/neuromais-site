import Image from "next/image";
import { withBasePath } from "@/lib/base-path";

type LogoProps = {
  className?: string;
  /** Rendered height; width follows the source image's own aspect ratio. */
  heightClassName?: string;
  /** Only the above-the-fold instance (header) should preload. */
  priority?: boolean;
};

/** Wordmark + symbol lockup, from the client's official brand file (logo sem fundo.png). */
export function NeuroLogo({ className, heightClassName = "h-9", priority = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className ?? ""}`}>
      <Image
        src={withBasePath("/brand/neuro-logo.png")}
        alt="Neuro+"
        width={590}
        height={347}
        priority={priority}
        className={`w-auto ${heightClassName}`}
      />
    </span>
  );
}
