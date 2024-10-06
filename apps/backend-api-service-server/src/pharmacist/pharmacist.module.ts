import { Module } from "@nestjs/common";
import { PharmacistModuleBase } from "./base/pharmacist.module.base";
import { PharmacistService } from "./pharmacist.service";
import { PharmacistController } from "./pharmacist.controller";
import { PharmacistResolver } from "./pharmacist.resolver";

@Module({
  imports: [PharmacistModuleBase],
  controllers: [PharmacistController],
  providers: [PharmacistService, PharmacistResolver],
  exports: [PharmacistService],
})
export class PharmacistModule {}
