import { NestFactory } from "@nestjs/core";
import { AppModule } from "../../app.module";
import { UserService } from "src/user/user.service";
import seedUser from "./user.seed";

async function run() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const userService = app.get(UserService);
    await seedUser(userService);
    console.log('Seeds rodados com sucesso!');
  } catch (error) {
    console.log('Error ao rodar seeds:', error);
    process.exitCode = 1;
  } finally {
    await app.close();
  }
}

run();