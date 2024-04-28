import * as loom from "@loomhq/loom-embed";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

type YoutubeEmbedProps = {
  embedUrl: string;
};

export default function YoutubeEmbed({ embedUrl }: YoutubeEmbedProps) {
  return (
    <iframe
      className="w-full aspect-video"
      src={embedUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
