import { Metadata } from "next";
import { DynaraExperience } from "@/components/DynaraExperience";

export const metadata: Metadata = {
  title: "Dynara Libretio | Immersive Reliability Atlas 2026",
  description:
    "A cinematic reliability theatre that layers living data, precision choreography, and Primac's guardian discipline.",
};

export default function DynaraPage() {
  return <DynaraExperience />;
}
