import * as graphql from "@nestjs/graphql";
import { PharmacistResolverBase } from "./base/pharmacist.resolver.base";
import { Pharmacist } from "./base/Pharmacist";
import { PharmacistService } from "./pharmacist.service";

@graphql.Resolver(() => Pharmacist)
export class PharmacistResolver extends PharmacistResolverBase {
  constructor(protected readonly service: PharmacistService) {
    super(service);
  }
}
