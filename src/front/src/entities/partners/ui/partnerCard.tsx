"use client";

import { cn } from "@/shared/lib/utils";
import { Partner } from "@/shared/types/partner";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export interface PartnerCardProps {
  partner: Partner;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="grid gap-5 grid-cols-[auto_1fr_auto]">
      <Image
        src="/img/partner.png"
        alt={partner.name}
        width={400}
        height={400}
        className={cn(
          "max-w-40 max-h-40 max-lg:max-w-20 max-lg:max-h-20 object-contain",
          {
            "lg:max-w-96 lg:max-h-96": !collapsed,
          }
        )}
      />
      <div className="text-white space-y-5 max-lg:flex max-lg:items-center">
        <h3 className="text-2xl max-lg:text-xl">{partner.name}</h3>
        <p className={cn("max-lg:hidden line-clamp-1", { hidden: !collapsed })}>
          {partner.promotionalContent}
        </p>
        <p className={cn("", { hidden: collapsed })}>
          {partner.promotionalContent}
        </p>
      </div>
      <button
        className={cn(
          "border-none bg-transparent p-0 text-primary transition-transform duration-300",
          {
            "rotate-180": !collapsed,
          }
        )}
        onClick={() => setCollapsed((prev) => !prev)}
      >
        <ArrowDownIcon />
      </button>
    </div>
  );
};

export default React.memo(PartnerCard);
