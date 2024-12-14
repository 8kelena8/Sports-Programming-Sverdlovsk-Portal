import React from "react";
import SectionHeading from "@/shared/ui/sectionHeading";
import { DisciplineCard } from "@/entities/discipline";
import { serverDisciplinesController } from "@/shared/api/server";
import MobileView from "./mobileView";

export interface DisciplinesSectionProps {}

const DisciplinesSection: React.FC<DisciplinesSectionProps> = async ({}) => {
  const disciplines = await serverDisciplinesController.getAllDisciplines();

  return (
    <section className="">
      <div className="xl:hidden space-y-12">
        <MobileView disciplines={disciplines} />
      </div>
      <div className="max-xl:hidden space-y-12">
        <SectionHeading title="Дисциплины спортивного программирования" />
        <div className="grid grid-cols-3 gap-20">
          {disciplines.map((d) => (
            <DisciplineCard discipline={d} key={d.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisciplinesSection;
