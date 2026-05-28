import { AnimatedText } from "@/components/animated-text";
import { CopyText } from "@/components/copy-text";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@v1/ui/tooltip";
import { redirect } from "next/navigation";

export default function Page() {
  redirect("/en");
}
