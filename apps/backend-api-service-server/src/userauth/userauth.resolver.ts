import * as graphql from "@nestjs/graphql";
import { UserLoginDto } from "../userAuth/UserLoginDto";
import { UserRegisterDto } from "../userAuth/UserRegisterDto";
import { UserAuthService } from "./userauth.service";

export class UserAuthResolver {
  constructor(protected readonly service: UserAuthService) {}

  @graphql.Mutation(() => String)
  async LoginUser(
    @graphql.Args()
    args: UserLoginDto
  ): Promise<string> {
    return this.service.LoginUser(args);
  }

  @graphql.Mutation(() => String)
  async RegisterUser(
    @graphql.Args()
    args: UserRegisterDto
  ): Promise<string> {
    return this.service.RegisterUser(args);
  }
}
