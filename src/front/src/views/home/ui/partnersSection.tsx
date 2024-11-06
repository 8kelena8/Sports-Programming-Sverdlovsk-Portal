"use client";

import React, { useState } from "react";
import SectionHeading from "./sectionHeading";
import { Partner } from "@/shared/types/partner";
import { Button } from "@/shared/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";

const partners: Partner[] = [
  {
    id: 0,
    name: "0",
    logo: "",
    promotionalContent: "",
  },
  {
    id: 1,
    name: "1",
    logo: "",
    promotionalContent: "",
  },
  {
    id: 2,
    name: "2",
    logo: "",
    promotionalContent: "",
  },
  {
    id: 3,
    name: "3",
    logo: "",
    promotionalContent: "",
  },
  {
    id: 4,
    name: "4",
    logo: "",
    promotionalContent: "",
  },
];

const PartnersSection: React.FC = ({}) => {
  const [page, setPage] = useState(1);
  const perPage = 3;
  const maxPage = Math.round(partners.length / perPage);

  return (
    <section className="space-y-12">
      <SectionHeading title="Партнёры и спонсоры" />
      <div className="flex gap-5 items-center">
        <div className="h-[650px] max-w-[420px] p-5 text-center text-2xl font-bold bg-base-900 flex items-center">
          Познакомьтесь с нашими пациентами и спонсорами
        </div>
        <div className="w-full space-y-5">
          <div className="flex gap-5">
            {partners.slice((page - 1) * 3, page * 3).map((p) => (
              <Image
                src="/img/partner.png"
                alt={p.name}
                width={385}
                height={385}
                className="object-contain"
                key={p.id}
              />
            ))}
          </div>
          <div className="flex gap-5 justify-center">
            <Button
              size="icon"
              variant="primary"
              onClick={() => setPage((prev) => prev - 1)}
              disabled={page < 2}
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              size="icon"
              variant="primary"
              onClick={() => setPage((prev) => prev + 1)}
              disabled={page >= maxPage}
            >
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(PartnersSection);
