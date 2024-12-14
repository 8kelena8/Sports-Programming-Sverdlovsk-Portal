import { Document } from "@/shared/types/document";
import { Button } from "@/shared/ui/button";
import { FileTextIcon } from "lucide-react";
import React from "react";

export interface DocumentCardProps {
  document: Document;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  return (
    <div className="p-5 space-y-5 bg-white text-black">
      <FileTextIcon size={50} strokeWidth={1} />
      <h3 className="font-bold xl:text-2xl uppercase">{document.title}</h3>
      <p></p>
      <div className="">
        <a href={document.fileLink} target="_blank">
          <Button variant="primary">Просмотреть</Button>
        </a>
      </div>
    </div>
  );
};

export default React.memo(DocumentCard);
