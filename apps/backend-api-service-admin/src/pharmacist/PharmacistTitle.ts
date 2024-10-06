import { Pharmacist as TPharmacist } from "../api/pharmacist/Pharmacist";

export const PHARMACIST_TITLE_FIELD = "id";

export const PharmacistTitle = (record: TPharmacist): string => {
  return record.id?.toString() || String(record.id);
};
