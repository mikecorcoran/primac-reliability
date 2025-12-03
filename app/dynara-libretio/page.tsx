import { Metadata } from "next";
import { DynaraExperience } from "@/components/DynaraExperience";

export const metadata: Metadata = {
  title: "Dynara Libretio | Condition Monitoring for Critical Machinery",
  description:
    "Primac Reliability delivers integrated vibration and condition monitoring to eliminate unplanned downtime across industrial operations.",
};

export default function DynaraPage() {
  return <DynaraExperience />;
}
