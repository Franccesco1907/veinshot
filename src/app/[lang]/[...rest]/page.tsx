import { notFound } from "next/navigation";

// Any path below /[lang] that no route matched lands here and renders
// the localized not-found boundary instead of Next's default 404.
export default function CatchAll() {
  notFound();
}
