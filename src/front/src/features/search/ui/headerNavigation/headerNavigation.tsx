"use client";

import { Navigation } from "@/shared/ui/layout";
import React, { useState } from "react";
import HeaderSearch from "./headerSearch";

export interface HeaderNavigationProps {}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({}) => {
  const [isSearchCollapsed, setCollapse] = useState(true);

  return (
    <div className="flex max-xl:flex-col items-center gap-5">
      <div className={isSearchCollapsed ? "" : "xl:hidden"}>
        <Navigation />
      </div>
      <HeaderSearch onCollapse={setCollapse} />
    </div>
  );
};

export default React.memo(HeaderNavigation);
