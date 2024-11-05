import React from "react";
import SectionHeading from "./sectionHeading";
import { Discipline } from "@/shared/types/discipline";
import { DisciplineCard } from "@/entities/discipline";

export interface DisciplinesSectionProps {}

const disciplines: Discipline[] = [
  {
    id: 0,
    name: "Продуктовое программирование (хакатон)",
    history:
      "Создание программных продуктов (приложений, сайтов, сервисов), отвечающих заданным требованиям и выполняющих определенные прикладные задачи",
    rules: "",
  },
  {
    id: 1,
    name: "Продуктовое программирование (хакатон)",
    history:
      "Создание программных продуктов (приложений, сайтов, сервисов), отвечающих заданным требованиям и выполняющих определенные прикладные задачи",
    rules: "",
  },
  {
    id: 2,
    name: "Продуктовое программирование (хакатон)",
    history:
      "Создание программных продуктов (приложений, сайтов, сервисов), отвечающих заданным требованиям и выполняющих определенные прикладные задачи",
    rules: "",
  },
  {
    id: 3,
    name: "Продуктовое программирование (хакатон)",
    history:
      "Создание программных продуктов (приложений, сайтов, сервисов), отвечающих заданным требованиям и выполняющих определенные прикладные задачи",
    rules: "",
  },
  {
    id: 4,
    name: "Продуктовое программирование (хакатон)",
    history:
      "Создание программных продуктов (приложений, сайтов, сервисов), отвечающих заданным требованиям и выполняющих определенные прикладные задачи",
    rules: "",
  },
  {
    id: 5,
    name: "Продуктовое программирование (хакатон)",
    history:
      "Создание программных продуктов (приложений, сайтов, сервисов), отвечающих заданным требованиям и выполняющих определенные прикладные задачи",
    rules: "",
  },
];

const DisciplinesSection: React.FC<DisciplinesSectionProps> = ({}) => {
  return (
    <section className="space-y-12">
      <SectionHeading title="Дисциплины спортивного программирования" />
      <div className="grid grid-cols-3 gap-20">
        {disciplines.map((d) => (
          <DisciplineCard discipline={d} key={d.id} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(DisciplinesSection);
