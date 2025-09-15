import { LegacyAnimationControls } from "framer-motion";
import { HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLAnchorElement> & {
  name: string;
  icon: React.ReactElement;
  href: string;
  controls: LegacyAnimationControls;
  custom: number;
};
