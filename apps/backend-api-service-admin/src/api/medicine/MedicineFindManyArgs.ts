import { MedicineWhereInput } from "./MedicineWhereInput";
import { MedicineOrderByInput } from "./MedicineOrderByInput";

export type MedicineFindManyArgs = {
  where?: MedicineWhereInput;
  orderBy?: Array<MedicineOrderByInput>;
  skip?: number;
  take?: number;
};
