import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export function Button(
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      className="bg-black border border-white/25 text-white font-semibold py-2 px-4 rounded-lg hover:bg-white/5 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
      {...props}
    />
  );
}
