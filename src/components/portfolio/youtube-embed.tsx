import { cn } from "@/lib/utils";

type YoutubeEmbedProps = {
  embedUrl: string;
  className?: string;
};

export default function YoutubeEmbed({
  embedUrl,
  className,
}: YoutubeEmbedProps) {
  return (
    <iframe
      className={cn("w-full aspect-video", className)}
      src={embedUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
