import { Medicine as TMedicine } from "../api/medicine/Medicine";

export const MEDICINE_TITLE_FIELD = "id";

export const MedicineTitle = (record: TMedicine): string => {
  return record.id?.toString() || String(record.id);
};
