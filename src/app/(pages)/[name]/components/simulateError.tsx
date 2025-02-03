"use client";

import { Button } from "@/components/atoms/button";
import { toast } from "react-toastify";

interface SimulateErrorButton {
  name: string;
}

export const SimulateErrorButton = ({ name }: SimulateErrorButton) => {
  return (
    <Button
      onClick={() =>
        toast.error(`Hey, whats wrong? ${name} is a cool name! 😭`, {
          autoClose: 3000,
        })
      }
    >
      Simulate error
    </Button>
  );
};
