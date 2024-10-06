import { Module } from "@nestjs/common";
import { MedicineModuleBase } from "./base/medicine.module.base";
import { MedicineService } from "./medicine.service";
import { MedicineController } from "./medicine.controller";
import { MedicineResolver } from "./medicine.resolver";

@Module({
  imports: [MedicineModuleBase],
  controllers: [MedicineController],
  providers: [MedicineService, MedicineResolver],
  exports: [MedicineService],
})
export class MedicineModule {}
