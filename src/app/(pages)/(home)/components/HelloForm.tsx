"use client";
import { Button } from "@/components/atoms/button";
import { TextField } from "@/components/atoms/textField";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { sendName } from "../utils";
import { redirect } from "next/navigation";

interface FormFields {
  name: string;
}

export const HelloForm = () => {
  // const router = useRouter();
  const { register, handleSubmit, watch } = useForm<FormFields>();
  const name = watch("name");

  const redirectAfterToast = (name: string) => {
    setTimeout(() => {
      redirect("/" + name);
    }, 100);
  };

  const mutation = useMutation({
    mutationFn: (name: string) => {
      event?.preventDefault();
      return sendName(name);
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("Name sent!", {
        onClose: () => redirectAfterToast(name),
        autoClose: 1500,
      });
    },
  });
  const isLoading = mutation.isPending || mutation.isSuccess;

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    if (!data.name) {
      toast.error("Name required!");
      return;
    }
    mutation.mutate(data.name);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
      <TextField placeholder="Your name" {...register("name")} />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Hello"}
      </Button>
    </form>
  );
};
