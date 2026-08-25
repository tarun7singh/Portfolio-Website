import { useAnimationControls } from "framer-motion";
import { HTMLAttributes, ReactElement } from "react";

type AnimationControls = ReturnType<typeof useAnimationControls>;

export type Props = HTMLAttributes<HTMLAnchorElement> & {
  name: string;
  icon: ReactElement<{ className?: string }>;
  href: string;
  controls: AnimationControls;
  custom: number;
};
