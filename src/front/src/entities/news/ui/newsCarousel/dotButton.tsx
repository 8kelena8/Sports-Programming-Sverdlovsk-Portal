import { cn } from "@/shared/lib/utils";
import React from "react";

export interface DotButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const DotButton = React.forwardRef<HTMLButtonElement, DotButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "border-4 border-primary rounded-full bg-white w-4 h-4 p-0 m-0",
          className
        )}
        {...props}
      />
    );
  }
);

DotButton.displayName = "DotButton";

export default React.memo(DotButton);
