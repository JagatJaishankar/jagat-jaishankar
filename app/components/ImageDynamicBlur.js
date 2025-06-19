import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

export default async function ImageDynamicBlur({ src, alt }) {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      src={src}
      width={281}
      height={281}
      alt={alt}
      quality={80}
      className="rounded-sm max-w-full h-auto"
      placeholder="blur"
      blurDataURL={base64}
    />
  );
}
