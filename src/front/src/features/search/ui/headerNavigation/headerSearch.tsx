"use client";

import useOutsideClick from "@/shared/hooks/useOutsideClick";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { SearchIcon, XIcon } from "lucide-react";
import React, { RefObject, useCallback, useState } from "react";

export interface SearchProps {
  onCollapse?: (isCollapsed: boolean) => void;
}

const HeaderSearch: React.FC<SearchProps> = ({ onCollapse }) => {
  const [collapsed, setCollapsed] = useState(true);
  const collapse = useCallback(() => {
    setCollapsed(true);
    if (onCollapse) onCollapse(true);
  }, [onCollapse]);
  const ref = useOutsideClick(collapse);
  const [search, setSearch] = useState("");

  const onSearchClick = () => {
    if (collapsed) {
      setCollapsed(false);
      if (onCollapse) onCollapse(false);
    } else {
    }
  };

  return (
    <div className="group" data-collapse={collapsed}>
      <Button
        size="icon"
        variant="primary"
        className="group-data-[collapse=false]:hidden max-xl:hidden"
        onClick={onSearchClick}
      >
        <SearchIcon />
      </Button>
      <div className="relative xl:size-9 group-data-[collapse=true]:xl:hidden">
        <div
          ref={ref as RefObject<HTMLDivElement>}
          className={cn(
            "flex items-center gap-2 p-2 xl:absolute xl:z-10 xl:top-1/2 xl:right-0 xl:-translate-y-1/2 bg-white",
            { "xl:-right-11": !!search }
          )}
        >
          <input
            type="text"
            name="search"
            id="search"
            className="bg-transparent ring-0 outline-none max-xl:text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск"
          />
          <Button size="icon" variant="primary" onClick={onSearchClick}>
            <SearchIcon />
          </Button>
          {search && (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setSearch("")}
              className="max-xl:absolute max-xl:left-[calc(100%-5px)]"
            >
              <XIcon />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeaderSearch);
