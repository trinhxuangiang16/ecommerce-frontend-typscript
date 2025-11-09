import type { TLoading } from "@customTypes/shared";
// import type React from "react";

interface LoadingProps {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
}

export default function Loading({ status, error, children }: LoadingProps) {
  if (status === "pending") {
    return <p>Loading please wait!</p>;
  }
  if (status === "failed") {
    return <p>{error}</p>;
  }
  return <>{children}</>;
}
