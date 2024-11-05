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

  const searchButton = (
    <Button
      size="icon"
      variant="primary"
      className={cn({ "size-6": !collapsed })}
      onClick={onSearchClick}
    >
      <SearchIcon />
    </Button>
  );

  if (collapsed) {
    return searchButton;
  }

  return (
    <div className="relative size-9">
      <div
        ref={ref as RefObject<HTMLDivElement>}
        className={cn(
          "flex items-center gap-2 p-2 absolute z-10 top-1/2 right-0 -translate-y-1/2 bg-white",
          { "-right-11": !!search }
        )}
      >
        <input
          type="text"
          name="search"
          id="search"
          className="bg-transparent ring-0 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск"
        />
        {searchButton}
        {search && (
          <Button size="icon" variant="ghost" onClick={() => setSearch("")}>
            <XIcon />
          </Button>
        )}
      </div>
    </div>
  );
};

export default React.memo(HeaderSearch);
