import { Module } from "@nestjs/common";
import { OrderModule } from "./order/order.module";
import { MedicineModule } from "./medicine/medicine.module";
import { PrescriptionModule } from "./prescription/prescription.module";
import { CustomerModule } from "./customer/customer.module";
import { PharmacistModule } from "./pharmacist/pharmacist.module";
import { UserModule } from "./user/user.module";
import { UserAuthModule } from "./userauth/userauth.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { LoggerModule } from "./logger/logger.module";

@Module({
  controllers: [],
  imports: [
    LoggerModule,
    OrderModule,
    MedicineModule,
    PrescriptionModule,
    CustomerModule,
    PharmacistModule,
    UserModule,
    UserAuthModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
