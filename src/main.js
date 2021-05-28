import { createUsers } from "./app/database/create-users";

require("dotenv").config();
import { db } from "./app/database";
import { appService } from "./app/app";
import { userModel } from "./app/models/user.model";

async function bootstrap() {
  try {
    const conn = await db().connect();
    await userModel.deleteMany();
    await userModel.insertMany(await createUsers());

    console.log("Connected to the mongoDB");
    appService();
  } catch (e) {
    console.error("Server error", e);
  }
}

(async () => await bootstrap())();
