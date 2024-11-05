import { Discipline } from "@/shared/types/discipline";
import React from "react";

export interface DisciplineCardProps {
  discipline: Discipline;
}

const DisciplineCard: React.FC<DisciplineCardProps> = ({ discipline }) => {
  return (
    <div className="flex py-7 bg-base-900">
      <div className="bg-background p-6 h-fit">
        <div className="rounded-full w-12 h-12 bg-primary" />
      </div>
      <div className="p-7 space-y-5">
        <h3 className="font-bold text-lg">{discipline.name}</h3>
        <p>{discipline.history}</p>
      </div>
    </div>
  );
};

export default React.memo(DisciplineCard);
