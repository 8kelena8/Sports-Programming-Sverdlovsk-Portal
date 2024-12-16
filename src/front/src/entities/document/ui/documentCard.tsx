import { Document } from "@/shared/types/document";
import { Button } from "@/shared/ui/button";
import { FileTextIcon } from "lucide-react";
import React from "react";

export interface DocumentCardProps {
  document: Document;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  return (
    <div className="p-5 flex flex-col gap-5 bg-white text-black">
      <FileTextIcon size={50} strokeWidth={1} />
      <h3 className="font-bold xl:text-2xl uppercase break-words line-clamp-2">
        {document.title}
      </h3>
      <p></p>
      <Button variant="primary" className="w-fit mt-auto" asChild>
        <a href={document.fileLink} target="_blank">
          Просмотреть
        </a>
      </Button>
    </div>
  );
};

export default React.memo(DocumentCard);
