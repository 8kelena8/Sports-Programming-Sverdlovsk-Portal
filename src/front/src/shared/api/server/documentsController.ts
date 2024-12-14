import { apiMapper } from "@/shared/lib/mapping";
import { DocumentAPI } from "@/shared/types/document";
import { ListAPI } from "@/shared/types/generic";

const getAllDocuments = async () => {
  const response = await fetch(
    new URL("/document-list", process.env.SERVER_API_URL),
    {
      next: {
        revalidate: parseInt(process.env.SERVER_FETCH_REVALIDATION_SECONDS!),
      },
    }
  );
  const json: ListAPI<DocumentAPI> = await response.json();
  return json.map((d) => apiMapper.mapDocuments(d));
};

const getDocumentCategories = async () => {
  const documents = await getAllDocuments();
  return [...new Set(documents.map((d) => d.category))];
};

const documentsController = {
  getAllDocuments,
  getDocumentCategories,
};

export default documentsController;
