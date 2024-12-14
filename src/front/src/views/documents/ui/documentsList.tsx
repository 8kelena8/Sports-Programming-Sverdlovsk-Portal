"use client";

import { DocumentCard } from "@/entities/document";
import { cn } from "@/shared/lib/utils";
import { Document } from "@/shared/types/document";
import { Button } from "@/shared/ui/button";
import React, { useState } from "react";

export interface DocumentsListProps {
  documents: Document[];
}

const DocumentsList: React.FC<DocumentsListProps> = ({ documents }) => {
  const [category, setCategory] = useState("Все");
  const categories = ["Все", ...new Set(documents.map((d) => d.category))];

  return (
    <section className="space-y-12">
      <div className="flex gap-5 overflow-x-auto">
        {categories.map((c) => (
          <Button
            variant="primary"
            onClick={() => setCategory(c)}
            className={cn({ "bg-white text-primary": c === category })}
            key={c}
          >
            {c}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
        {documents
          .filter((d) => category === "Все" || d.category === category)
          .map((d) => (
            <DocumentCard document={d} key={d.id} />
          ))}
      </div>
      <Button variant="primary" className="block mx-auto">
        Показать ещё
      </Button>
    </section>
  );
};

export default React.memo(DocumentsList);
