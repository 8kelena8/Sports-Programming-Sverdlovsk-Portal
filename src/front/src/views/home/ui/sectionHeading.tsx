import { Separator } from "@/shared/ui/separator";
import React from "react";

export interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <div className="flex gap-5 w-full items-center">
      <h2 className="font-bold text-primary text-4xl max-xl:text-2xl">
        {title}
      </h2>
      <Separator className="h-1 bg-base-900 grow w-auto" />
    </div>
  );
};

export default React.memo(SectionHeading);
