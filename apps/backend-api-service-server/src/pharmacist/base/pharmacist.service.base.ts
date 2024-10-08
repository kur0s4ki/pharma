/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Pharmacist as PrismaPharmacist } from "@prisma/client";

export class PharmacistServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PharmacistCountArgs, "select">
  ): Promise<number> {
    return this.prisma.pharmacist.count(args);
  }

  async pharmacists(
    args: Prisma.PharmacistFindManyArgs
  ): Promise<PrismaPharmacist[]> {
    return this.prisma.pharmacist.findMany(args);
  }
  async pharmacist(
    args: Prisma.PharmacistFindUniqueArgs
  ): Promise<PrismaPharmacist | null> {
    return this.prisma.pharmacist.findUnique(args);
  }
  async createPharmacist(
    args: Prisma.PharmacistCreateArgs
  ): Promise<PrismaPharmacist> {
    return this.prisma.pharmacist.create(args);
  }
  async updatePharmacist(
    args: Prisma.PharmacistUpdateArgs
  ): Promise<PrismaPharmacist> {
    return this.prisma.pharmacist.update(args);
  }
  async deletePharmacist(
    args: Prisma.PharmacistDeleteArgs
  ): Promise<PrismaPharmacist> {
    return this.prisma.pharmacist.delete(args);
  }
}
