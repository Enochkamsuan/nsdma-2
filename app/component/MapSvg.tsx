"use client";

import { mapSvgMarkup } from "./mapSvgMarkup";

export default function MapSvg() {
  return (
    <div
     className="w-full"
      dangerouslySetInnerHTML={{
        __html: mapSvgMarkup,
      }}
    />
  );
}
