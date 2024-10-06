import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PharmacistService } from "./pharmacist.service";
import { PharmacistControllerBase } from "./base/pharmacist.controller.base";

@swagger.ApiTags("pharmacists")
@common.Controller("pharmacists")
export class PharmacistController extends PharmacistControllerBase {
  constructor(protected readonly service: PharmacistService) {
    super(service);
  }
}
