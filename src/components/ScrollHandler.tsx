import { MouseEvent } from "react";

export const ScrollHandler = (
  e: MouseEvent<HTMLAnchorElement, MouseEvent>,
  target: string
) => {
  e.preventDefault();
  const targetElement = document.getElementById(target);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
