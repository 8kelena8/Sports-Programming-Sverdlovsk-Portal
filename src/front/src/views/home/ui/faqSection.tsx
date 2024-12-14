import React from "react";
import SectionHeading from "@/shared/ui/sectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";
import { FAQAskButton } from "@/features/order";

const faqs = [
  {
    question: "Как получить разряд по спортивному программированию?",
    answer:
      "Ознакомиться с документацией, регулирующей антидопинговую политику Ознакомиться с документацией, регулирующей антидопинговую политику",
  },
  {
    question: "Где находится отделение ФСП в Екатеринбурге?",
    answer:
      "Ознакомиться с документацией, регулирующей антидопинговую политику Ознакомиться с документацией, регулирующей антидопинговую политику",
  },
  {
    question: "Где находится отделение ФСП в Екатеринбурге?",
    answer:
      "Ознакомиться с документацией, регулирующей антидопинговую политику Ознакомиться с документацией, регулирующей антидопинговую политику",
  },
  {
    question: "Где находится отделение ФСП в Екатеринбурге?",
    answer:
      "Ознакомиться с документацией, регулирующей антидопинговую политику Ознакомиться с документацией, регулирующей антидопинговую политику",
  },
  {
    question: "Где находится отделение ФСП в Екатеринбурге?",
    answer:
      "Ознакомиться с документацией, регулирующей антидопинговую политику Ознакомиться с документацией, регулирующей антидопинговую политику",
  },
];

const FAQSection: React.FC = ({}) => {
  return (
    <section className="space-y-12">
      <SectionHeading title="Часто задаваемые вопросы" />
      <div className="grid grid-cols-2 max-xl:grid-cols-1 max-xl:gap-12">
        <div className="space-y-12">
          <p className="font-bold text-4xl max-xl:text-xl">
            Некоторые важные ответы на часто задаваемые вопросы
          </p>
          <p>Некоторые важные ответы на часто задаваемые вопросы</p>
          <FAQAskButton />
        </div>

        <div className="">
          <Accordion type="single" collapsible>
            {faqs.map((item, i) => (
              <AccordionItem value={i.toString()} key={i}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default React.memo(FAQSection);
