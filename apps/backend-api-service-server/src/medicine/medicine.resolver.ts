import * as graphql from "@nestjs/graphql";
import { MedicineResolverBase } from "./base/medicine.resolver.base";
import { Medicine } from "./base/Medicine";
import { MedicineService } from "./medicine.service";

@graphql.Resolver(() => Medicine)
export class MedicineResolver extends MedicineResolverBase {
  constructor(protected readonly service: MedicineService) {
    super(service);
  }
}
