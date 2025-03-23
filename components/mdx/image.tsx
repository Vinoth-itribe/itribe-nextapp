import Image, { StaticImageData } from "next/image";

interface PostImageProps {
  alt: string;
  caption?: string;
  src: StaticImageData;
}

export default function PostImage({ alt, caption, ...props }: PostImageProps) {
  return (
    <figure>
      <div className="relative overflow-hidden rounded-2xl ">
        <Image
          className="m-0 w-full"
          {...props}
          alt={alt}
        />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
