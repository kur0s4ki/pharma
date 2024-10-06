import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MedicineServiceBase } from "./base/medicine.service.base";

@Injectable()
export class MedicineService extends MedicineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
