"use client";

import { cn } from "@/lib/utils";
import { LoaderIcon } from "lucide-react";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function LoadingImage({
  src,
  width,
  height,
  alt,
  className,
  ...rest
}: ImageProps) {
  const [loading, setLoading] = useState<boolean>(true);

  function onFinishLoading() {
    setLoading(false);
  }

  return (
    <div
      className={cn(
        `rounded-[var(--radius)] bg-secondary`,
        className,
        loading && `relative flex h-fit w-fit items-center justify-center`,
      )}
    >
      {loading && (
        <LoaderIcon className="absolute left-0 right-0 m-auto h-fit w-fit animate-spin" />
      )}
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={cn(className, loading && "opacity-0")}
        onLoad={onFinishLoading}
        {...rest}
      />
    </div>
  );
}
