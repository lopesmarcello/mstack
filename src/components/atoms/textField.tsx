import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export const TextField = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <input
      type="text"
      className="w-full bg-white border border-gray-300 rounded-lg py-2 px-4 text-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition duration-300 ease-in-out placeholder-gray-400"
      {...props}
    />
  );
};
