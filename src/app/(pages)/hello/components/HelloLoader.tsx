"use client";

import { useQuery } from "@tanstack/react-query";
import { getHello } from "../utils";
import { HelloResponse } from "../types";

export const HelloLoader = () => {
  const { data, isLoading, isError, error } = useQuery<HelloResponse>({
    queryFn: async () => await getHello(),
    queryKey: ["hello"],
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError && error) {
    return <pre>{error.message}</pre>;
  }

  return <p>{data?.test}</p>;
};
