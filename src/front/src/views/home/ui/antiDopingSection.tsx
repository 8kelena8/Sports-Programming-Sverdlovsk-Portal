import React from "react";
import SectionHeading from "./sectionHeading";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

export interface AntiDopingSectionProps {}

const links = [
  {
    link: "#",
    title: "Официальный сайт Минспорта России, раздел «Антидопинг»",
  },
  {
    link: "#",
    title: "Образовательный антидопинговый онлайн-курс",
  },
  {
    link: "#",
    title: "Информация о дисквалификации",
  },
  {
    link: "#",
    title: "Видеоурок «Система АДАМС: пошаговая видеоинструкция»",
  },
  {
    link: "#",
    title: "Официальный сайт Минспорта России, раздел «Антидопинг»",
  },
];

const AntiDopingSection: React.FC<AntiDopingSectionProps> = ({}) => {
  return (
    <section className="space-y-12">
      <SectionHeading title="Антидопинг" />
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-14 justify-center h-full px-12 bg-base-900">
          <h3 className="font-bold text-4xl">
            Ознакомиться с документацией, регулирующей антидопинговую политику
          </h3>
          <div className="space-y-7">
            {links.map((l, i) => (
              <Link
                href={l.link}
                className="w-full border-b border-white flex gap-2 justify-between"
                key={i}
              >
                <span className="text-lg font-bold truncate">{l.title}</span>
                <Button size="icon" variant="primary" className="size-7">
                  <ChevronRightIcon />
                </Button>
              </Link>
            ))}
          </div>
          <Button variant="primary">Посмотреть все</Button>
        </div>
        <Image
          src="/img/antidoping.png"
          alt="Антидопинг"
          width={816}
          height={792}
          className="object-cover h-[792px]"
        />
      </div>
    </section>
  );
};

export default React.memo(AntiDopingSection);
