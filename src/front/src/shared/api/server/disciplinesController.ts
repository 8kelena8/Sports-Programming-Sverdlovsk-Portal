import { apiMapper } from "@/shared/lib/mapping";
import { DisciplineAPI } from "@/shared/types/discipline";
import { ListAPI } from "@/shared/types/generic";

const getAllDisciplines = async () => {
  const response = await fetch(
    new URL("/discipline-list", process.env.SERVER_API_URL),
    {
      next: {
        revalidate: parseInt(process.env.SERVER_FETCH_REVALIDATION_SECONDS!),
      },
    }
  );
  const json: ListAPI<DisciplineAPI> = await response.json();
  return json.map((d) => apiMapper.mapDiscipline(d));
};

const disciplinesController = {
  getAllDisciplines,
};

export default disciplinesController;
