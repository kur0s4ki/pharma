import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserAuthService } from "./userauth.service";
import { UserLoginDto } from "../userAuth/UserLoginDto";
import { UserRegisterDto } from "../userAuth/UserRegisterDto";

@swagger.ApiTags("userAuths")
@common.Controller("userAuths")
export class UserAuthController {
  constructor(protected readonly service: UserAuthService) {}

  @common.Post("/login")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async LoginUser(
    @common.Body()
    body: UserLoginDto
  ): Promise<string> {
        return this.service.LoginUser(body);
      }

  @common.Post("/register")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RegisterUser(
    @common.Body()
    body: UserRegisterDto
  ): Promise<string> {
        return this.service.RegisterUser(body);
      }
}
