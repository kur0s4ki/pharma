/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Medicine as PrismaMedicine } from "@prisma/client";

export class MedicineServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MedicineCountArgs, "select">): Promise<number> {
    return this.prisma.medicine.count(args);
  }

  async medicines(
    args: Prisma.MedicineFindManyArgs
  ): Promise<PrismaMedicine[]> {
    return this.prisma.medicine.findMany(args);
  }
  async medicine(
    args: Prisma.MedicineFindUniqueArgs
  ): Promise<PrismaMedicine | null> {
    return this.prisma.medicine.findUnique(args);
  }
  async createMedicine(
    args: Prisma.MedicineCreateArgs
  ): Promise<PrismaMedicine> {
    return this.prisma.medicine.create(args);
  }
  async updateMedicine(
    args: Prisma.MedicineUpdateArgs
  ): Promise<PrismaMedicine> {
    return this.prisma.medicine.update(args);
  }
  async deleteMedicine(
    args: Prisma.MedicineDeleteArgs
  ): Promise<PrismaMedicine> {
    return this.prisma.medicine.delete(args);
  }
}
