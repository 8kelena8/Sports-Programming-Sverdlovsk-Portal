import { apiMapper } from "@/shared/lib/mapping";
import { ListAPI } from "@/shared/types/generic";
import { PartnerAPI } from "@/shared/types/partner";

const getAllPartners = async () => {
  const response = await fetch(
    new URL("/partner-list", process.env.SERVER_API_URL),
    {
      next: {
        revalidate: parseInt(process.env.SERVER_FETCH_REVALIDATION_SECONDS!),
      },
    }
  );
  const json: ListAPI<PartnerAPI> = await response.json();
  return json.map((p) => apiMapper.mapPartner(p));
};

const partnersController = {
  getAllPartners,
};

export default partnersController;
