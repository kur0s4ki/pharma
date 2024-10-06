import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PharmacistServiceBase } from "./base/pharmacist.service.base";

@Injectable()
export class PharmacistService extends PharmacistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
