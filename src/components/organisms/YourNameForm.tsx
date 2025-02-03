"use client";

import { UseFormRegister } from "react-hook-form";
import { TextField } from "../atoms/textField";
import { HelloFormFields } from "@/app/(pages)/(home)/components/HelloForm";
import { LoadingButton } from "../molecules/loadingButton";

interface YourNameForm {
  isLoading: boolean;
  register: UseFormRegister<HelloFormFields>;
}

export const YourNameForm = ({ isLoading, register }: YourNameForm) => {
  return (
    <>
      <TextField placeholder="Your name" {...register("name")} />
      <LoadingButton loading={isLoading} type="submit" disabled={isLoading}>
        Hello
      </LoadingButton>
    </>
  );
};
