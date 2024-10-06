import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MedicineService } from "./medicine.service";
import { MedicineControllerBase } from "./base/medicine.controller.base";

@swagger.ApiTags("medicines")
@common.Controller("medicines")
export class MedicineController extends MedicineControllerBase {
  constructor(protected readonly service: MedicineService) {
    super(service);
  }
}
