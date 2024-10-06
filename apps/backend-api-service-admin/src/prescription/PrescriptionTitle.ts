import { Prescription as TPrescription } from "../api/prescription/Prescription";

export const PRESCRIPTION_TITLE_FIELD = "id";

export const PrescriptionTitle = (record: TPrescription): string => {
  return record.id?.toString() || String(record.id);
};
