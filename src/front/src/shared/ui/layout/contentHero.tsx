import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../breadcrumb";
import Link from "next/link";
import { Slash } from "lucide-react";

export interface ContentHeroProps {
  title: string;
  breadcrumbs: {
    title: string;
    link: string;
  }[];
}

const ContentHero: React.FC<ContentHeroProps> = ({ title, breadcrumbs }) => {
  return (
    <div className="w-full bg-base-900 flex flex-col items-center gap-5 p-5">
      <h1 className="text-4xl font-bold uppercase">{title}</h1>
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs
            .map((b, i) => (
              <BreadcrumbItem key={i}>
                <BreadcrumbLink
                  className="text-foreground hover:text-foreground"
                  asChild
                >
                  <Link href={b.link} className="text-foreground">
                    {b.title}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))
            .flatMap((v, i, arr) =>
              arr.length - 1 !== i
                ? [
                    v,
                    <BreadcrumbSeparator key={`slash_${i}`}>
                      <Slash className="text-foreground" />
                    </BreadcrumbSeparator>,
                  ]
                : v
            )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default React.memo(ContentHero);
