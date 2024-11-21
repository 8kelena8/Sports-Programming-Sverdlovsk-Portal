"use client";

import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface NavigationProps {
  className?: string;
}

const routes = [
  { path: "/", title: "Главная" },
  { path: "/news", title: "Новости" },
  { path: "/events", title: "Событие" },
  { path: "/documents", title: "Документы" },
  { path: "/contacts", title: "Контакты" },
];

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <nav className={className}>
      <ol className="list-none flex max-xl:flex-col gap-5">
        {routes.map((r) => (
          <li key={r.path}>
            <Link
              href={r.path}
              className={cn("font-bold max-xl:text-black", {
                "!text-primary":
                  (pathname === r.path && r.path === "/") ||
                  (pathname.includes(r.path) && r.path !== "/"),
              })}
            >
              {r.title}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default React.memo(Navigation);
