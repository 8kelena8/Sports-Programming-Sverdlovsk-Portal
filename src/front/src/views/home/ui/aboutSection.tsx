import Image from "next/image";
import React from "react";
import SectionHeading from "./sectionHeading";
import { Separator } from "@/shared/ui/separator";

export interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = ({}) => {
  return (
    <section className="">
      <div className="grid grid-cols-2 gap-10 max-xl:grid-cols-1">
        <div className="relative">
          <Image
            src="/img/about.png"
            alt="О нас"
            width={796}
            height={604}
            className="object-cover h-[604px]"
          />
          <div className="absolute -bottom-12 left-6 bg-base-900 p-12 max-w-96 max-xl:p-5">
            <p className="text-6xl font-bold text-primary">89</p>
            <p className="text-lg max-xl:text-sm text-balance font-bold">
              действующих региональных представительств ФСП в России
            </p>
          </div>
        </div>

        <div className="h-full flex flex-col justify-between max-xl:order-first max-xl:space-y-10">
          <SectionHeading title="О нас" />
          <h3 className="font-bold text-4xl max-xl:text-xl">
            Спортивное программирование
          </h3>
          <p className="xl:text-lg">
            Разновидность интеллектуального спорта. Соревнования включают
            решение набора задач или одной задачи: написание программы на одном
            из языков программирования в режиме ограниченного времени, в
            соответствующем сегменте IT-отрасли.
          </p>
          <h3 className="font-bold text-4xl max-xl:text-xl">
            Федерация спортивного программирования
          </h3>
          <p className="xl:text-lg">
            Это общественная спортивная организация, которая развивает и
            популяризирует спортивное программирование в России, проводит
            соревнования национального уровня. Мы также занимаемся формированием
            национальных сборных, обучением и аттестацией спортивных судей,
            аккредитацией площадок, подготовкой методических материалов,
            образовательными проектами, развитием клубов и секций.
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-20 gap-5 max-xl:flex-col max-xl:text-center">
        <div className="space-y-2">
          <p className="font-bold text-2xl max-xl:text-xl">19 октября 2021</p>
          <p className="xl:text-lg">
            Дата основания Федерации спортивного программирования
          </p>
        </div>
        <Separator className="self-center max-xl:w-1/3 max-xl:h-1 w-1 h-14 bg-primary" />
        <div className="space-y-2">
          <p className="font-bold text-2xl max-xl:text-xl">12 апреля 2022</p>
          <p className="xl:text-lg">
            Спортивное программирование было официально признано видом спорта
          </p>
        </div>
        <Separator className="self-center max-xl:w-1/3 max-xl:h-1 w-1 h-14 bg-primary" />
        <div className="space-y-2">
          <p className="font-bold text-2xl max-xl:text-xl">19 октября 2021</p>
          <p className="xl:text-lg">
            Дата основания Федерации спортивного программирования
          </p>
        </div>
        <Separator className="self-center max-xl:w-1/3 max-xl:h-1 w-1 h-14 bg-primary" />
        <div className="space-y-2">
          <p className="font-bold text-2xl max-xl:text-xl">12 апреля 2022</p>
          <p className="xl:text-lg">
            Спортивное программирование было официально признано видом спорта
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutSection);
