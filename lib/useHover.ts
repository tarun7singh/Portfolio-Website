import { MutableRefObject, useEffect, useRef, useState } from "react";

export const useHover = <T extends unknown>(): [
  MutableRefObject<T>,
  boolean
] => {
  const [value, setValue] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref: any = useRef<T | null>(null);
  const handleMouseOver = (): void => setValue(true);
  const handleMouseOut = (): void => setValue(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const node: any = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, []);

  return [ref, value];
};
