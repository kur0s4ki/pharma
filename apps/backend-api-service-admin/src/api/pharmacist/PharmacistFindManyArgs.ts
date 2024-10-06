import { PharmacistWhereInput } from "./PharmacistWhereInput";
import { PharmacistOrderByInput } from "./PharmacistOrderByInput";

export type PharmacistFindManyArgs = {
  where?: PharmacistWhereInput;
  orderBy?: Array<PharmacistOrderByInput>;
  skip?: number;
  take?: number;
};
