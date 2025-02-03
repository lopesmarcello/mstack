"use client";

import { UseFormRegister } from "react-hook-form";
import { Button } from "../atoms/button";
import { TextField } from "../atoms/textField";
import { HelloFormFields } from "@/app/(pages)/(home)/components/HelloForm";

interface YourNameForm {
  isLoading: boolean;
  register: UseFormRegister<HelloFormFields>;
}

export const YourNameForm = ({ isLoading, register }: YourNameForm) => {
  return (
    <>
      <TextField placeholder="Your name" {...register("name")} />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Hello"}
      </Button>
    </>
  );
};
