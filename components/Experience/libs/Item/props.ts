import { useAnimationControls } from "framer-motion";
import { HTMLAttributes } from "react";

type AnimationControls = ReturnType<typeof useAnimationControls>;

export type Props = HTMLAttributes<HTMLDivElement> & {
  title: string;
  place: string;
  date: string;
  custom: number;
  last?: boolean;
  first?: boolean;
  cancelled?: boolean;
  controls?: AnimationControls;
};
