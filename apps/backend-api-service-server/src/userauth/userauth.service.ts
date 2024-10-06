import { Injectable } from "@nestjs/common";
import { UserLoginDto } from "../userAuth/UserLoginDto";
import { UserRegisterDto } from "../userAuth/UserRegisterDto";

@Injectable()
export class UserAuthService {
  constructor() {}
  async LoginUser(args: UserLoginDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async RegisterUser(args: UserRegisterDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
