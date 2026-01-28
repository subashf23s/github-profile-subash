import type { ComponentProps } from "react";

export const Card = ({ className = "", ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="card"
      className={`flex flex-col gap-4 rounded-xl border border-gray-200 p-6 shadow-sm dark:shadow-pink-400 ${className}`}
      {...props}
    />
  );
};
export const CardIcon = ({
  className = "",
  ...props
}: ComponentProps<"div">) => {
  return <div data-slot="card-icon" className={` ${className}`} {...props} />;
};
export const CardTitle = ({
  className = "",
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-title"
      className={`text-lg font-semibold ${className}`}
      {...props}
    />
  );
};
export const CardContent = ({
  className = "",
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-content"
      className={`text-sm leading-8 font-medium text-gray-700 dark:text-gray-500 ${className}`}
      {...props}
    />
  );
};
