/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Prescription } from "./Prescription";
import { PrescriptionCountArgs } from "./PrescriptionCountArgs";
import { PrescriptionFindManyArgs } from "./PrescriptionFindManyArgs";
import { PrescriptionFindUniqueArgs } from "./PrescriptionFindUniqueArgs";
import { DeletePrescriptionArgs } from "./DeletePrescriptionArgs";
import { PrescriptionService } from "../prescription.service";
@graphql.Resolver(() => Prescription)
export class PrescriptionResolverBase {
  constructor(protected readonly service: PrescriptionService) {}

  async _prescriptionsMeta(
    @graphql.Args() args: PrescriptionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Prescription])
  async prescriptions(
    @graphql.Args() args: PrescriptionFindManyArgs
  ): Promise<Prescription[]> {
    return this.service.prescriptions(args);
  }

  @graphql.Query(() => Prescription, { nullable: true })
  async prescription(
    @graphql.Args() args: PrescriptionFindUniqueArgs
  ): Promise<Prescription | null> {
    const result = await this.service.prescription(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Prescription)
  async deletePrescription(
    @graphql.Args() args: DeletePrescriptionArgs
  ): Promise<Prescription | null> {
    try {
      return await this.service.deletePrescription(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
