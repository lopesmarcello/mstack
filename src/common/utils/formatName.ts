import { capitalize } from "./capitalize";

export function formatName(name: string) {
  const decoded = decodeURI(name);
  return capitalize(decoded);
}
