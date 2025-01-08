import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge and resolve Tailwind class names
 * @param  {...string | undefined | null} classes - Class names to merge
 * @returns {string} - Resolved class names
 */
export function cx(...classes) {
  return twMerge(clsx(...classes));
}
